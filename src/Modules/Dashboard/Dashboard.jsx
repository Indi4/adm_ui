import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Autocomplete, Grid, MenuItem, TextField } from "@mui/material";

import {
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
import { qualityGraphs } from "../../store/quality/qualitySlice";
import Sales from "../Sales/Sales";
import DashboardSales from "./DashboardSales";
import DashboardPlanvsAcutal from "./DAshboardPlanvsAcutal";
import DashboardPurchase from "./DashboardPurchase";
import DashboardPowerunit from "./DashboardPowerunit";

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
    const yearList = ["2025", "2024", "2023", "2022", "2021", "2020"];
    const monthList = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState("");
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
    "Major Accidents",
    "Minor Accidents",
    "PPM",
    "COPQ",
    "Sales",
    "Plan Vs Act",
    "Purchase",
    "Manpower Availability",
    "Direct Manpower",
    "Indirect Manpower",
    "Process Scrap",
    "Design Scrap",
    "Power Units",
    "Power Cost",
    "Consumable Cost",
  ];
  // function transformData(input) {
  //   const result = { Target: input.monthly_targets };

  //   input.weekly_kpis.daily_kpis.forEach((dailyKpi) => {
  //     result[dailyKpi.date] = dailyKpi;
  //   });

  //   return result;
  // }

  const {sales, plan_vs_act, purchase, power_units} = useSelector((state)=> state.quality)

  useEffect(()=>{
    if(month){
      dispatch(qualityGraphs({type:"sales",year:year,month:month}))
      dispatch(qualityGraphs({type:"plan_vs_act", year:year, month: month}))      
      dispatch(qualityGraphs({type:"purchase",year:year,month:month}))
      dispatch(qualityGraphs({type:"power_units", year:year, month: month}))      

      
    }
    else{
      dispatch(qualityGraphs({type:"sales",year:year}))
      dispatch(qualityGraphs({type:"plan_vs_act",year:year}))
      dispatch(qualityGraphs({type:"purchase",year:year}))
      dispatch(qualityGraphs({type:"power_units",year:year}))

    }
  },[dispatch, month,year])

  const handleYearInputChange = (event, value, reason) => {
    if (reason === "selectOption") {
      setYear(value);
    } else {
      setYear(new Date().getFullYear());
    }
  };

  const handleMonthInputChange = (event, value, reason) => {
    if (reason === "selectOption") {
      setMonth(value);
    } else {
      setMonth();
    }
  };


  function transformData(input) {
    const result = { Target: input.monthly_targets };

    input.weekly_kpis.daily_kpis.forEach((dailyKpi) => {
      const date = new Date(dailyKpi.date);
      const day = String(date.getDate()).padStart(2, "0");
      const month = date.toLocaleString("en-US", { month: "short" });

      const formattedDate = `${day}-${month}`;

      result[formattedDate] = dailyKpi;
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
          {/* <Card style={{ backgroundColor: "white", padding: 8 }}> */}
        <div className="row mb-4" style={{display:"flex", justifyContent:"end"}}>
          <div className="col-md-3">
            <Grid item xs={6}>
              <Autocomplete
                options={yearList || []}
                getOptionLabel={(option) => option.toString() || ""}
                value={year}
                onChange={(event, value, reason) =>
                  handleYearInputChange(event, value, reason, "year")
                }
                renderInput={(params) => <TextField {...params} label="Year" />}
                fullWidth
                disableClearable={false}
              />
            </Grid>
          </div>
            <div className="col-md-3">
              <Grid item xs={6}>
                <Autocomplete
                  options={monthList || []}
                  getOptionLabel={(option) => option.toString() || ""}
                  value={month}
                  onChange={(event, value, reason) =>
                    handleMonthInputChange(event, value, reason, "month")
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Select Months" />
                  )}
                  fullWidth
                  disableClearable={false}
                />
              </Grid>
            </div>
        

        </div>
      {/* </Card> */}
            <Col xs={12} md={3}>
              <Card
                style={{
                  backgroundColor: "#a2eafc",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 8px rgba(82, 116, 142, 0.4)",
                  height: "140px",
                }}
              >
                <CardContent>
                  {/* <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", marginBottom: "10px" }}
                  >
                    Safety
                  </Typography> */}
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
                  // backgroundColor: "#FFBB28",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 8px rgba(82, 116, 142, 0.4)",
                  height: "140px",
                }}
              >
                <CardContent>
                  {/* <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", marginBottom: "10px" }}
                  >
                    Safety
                  </Typography> */}
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
                  backgroundColor: "#a2eafc",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 8px rgba(82, 116, 142, 0.4)",
                  height: "140px",
                }}
              >
                <CardContent>
                  {/* <Typography
                    variant="h6"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "10px",
                      fontSize: "1rem",
                    }}
                  >
                    Quality
                  </Typography> */}
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
                  boxShadow: "0px 4px 8px rgba(82, 116, 142, 0.4)",
                  height: "140px",
                }}
              >
                <CardContent style={{ height: "220px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "bold",
                      marginBottom: "10px",
                      fontSize: "1rem",
                    }}
                  >
                    Manpower Availability
                  </Typography>
                  <Box>
                    <Typography variant="body2" style={{ marginBottom: "5px" }}>
                      <span style={{ color: "#00C49F" }}>
                        {availablePercentage}% Available
                      </span>{" "}
                      and{" "}
                      <span style={{ color: "#a86403" }}>
                        {unavailablePercentage}% Unavailable
                      </span>{" "}
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
                          backgroundColor: "#3ec266",
                          position: "absolute",
                        }}
                      />
                      <Box
                        style={{
                          height: "100%",
                          width: `${unavailablePercentage}%`,
                          backgroundColor: "#8cfaad",
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
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", fontSize: "1.1rem" }}
                  >
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
                      <Typography
                        variant="body1"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Actual: {dashboardDetail?.sales?.month_actual} | Target:
                        {dashboardDetail?.sales?.month_target}
                      </Typography>
                    </Box>
                    <Box>
              <DashboardSales data={sales} month={month} />
                      {/* <PieChart width={150} height={175}>
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
                      </PieChart> */}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Col>

            {/* Plan Vs Actual Card */}
            <Col xs={12} md={3}>
              <Card style={{ marginBottom: "10px", height: "280px" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", fontSize: "1.1rem" }}
                  >
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
                      <Typography
                        variant="body1"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Actual:{dashboardDetail?.plan_vs_act?.month_actual} |
                        Target:{dashboardDetail?.plan_vs_act?.month_target}
                      </Typography>
                    </Box>
                    <Box>
                      <DashboardPlanvsAcutal data={plan_vs_act} month={month}/>
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
                    style={{ fontWeight: "bold", fontSize: "1.1rem" }}
                  >
                    Purchase
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
                      <Typography
                        variant="body1"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Actual:{dashboardDetail?.purchase?.month_actual} |
                        Target:{dashboardDetail?.purchase?.month_target}
                      </Typography>
                    </Box>
                    <Box>
                    <DashboardPurchase data={purchase} month={month} />
                    </Box>
                    {/* {dashboardDetail?.purchase ? (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "left",
                          justifyContent: "left",
                        }}
                      >
                        <PurchasePieChart
                          purchase={dashboardDetail?.purchase}
                          type="purchase"
                        />
                      </Box>
                    ) : null} */}
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
                    style={{ fontWeight: "bold", fontSize: "1.1rem" }}
                  >
                    Power Unit
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* <Box>
                      <Typography
                        variant="body1"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Actual:{dashboardDetail?.power_unit?.month_actual} |
                        Target:{dashboardDetail?.power_unit?.month_target}
                      </Typography>
                    </Box> */}
                    <Box>
                    {/* <DashboardPowerunit data={power_units} month={month} /> */}
                    </Box>
                    {dashboardDetail?.power_unit ? (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "left",
                          justifyContent: "left",
                          marginTop:"10px"
                        }}
                      >
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
              <Paper>
                <Typography variant="h6" style={{fontSize:"1rem",fontWeight:"bold" }}>
                  Weekly KPIs
                </Typography>
                <TableContainer
                  component={Paper}
                  style={{ maxHeight: 290, overflow: "auto" }}
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
                            sx={{ backgroundColor: "#a2eafc" }}
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
