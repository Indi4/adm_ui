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

const data = [
  { name: "April", actual: 161, target: 208 },
  { name: "May", actual: 216, target: 258 },
  { name: "June", actual: 201, target: 268 },
  { name: "July", actual: 246, target: 268 },
  { name: "August", actual: 161, target: 246 },
  { name: "September", actual: 109, target: 182 },
  { name: "October", actual: 292, target: 293 },
  { name: "November", actual: 293, target: 293 },
  { name: "December", actual: 289, target: 293 },
  { name: "January", actual: 327, target: 335 },
  { name: "February", actual: 329, target: 335 },
  { name: "March", actual: 335, target: 335 },
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
          Monthly Target vs Monthly Actual
        </Typography>
      </Box>

      {/* Chart */}
      <Card style={{ padding: "20px" }}>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="actual" fill="#8884d8" name="Max of Month Actual" />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#FFDA44"
              strokeWidth={2}
              dot={{ r: 5 }}
              name="Max of Month Target"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Card>
    </Container>
  );
};

export default Dashboard;
