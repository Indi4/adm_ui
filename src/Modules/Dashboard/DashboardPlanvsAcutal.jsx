import React, { useEffect, useState } from "react";
import { Container, Grid, Card, Typography, Box, Button } from "@mui/material";
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
import Loader from "../../commonComponents/Loader";

const DashboardPlanvsAcutal = ({ month, data }) => {
  const { datasets, day_wise_data, final_totals } = data;
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [showFirstHalf, setShowFirstHalf] = useState(true); // Toggle state for 6-month views


  useEffect(() => {
    if (data) {
      // Simulate a loading delay (replace with real data fetching logic)
      const timer = setTimeout(() => {
        setIsLoading(false); // Set loading to false after data is fetched
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(true);
    }
  }, []);

  const monthlyTarget =
  datasets?.find((dataset) => dataset.label === "Max of monthly target")
    ?.data || [];
const monthlyActual =
  datasets?.find((dataset) => dataset.label === "Max of monthly Actual")
    ?.data || [];

// Extract data for the first or second half of the year
const chartData = monthlyTarget
  .slice(showFirstHalf ? 0 : 6, showFirstHalf ? 6 : 12)
  .map((item, index) => ({
    name: item.month,
    target: item.target,
    actual: monthlyActual[showFirstHalf ? index : index + 6]?.actual || 0,
  }));

const totals = final_totals || { actual: 0, target: 0 };

  // let chartData = [];
  // let totals = { actual: 0, target: 0 };

  // if (month) {
  //   // Filter data for the selected month from day_wise_data
  //   chartData = day_wise_data?.map((day) => ({
  //     name: `${day.day}`,
  //     target: day.target,
  //     actual: day.actual,
  //   }));
  //   totals = final_totals || { actual: 0, target: 0 };
  // } else {
  //   // Use datasets for monthly data
  //   const monthlyTarget =
  //     datasets?.find((dataset) => dataset.label === "Max of monthly target")
  //       ?.data || [];
  //   const monthlyActual =
  //     datasets?.find((dataset) => dataset.label === "Max of monthly Actual")
  //       ?.data || [];
  //   chartData = monthlyTarget.map((item, index) => ({
  //     name: item.month,
  //     target: item.target,
  //     actual: monthlyActual[index]?.actual || 0,
  //   }));
  //   totals = final_totals || { actual: 0, target: 0 };
  // }

  return (
    <Container style={{width:"100%"}}>
      {isLoading ? (
        <Box
          mt={4}
          style={{
            padding: "20px",
            height: "250px", // Ensure consistent card height
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Loader />
        </Box>
      ) : (
        <> 
        <Grid item xs={12} md={4} style={{display:"flex", justifyContent:"end"}}>
                <Button onClick={() => setShowFirstHalf((prev) => !prev)}>
                  <i class="bi bi-caret-left"></i> {showFirstHalf}
                  <i class="bi bi-caret-right"></i>
                </Button>
              </Grid>       
          {/* Bar and Line Chart */}
          <Card
            style={{
              width: "100%",
              height: 230,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems:"center",
              marginTop: "20px",
            }}
          >
            <ResponsiveContainer width="110%" height={220}>
              <ComposedChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF5F57" stopOpacity={1} />
                    <stop offset="95%" stopColor="#FF7F70" stopOpacity={0.4} />
                  </linearGradient>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#006F77" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#0097A7" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  // label={{
                  //   value: month ? "Days" : "Months",
                  //   position: "insideBottom",
                  //   offset: -2,
                  // }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="target"
                  fill="url(#colorTarget)"
                  name="Target"
                  barSize={10}
                />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#0097A7"
                  strokeWidth={2}
                  dot={{ stroke: "#0097A7", strokeWidth: 2, fill: "#0097A7" }}
                  name="Actual"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </Card>
        </>
      )}
    </Container>
  );
};

export default DashboardPlanvsAcutal;
