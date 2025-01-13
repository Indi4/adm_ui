import React from "react";
import { Container, Grid, Card, Typography, Box } from "@mui/material";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PPM = ({ qualityGraphsData, month }) => {
    if (!qualityGraphsData) {
        return (
          <Container style={{ backgroundColor: "#F4E4FA", minHeight: "100vh", padding: "20px" }}>
            <Typography variant="h5" style={{ textAlign: "center", marginTop: "20px", fontWeight: "bold" }}>
              No data available
            </Typography>
          </Container>
        );
      }
  const { datasets, day_wise_data, final_totals } = qualityGraphsData;

  let chartData = [];
  let totals = { actual: 0, target: 0 };

  if (month) {
    // Filter data for the selected month from day_wise_data
    chartData = day_wise_data.map((day) => ({
      name: `Day ${day.day}`,
      target: day.target,
      actual: day.actual,
    }));
    totals = {
      actual: chartData.reduce((sum, day) => sum + day.actual, 0),
      target: chartData.reduce((sum, day) => sum + day.target, 0),
    };
  } else {
    // Use datasets for monthly data
    const monthlyTarget = datasets.find((dataset) => dataset.label === "Avg of monthly target")?.data || [];
    const monthlyActual = datasets.find((dataset) => dataset.label === "Avg of monthly Actual")?.data || [];
    chartData = monthlyTarget.map((item, index) => ({
      name: item.month,
      target: item.target,
      actual: monthlyActual[index]?.actual || 0,
    }));
    totals = final_totals || { actual: 0, target: 0 };
  }

  return (
    <Container style={{ backgroundColor: "#F4E4FA", minHeight: "100vh", padding: "20px" }}>
      {/* Totals */}
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={3}>
          <Card style={{ textAlign: "center", padding: "10px", backgroundColor: "#FFD966" }}>
            <Typography variant="subtitle1">Total {month ? "Day" : "Month"} Actual</Typography>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              {totals.actual.toFixed(2)}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card style={{ textAlign: "center", padding: "10px", backgroundColor: "#FF8080" }}>
            <Typography variant="subtitle1">Total {month ? "Day" : "Month"} Target</Typography>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              {totals.target.toFixed(2)}
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Chart Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" my={3}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          {month ? `Daily Target vs Actual for ${month}` : "Monthly Target vs Actual"}
        </Typography>
      </Box>

      {/* Chart */}
      <Card style={{ padding: "20px" }}>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="actual" fill="#8884d8" name="Actual" />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#FFDA44"
              strokeWidth={2}
              dot={{ r: 5 }}
              name="Target"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Card>
    </Container>
  );
};

export default PPM;
