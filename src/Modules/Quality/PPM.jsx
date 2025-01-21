import React, { useEffect, useState } from "react";
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
import Loader from "../../commonComponents/Loader";

const PPM = ({ month, data }) => {
  // if (!qualityGraphsData) {
  //     return (
  //       <Container style={{ backgroundColor: "#F4E4FA", minHeight: "100vh", padding: "20px" }}>
  //         <Typography variant="h5" style={{ textAlign: "center", marginTop: "20px", fontWeight: "bold" }}>
  //           No data available
  //         </Typography>
  //       </Container>
  //     );
  //   }
  const { datasets, day_wise_data, final_totals } = data;

  const [isLoading, setIsLoading] = useState(true); // State to track loading
  

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
      datasets?.find((dataset) => dataset.label === "Avg of monthly target")
        ?.data || [];
    const monthlyActual =
      datasets?.find((dataset) => dataset.label === "Avg of monthly Actual")
        ?.data || [];
    chartData = monthlyTarget.map((item, index) => ({
      name: item.month,
      target: item.target,
      actual: monthlyActual[index]?.actual || 0,
    }));
    totals = final_totals || { actual: 0, target: 0 };
  }

  return (
    <Container>
      {isLoading ? (
        <Box
          mt={4}
          style={{
            padding: "20px",
            height: "650px", // Ensure consistent card height
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
         {/* Chart Header */}
         <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={1}
          >
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              {month
                ? `Daily Target vs Daily Actual`
                : "Monthly Target vs Monthly Actual"}
            </Typography>
          </Box>
          {/* Totals */}
          <Grid container spacing={1} justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Card
                style={{
                  textAlign: "center",
                  padding: "10px",
                  backgroundColor: "#8884d8",
                }}
              >
                <Typography
                  variant="subtitle1"
                  // style={{fontSize: "0.8rem" }}
                >
                  Total {month ? "Day" : "Month"} Actual
                </Typography>
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  {totals.actual?.toFixed(2)}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                style={{
                  textAlign: "center",
                  padding: "10px",
                  backgroundColor: "#FFDA44",
                }}
              >
                <Typography variant="subtitle1">
                  Total {month ? "Day" : "Month"} Target
                </Typography>
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  {totals.target?.toFixed(2)}
                </Typography>
              </Card>
            </Grid>
          </Grid>

         

          {/* Chart */}
          <Card
            style={{
              padding: "20px",
              // height: "550px", // Ensure consistent card height
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <ResponsiveContainer width="100%" height={240}>
              <ComposedChart
                data={chartData}
                margin={{ top: 10, right: 50, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* <Bar dataKey="actual" fill="#8884d8" name="Actual" /> */}
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#FFDA44"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Target"
                />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={{ r: 5 }}
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

export default PPM;
