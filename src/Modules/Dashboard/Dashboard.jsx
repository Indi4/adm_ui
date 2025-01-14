import React from "react";
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

const data1 = [
  { name: "Completed", value: 40.8 },
  { name: "Remaining", value: 59.2 },
];

const data = [
  { name: "Used", value: 70 },
  { name: "Remaining", value: 30 },
];

const Dashboard = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#F4E4FA",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Leaderboard Header */}
      <Row>
        <Col xs={12} md={3}>
          <Typography
            variant="h4"
            style={{ fontWeight: "bold", width: "max-content" }}
          >
            LEADER BOARD
          </Typography>
        </Col>
      </Row>

      {/* Dashboard Cards */}
      <Row className="mb-3">
        <Col xs={12} md={4}>
          <Card
            style={{
              backgroundColor: "#FFD966",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              height: "220px",
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
                style={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                Injury Free Days In A Row
              </Typography>
              <Typography
                variant="h4"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                115
              </Typography>
            </CardContent>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card
            style={{
              backgroundColor: "#B4EBEB",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              height: "220px",
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
                style={{ fontWeight: "bold", fontSize: "1.5rem" }}
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
                0
              </Typography>
            </CardContent>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card
            style={{
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
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
                  95% Available
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
                      width: "90%",
                      backgroundColor: "#4eeddb",
                      position: "absolute",
                    }}
                  />
                  <Box
                    style={{
                      height: "100%",
                      width: "10%",
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

      {/* Progress Charts Section */}
      <Row className="mb-3">
        <Col xs={12} md={6} lg={6}>
          <Col>
            {/* Card for Purchase */}
            <Card>
              <CardContent>
                <Grid container alignItems="center">
                  {/* Sales */}
                  <Grid item xs={6}>
                    <Typography variant="h6">Sales</Typography>
                    <PieChart width={100} height={100}>
                      <Pie
                        data={data1}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={40}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                      >
                        {data1.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6">Actual: 1003.4</Typography>
                    <Typography variant="h6">Target: 5467.2</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Card for Power Unit */}
            <Card style={{ marginTop: "16px" }}>
              <CardContent>
                <Grid container alignItems="center">
                  {/* Plan vs Actual */}
                  <Grid item xs={6}>
                    <Typography variant="h6">Plan Vs Actual</Typography>
                    <PieChart width={100} height={100}>
                      <Pie
                        data={data1}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={40}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                      >
                        {data1.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6">Actual: 4025.6</Typography>
                    <Typography variant="h6">Target: 5467.2</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Col>
        </Col>

        <Col>
          {/* Card for Purchase */}
          <Card>
            <CardContent>
              <Grid container alignItems="center">
                {/* Sales */}
                <Grid item xs={6}>
                  <Typography variant="h6">Purchase</Typography>
                  <PieChart width={150} height={100}>
                    <Pie
                      data={data}
                      cx={75}
                      cy={75}
                      startAngle={180}
                      endAngle={0}
                      innerRadius={30}
                      outerRadius={60}
                      paddingAngle={0}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    {/* Needle */}
                    <g>
                      <line
                        x1={75}
                        y1={75}
                        x2={75 + 60 * Math.cos(Math.PI / 180)}
                        y2={75 + 60 * Math.sin(Math.PI / 180)}
                        stroke="red"
                        strokeWidth={5}
                      />
                      <circle cx={75} cy={75} r={4} fill="black" />
                    </g>
                  </PieChart>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">Actual: 1003.4</Typography>
                  <Typography variant="h6">Target: 5467.2</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Card for Power Unit */}
          <Card style={{ marginTop: "16px" }}>
            <CardContent>
              <Grid container alignItems="center">
                {/* Plan vs Actual */}
                <Grid item xs={6}>
                  <Typography variant="h6">Power Unit</Typography>
                  <PieChart width={150} height={100}>
                    <Pie
                      data={data}
                      cx={75}
                      cy={75}
                      startAngle={180}
                      endAngle={0}
                      innerRadius={30}
                      outerRadius={60}
                      paddingAngle={0}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    {/* Needle */}
                    <g>
                      <line
                        x1={75}
                        y1={75}
                        x2={75 + 60 * Math.cos(Math.PI / 180)}
                        y2={75 + 60 * Math.sin(Math.PI / 180)}
                        stroke="red"
                        strokeWidth={5}
                      />
                      <circle cx={75} cy={75} r={4} fill="black" />
                    </g>
                  </PieChart>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">Actual: 4025.6</Typography>
                  <Typography variant="h6">Target: 5467.2</Typography>
                </Grid>
              </Grid>
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
