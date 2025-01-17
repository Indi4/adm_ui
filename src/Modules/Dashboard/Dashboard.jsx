import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardMainData } from "../../store/dashboard/dashboardMainSlice";
import PurchasePieChart from "./PurchasePiechart";
import Loader from "../../commonComponents/Loader";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardMainData());
  }, [dispatch]);

  const { dashboardDetail } = useSelector((state) => state.dashboardMain);

  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [tableData, setTableData] = useState(null);
  const [headers, setHeaders] = useState([""]);
  const [rowKeys, setRowKeys] = useState([]);
  const parameters = [
    "MajorAccidents",
    "MinorAccidents",
    "PPM",
    "COPQ",
    "Sales",
    "PlanVsAct",
    "Purchase",
    "ManpowerAvailability",
    "DirectManpower",
    "IndirectManpower",
    "ProcessScrap",
    "DesignScrap",
    "PowerUnits",
    "PowerCost",
    "ConsumableCost",
  ];
  function transformData(input) {
    const result = { Target: input.monthly_targets };

    input.weekly_kpis.daily_kpis.forEach((dailyKpi) => {
      result[dailyKpi.date] = dailyKpi;
    });

    return result;
  }

  useEffect(() => {
    if (dashboardDetail) {
      const res = transformData(dashboardDetail);
      let cols = Object.keys(res);
      const updatedArray = ["", ...cols];
      setRowKeys(cols);
      setHeaders(updatedArray);
      setTableData(res);
    }
  }, [dashboardDetail]);

  useEffect(() => {
    if (dashboardDetail) {
      // Simulate a loading delay (replace with real data fetching logic)
      const timer = setTimeout(() => {
        setIsLoading(false); // Set loading to false after data is fetched
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(true);
    }
  }, [dashboardDetail]);
  const salesData = [
    {
      name: "Monthly Actual",
      value: dashboardDetail?.sales?.month_actual || 0,
    },
    {
      name: "Monthly Target",
      value: dashboardDetail?.sales?.month_target || 0,
    },
  ];
  const planVsActualData = [
    {
      name: "Monthly Actual",
      value: dashboardDetail?.plan_vs_act?.month_actual || 0,
    },
    {
      name: "Monthly Target",
      value: dashboardDetail?.plan_vs_act?.month_target || 0,
    },
  ];

  // ------------------------------------------------- manpower Avialable logic ---------------------------------------------
  const dataAvailable = dashboardDetail?.manpower?.actual_manpower_availability;
  const unavailablePercentage = 100 - dataAvailable;
  const availablePercentage =
    dashboardDetail?.manpower?.actual_manpower_availability;

  return (
    <Container
      fluid
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            flexDirection: "column", // Stack loader and text
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <Loader />
          <Box
            sx={{
              mt: 2, // Margin-top for spacing
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#333", // Dark text color
              textAlign: "center",
            }}
          >
            Loading your Data... Please wait.
          </Box>
        </Box>
      ) : (
        <>
          <Row className="mb-3">
            <Col xs={12} md={3}>
              <Card
                style={{
                  backgroundColor: "#f05656",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  height: "170px",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", marginBottom: "10px" }}
                  >
                    Safety
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "bold", fontSize: "1rem" }}
                  >
                    Major Injury Free Days
                  </Typography>
                  <Typography
                    variant="h4"
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                  >
                    {dashboardDetail?.major_accidents.days_since_last_accident}
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col xs={12} md={3}>
              <Card
                style={{
                  backgroundColor: "#FFD966",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  height: "170px",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", marginBottom: "10px" }}
                  >
                    Safety
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "bold", fontSize: "1rem" }}
                  >
                    Minor Injury Free Days
                  </Typography>
                  <Typography
                    variant="h4"
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                  >
                    {dashboardDetail?.minor_accidents.days_since_last_accident}
                  </Typography>
                </CardContent>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card
                style={{
                  backgroundColor: "#B4EBEB",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  height: "170px",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", marginBottom: "10px" }}
                  >
                    Quality
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "bold", fontSize: "1rem" }}
                  >
                    Quality Incidents This Week
                  </Typography>
                  <Typography
                    variant="h4"
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                  >
                    {dashboardDetail?.quality?.month_target}
                  </Typography>
                </CardContent>
              </Card>
            </Col>

            <Col xs={12} md={3}>
              <Card
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  height: "170px",
                }}
              >
                <CardContent style={{ height: "220px" }}>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", marginBottom: "10px" }}
                  >
                    Manpower Availability
                  </Typography>
                  <Box>
                    <Typography variant="body2" style={{ marginBottom: "5px" }}>
                      {availablePercentage}% Available
                    </Typography>
                    <Box
                      style={{
                        height: "40px",
                        width: "100%",
                        backgroundColor: "#C8E6C9",
                        borderRadius: "5px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Box
                        style={{
                          height: "100%",
                          width: `${availablePercentage}%`,
                          backgroundColor: "#4eeddb",
                          position: "absolute",
                        }}
                      />
                      <Box
                        style={{
                          height: "100%",
                          width: `${unavailablePercentage}%`,
                          backgroundColor: "#D1D1D1",
                          position: "absolute",
                          right: 0,
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Col>
          </Row>

          <Row className="mb-3">
            {/* Sales Card */}
            <Col xs={12} md={3}>
              <Card style={{ marginBottom: "10px", height: "280px" }}>
                <CardContent>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    Sales
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="body1">
                        Actual: {dashboardDetail?.sales?.month_actual} | Target:{" "}
                        {dashboardDetail?.sales?.month_target}
                      </Typography>
                    </Box>
                    <Box>
                      <PieChart width={150} height={175}>
                        <Pie
                          data={salesData}
                          cx={70}
                          cy={70}
                          innerRadius={50}
                          outerRadius={70}
                          // fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {salesData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Legend
                          payload={[
                            {
                              value: "Actual",
                              type: "circle",
                              color: "#00C49F",
                            },
                            {
                              value: "Target",
                              type: "circle",
                              color: "#FFBB28",
                            },
                          ]}
                        />
                      </PieChart>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Col>

            {/* Plan Vs Actual Card */}
            <Col xs={12} md={3}>
              <Card style={{ marginBottom: "10px", height: "280px" }}>
                <CardContent>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    Plan Vs Actual
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="body1">
                        Actual: {dashboardDetail?.plan_vs_act?.month_actual} |
                        Target: {dashboardDetail?.plan_vs_act?.month_target}
                      </Typography>
                    </Box>
                    <Box>
                      <PieChart width={150} height={175}>
                        <Pie
                          data={planVsActualData}
                          cx={70}
                          cy={70}
                          innerRadius={50}
                          outerRadius={70}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {planVsActualData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Legend
                          payload={[
                            {
                              value: "Actual",
                              type: "circle",
                              color: "#00C49F",
                            },
                            {
                              value: "Target",
                              type: "circle",
                              color: "#FFBB28",
                            },
                          ]}
                        />
                      </PieChart>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Col>

            {/* Purchase Card */}

            <Col xs={12} md={3}>
              <Card style={{ marginBottom: "10px", height: "280px" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{ marginBottom: "5px", fontWeight: "bold" }}
                  >
                    Purchase
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {dashboardDetail?.purchase ? (
                      <Box>
                        <PurchasePieChart
                          purchase={dashboardDetail?.purchase}
                          type="purchase"
                        />
                      </Box>
                    ) : null}
                  </Box>
                </CardContent>
              </Card>
            </Col>
            {/* Power Unit Card */}
            <Col xs={12} md={3}>
              <Card style={{ marginBottom: "10px", height: "280px" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{ marginBottom: "10px", fontWeight: "bold" }}
                  >
                    Power Unit
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {dashboardDetail?.power_unit ? (
                      <Box>
                        <PurchasePieChart
                          purchase={dashboardDetail?.power_unit}
                          type="purchase"
                        />
                      </Box>
                    ) : null}
                  </Box>
                </CardContent>
              </Card>
            </Col>
          </Row>

          {/* Data Table Section */}
          <Row>
            <Col xs={12}>
              <Paper style={{ padding: "20px" }}>
                <Typography variant="h6" style={{ marginBottom: "10px" }}>
                  Weekly KPIs
                </Typography>
                <TableContainer
                  component={Paper}
                  style={{ maxHeight: 400, overflow: "auto" }}
                >
                  <Table sx={{ minWidth: 550 }} stickyHeader>
                    <TableHead>
                      <TableRow align="left">
                        {headers?.map((item) => {
                          return <TableCell key={item}>{item}</TableCell>;
                        })}
                      </TableRow>
                    </TableHead>
                    {/* Body */}
                    <TableBody>
                      {parameters?.map((key, rowIndex) => (
                        <TableRow key={rowIndex}>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ backgroundColor: "#9ff5f5" }}
                          >
                            {key}
                          </TableCell>
                          {headers?.slice(1).map((header, colIndex) => {
                            return (
                              <TableCell key={colIndex}>
                                {tableData[header]
                                  ? tableData[header][key]
                                  : "-"}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
