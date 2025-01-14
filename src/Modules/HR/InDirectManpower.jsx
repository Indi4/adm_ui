import React from "react";
import { Container, Grid, Card, Typography, Box } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const InDirectManpower = ({ month, data }) => {
  const { datasets, day_wise_data, final_totals } = data;

  let chartData = [];
  let totals = { actual: 0, target: 0 };

  if (month) {
    // Filter data for the selected month from day_wise_data
    chartData = day_wise_data
      ?.filter((day) => day.target > 0 || day.actual > 0) // Filter out zero-value data points
      .map((day) => ({
        name: `${day.day}`,
        target: day.target,
        actual: day.actual,
      }));
    totals = final_totals || { actual: 0, target: 0 };
  } else {
    // Use datasets for monthly data
    const monthlyTarget = datasets?.find((dataset) => dataset.label === "Avg of monthly target")?.data || [];
    const monthlyActual = datasets?.find((dataset) => dataset.label === "Avg of monthly Actual")?.data || [];
    chartData = monthlyTarget
      .map((item, index) => ({
        name: item.month,
        target: item.target,
        actual: monthlyActual[index]?.actual || 0,
      }))
      .filter((item) => item.target > 0 || item.actual > 0); // Filter out zero-value data points
    totals = final_totals || { actual: 0, target: 0 };
  }

  const INNER_COLORS = [
    "#A8DADC",
    "#457B9D",
    "#F4A261",
    "#2A9D8F",
    "#E9C46A",
    "#A7C4D3",
    "#D4A5A5",
    "#84A98C",
    "#B3B3E6",
    "#F6BD60",
    "#6D6875",
    "#C9ADA7",
  ];

  const OUTER_COLORS = [
    "#FF6F61",
    "#6B5B95",
    "#88B04B",
    "#F7CAC9",
    "#92A8D1",
    "#034732",
    "#F5E6CC",
    "#ED6A5A",
    "#05668D",
    "#028090",
    "#00A896",
    "#02C39A",
  ];

  return (
    <Container style={{ backgroundColor: "rgb(248, 249, 250", minHeight: "100vh", padding: "20px" }}>
      {/* Totals */}
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={3}>
          <Card style={{ textAlign: "center", padding: "10px", backgroundColor: "#82ca9d" }}>
            <Typography variant="subtitle1">Total {month ? "Day" : "Month"} Actual</Typography>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              {totals.actual?.toFixed(2)}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card style={{ textAlign: "center", padding: "10px", backgroundColor: "#8884d8" }}>
            <Typography variant="subtitle1">Total {month ? "Day" : "Month"} Target</Typography>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              {totals.target?.toFixed(2)}
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Chart Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" my={3}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          {month ? `Daily Target vs Daily Actual` : "Monthly Target vs Monthly Actual"}
        </Typography>
      </Box>

      {/* Pie Chart */}
      {chartData.length > 0 ? (
        <Card style={{ padding: "20px" }}>
          <ResponsiveContainer width="100%" height={600}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="target"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                fill="#8884d8"
                stroke="#8884d8"
                strokeWidth={3} 
                label={({ name }) => `${name}`}
                name="Monthly Target"
              >
                {chartData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={INNER_COLORS[index % INNER_COLORS.length]} />
                ))}
              </Pie>

              <Pie
                data={chartData}
                dataKey="actual"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={170}
                outerRadius={220}
                fill="#82ca9d"
                stroke="#82ca9d"
                strokeWidth={2} 
                label={({ name }) => `${name}`}
                name="Monthly Actual"
              >
                {chartData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={OUTER_COLORS[index % OUTER_COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend
                payload={[
                  { value: "Outer Circle: Monthly Actual", type: "circle", color:"#82ca9d"},
                  { value: "Inner Circle: Monthly Target", type: "circle", color:"#8884d8"},
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      ) : (
        <Typography variant="h6" style={{ textAlign: "center", marginTop: "50px", color: "#757575" }}>
          No data available for the selected period.
        </Typography>
      )}
    </Container>
  );
};

export default InDirectManpower;
