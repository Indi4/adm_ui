import React from "react";
import { Container, Grid, Card, Typography, Box } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ProcessScrap = ({ month, data }) => {
  const { datasets, day_wise_data, final_totals } = data;
  console.log(data);

  let chartData = [];
  let totals = { actual: 0, target: 0 };

  if (month) {
    // Filter data for the selected month from day_wise_data
    chartData = day_wise_data?.map((day) => ({
      name: `${day.day}`,
      target: day.target,
      actual: day.actual,
    }));
    totals = final_totals || { actual: 0, target: 0 };
  } else {
    // Use datasets for monthly data
    const monthlyTarget =
      datasets?.find((dataset) => dataset.label === "Sum of monthly target")?.data || [];
    const monthlyActual =
      datasets?.find((dataset) => dataset.label === "Sum of monthly Actual")?.data || [];
    chartData = monthlyTarget.map((item, index) => ({
      name: item.month,
      target: item.target,
      actual: monthlyActual[index]?.actual || 0,
    }));
    totals = final_totals || { actual: 0, target: 0 };
  }

  return (
    <Container style={{ backgroundColor: "rgb(248, 249, 250", minHeight: "100vh", padding: "20px" }}>
      {/* Totals */}
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={3}>
          <Card style={{ textAlign: "center", padding: "10px", backgroundColor: "#FFD966" }}>
            <Typography variant="subtitle1">Total {month ? "Day" : "Month"} Actual</Typography>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              {totals.actual?.toFixed(2)}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card style={{ textAlign: "center", padding: "10px", backgroundColor: "#88B04B" }}>
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

      {/* Area Chart */}
      <Card style={{ padding: "20px" }}>
        <ResponsiveContainer width="100%" height={600}>
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label={{ value: "Days", position: "insideBottom", dy: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="target"
              stroke="#88B04B"
              fill="#88B04B"
              strokeWidth={2}
              name="Target"
            />
            <Area
              type="monotone"
              dataKey="actual"
              stroke="#FFD966"
              fill="#FFD966"
              strokeWidth={2}
              name="Actual"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </Container>
  );
};

export default ProcessScrap;
