import React from "react";
import { Container, Grid, Card, Typography, Box, Button, Checkbox, FormControlLabel } from "@mui/material";
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

// Sample daily data (1–31)
const dailyData = [
  { day: 1, actual: 10, target: 12 },
  { day: 2, actual: 14, target: 15 },
  { day: 3, actual: 12, target: 14 },
  { day: 4, actual: 13, target: 13 },
  { day: 5, actual: 15, target: 16 },
  { day: 6, actual: 16, target: 16 },
  { day: 7, actual: 14, target: 15 },
  { day: 8, actual: 18, target: 20 },
  { day: 9, actual: 17, target: 18 },
  { day: 10, actual: 16, target: 17 },
  { day: 11, actual: 15, target: 16 },
  { day: 12, actual: 14, target: 15 },
  { day: 13, actual: 13, target: 14 },
  { day: 14, actual: 12, target: 13 },
  { day: 15, actual: 11, target: 12 },
  { day: 16, actual: 10, target: 12 },
  { day: 17, actual: 14, target: 15 },
  { day: 18, actual: 15, target: 16 },
  { day: 19, actual: 16, target: 18 },
  { day: 20, actual: 17, target: 19 },
  { day: 21, actual: 18, target: 20 },
  { day: 22, actual: 17, target: 19 },
  { day: 23, actual: 16, target: 18 },
  { day: 24, actual: 15, target: 16 },
  { day: 25, actual: 14, target: 15 },
  { day: 26, actual: 13, target: 14 },
  { day: 27, actual: 12, target: 13 },
  { day: 28, actual: 11, target: 12 },
  { day: 29, actual: 14, target: 15 },
  { day: 30, actual: 15, target: 16 },
  { day: 31, actual: 16, target: 17 },
];

const Dashboard = () => {
  return (
    <Container style={{ backgroundColor: "#F4E4FA", minHeight: "100vh", padding: "20px" }}>

      {/* Filters */}
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={3}>
          <Card style={{ textAlign: "center", padding: "10px", backgroundColor: "#FFD966" }}>
            <Typography variant="subtitle1">Total Month Actual</Typography>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              268.48
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card style={{ textAlign: "center", padding: "10px", backgroundColor: "#FF8080" }}>
            <Typography variant="subtitle1">Total Month Target</Typography>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              335
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Chart Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" my={3}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          Daily Target vs Daily Actual
        </Typography>
      </Box>

      {/* Chart */}
      <Card style={{ padding: "20px" }}>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={dailyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" label={{ value: "Days", position: "insideBottom", offset: -2 }} />
            <YAxis />
            <Tooltip />
            <Legend
                wrapperStyle={{ paddingTop: 5 }}
            />
            <Bar dataKey="actual" fill="#8884d8" name="Max of Daily Actual" />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#FFDA44"
              strokeWidth={2}
              dot={{ r: 5 }}
              name="Max of Daily Target"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Card>
    </Container>
  );
};

export default Dashboard;
