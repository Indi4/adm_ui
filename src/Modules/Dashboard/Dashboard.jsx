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
import { PieChart, Pie, Cell } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardMainData } from "../../store/dashboard/dashboardMainSlice";

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


const Dashboard = ({ manpower }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardMainData());
  }, [dispatch]);

  const { dashboardDetail } = useSelector((state) => state.dashboardMain);

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
  const purchaseData = [
    {
      name: "Monthly Actual",
      value: dashboardDetail?.purchase?.month_actual || 0,
    },
    {
      name: "Monthly Target",
      value: dashboardDetail?.purchase?.month_target || 0,
    },
  ];
  const powerUnitData = [
    {
      name: "Monthly Actual",
      value: dashboardDetail?.power_unit?.month_actual || 0,
    },
    {
      name: "Monthly Target",
      value: dashboardDetail?.power_unit?.month_target || 0,
    },
  ]; 

  // ------------------------------------------------- manpower Avialable logic ---------------------------------------------
  const dataAvailable = dashboardDetail?.manpower?.actual_manpower_availability
  const unavailablePercentage = 100 - dataAvailable;
  const availablePercentage = dashboardDetail?.manpower?.actual_manpower_availability;

  // Needdle Value

  const data = [
    { name: "A", value: 80, color: "#ff0000" },
    { name: "B", value: 45, color: "#00ff00" },
    { name: "C", value: 25, color: "#0000ff" },
  ];
  const cx = 150;
  const cy = 100;
  const iR = 50;
  const oR = 100;
  const value = 50;
  const RADIAN = Math.PI / 180;

  const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="#none"
        fill={color}
      />,
    ];
  };

  const Needle = ({ cx, cy, radius, angle }) => {
    const radianAngle = (180 - angle) * (Math.PI / 180); // Convert to radians
    const x2 = cx + radius * Math.cos(radianAngle);
    const y2 = cy - radius * Math.sin(radianAngle); // Subtract to account for SVG coordinate system

    return (
      <g>
        <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="red" strokeWidth={2} />
        <circle cx={cx} cy={cy} r={4} fill="black" />
      </g>
    );
  };

  const angle = 20; // Adjust needle angle based on value

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#F4E4FA",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* <Row>
        <Col xs={12} md={3}>
          <Typography
            variant="h4"
            style={{ fontWeight: "bold", width: "max-content" }}
          >
            LEADER BOARD
          </Typography>
        </Col>
      </Row> */}

      <Row className="mb-3">
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
                {dashboardDetail?.safety?.major.days_since_last_accident}
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
                {dashboardDetail?.safety?.minor.days_since_last_accident}
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
          <Card style={{ marginBottom: "10px", height: "250px" }}>
            <CardContent>
              <Typography
                variant="h6"
                style={{ marginBottom: "10px", fontWeight: "bold" }}
              >
                Sales
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <PieChart width={150} height={200}>
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
                  </PieChart>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <Typography variant="body1">
                    Actual: {dashboardDetail?.sales?.month_actual}
                  </Typography>
                  <Typography variant="body1">
                    Target: {dashboardDetail?.sales?.month_target}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Col>

        {/* Plan Vs Actual Card */}
        <Col xs={12} md={3}>
          <Card style={{ marginBottom: "10px", height: "250px" }}>
            <CardContent>
              <Typography
                variant="h6"
                style={{ marginBottom: "10px", fontWeight: "bold" }}
              >
                Plan Vs Actual
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <PieChart width={150} height={200}>
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
                  </PieChart>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <Typography variant="body1">
                    Actual: {dashboardDetail?.plan_vs_act?.month_actual}
                  </Typography>
                  <Typography variant="body1">
                    Target: {dashboardDetail?.plan_vs_act?.month_target}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Col>

        {/* Purchase Card */}
        <Col xs={12} md={3}>
          <Card style={{ marginBottom: "10px", height: "250px" }}>
            <CardContent>
              <Typography
                variant="h6"
                style={{ marginBottom: "10px", fontWeight: "bold" }}
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
                <Box>
                  <PieChart width={250} height={150}>
                    <Pie
                      dataKey="value"
                      startAngle={180}
                      endAngle={0}
                      data={purchaseData}
                      cx={cx}
                      cy={cy}
                      innerRadius={iR}
                      outerRadius={oR}
                      fill="#8884d8"
                      stroke="none"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    {needle(value, data, cx, cy, iR, oR, "#d0d000")}
                  </PieChart>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <Typography variant="body1">
                    Actual: {dashboardDetail?.purchase?.month_actual}
                  </Typography>
                  <Typography variant="body1">
                    Target: {dashboardDetail?.purchase?.month_target}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Col>

        {/* Power Unit Card */}
        <Col xs={12} md={3}>
          <Card style={{ marginBottom: "10px", height: "250px" }}>
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
                <Box>
                  <PieChart width={150} height={150}>
                    <Pie
                      data={powerUnitData}
                      cx={75}
                      cy={75}
                      startAngle={180}
                      endAngle={0}
                      innerRadius={30}
                      outerRadius={60}
                      paddingAngle={0}
                      dataKey="value"
                    >
                      {powerUnitData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Needle cx={75} cy={75} radius={60} angle={angle} />
                  </PieChart>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <Typography variant="body1">
                    Actual: {dashboardDetail?.power_unit?.month_actual}
                  </Typography>
                  <Typography variant="body1">
                    Target: {dashboardDetail?.power_unit?.month_target}
                  </Typography>
                </Box>
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
              User Data Table
            </Typography>
            <TableContainer
              component={Paper}
              style={{ maxHeight: 400, overflow: "auto" }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
