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
import Loader from '../../commonComponents/Loader'

const DashboardSales = ({month, data}) => {
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
    const [showFirstHalf, setShowFirstHalf] = useState(true); // Toggle state for 6-month views

  useEffect(() => {
    if(data){
      // Simulate a loading delay (replace with real data fetching logic)
      const timer = setTimeout(() => {
        setIsLoading(false); // Set loading to false after data is fetched
      }, 2000);
      
      return () => clearTimeout(timer);
    }
    else{
      setIsLoading(true)
    }
    
  }, []);

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
  //   const monthlyTarget = datasets?.find((dataset) => dataset.label === "Max of monthly target")?.data || [];
  //   const monthlyActual = datasets?.find((dataset) => dataset.label === "Max of monthly Actual")?.data || [];
  //   chartData = monthlyTarget.map((item, index) => ({
  //     name: item.month,
  //     target: item.target,
  //     actual: monthlyActual[index]?.actual || 0,
  //   }));
  //   totals = final_totals || { actual: 0, target: 0 };
  // }

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

  return (
    <Container style={{width:"100%"}}>
            {isLoading?(
         <Box mt={4}
         style={{   padding: "20px",
          height: "250px", // Ensure consistent card height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "20px", }}
         >
         <Loader />
       </Box>
):(
<>      
      <Grid item xs={12} md={4} style={{display:"flex", justifyContent:"end"}}>
         <Button onClick={() => setShowFirstHalf((prev) => !prev)}>
           <i class="bi bi-caret-left"></i> {showFirstHalf}
           <i class="bi bi-caret-right"></i>
         </Button>
       </Grid>
      {/* Chart */}
      <Card style={{
          height: 230, // Ensure consistent card height
          width:"100%",
          display: "flex",
          flexDirection: "column",
            justifyContent: "center",
            alignItems:"center",
          marginTop: "20px",
         }}>
        <ResponsiveContainer width="110%" height={220}>
          <ComposedChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
              dot={{ r: 5 }}
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

export default DashboardSales;
