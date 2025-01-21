// import React, { useEffect, useState } from "react";
// import { Container, Grid, Card, Typography, Box } from "@mui/material";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import Loader from "../../commonComponents/Loader";
// import { Button } from "react-bootstrap";

// const COPQ = ({ month, data }) => {
//   const { datasets, day_wise_data, final_totals } = data;

//   const [isLoading, setIsLoading] = useState(true); // State to track loading

//   useEffect(() => {
//     if (data) {
//       // Simulate a loading delay (replace with real data fetching logic)
//       const timer = setTimeout(() => {
//         setIsLoading(false); // Set loading to false after data is fetched
//       }, 2000);

//       return () => clearTimeout(timer);
//     } else {
//       setIsLoading(true);
//     }
//   }, []);

//   let chartData = [];
//   let totals = { actual: 0, target: 0 };

//   if (month) {
//     // Filter data for the selected month from day_wise_data
//     chartData = day_wise_data
//       ?.filter((day) => day.target > 0 || day.actual > 0) // Filter out zero-value data points
//       .map((day) => ({
//         name: `${day.day}`,
//         target: day.target,
//         actual: day.actual,
//       }));
//     totals = final_totals || { actual: 0, target: 0 };
//   } else {
//     // Use datasets for monthly data
//     const monthlyTarget =
//       datasets?.find((dataset) => dataset.label === "Avg of monthly target")
//         ?.data || [];
//     const monthlyActual =
//       datasets?.find((dataset) => dataset.label === "Avg of monthly Actual")
//         ?.data || [];
//     chartData = monthlyTarget
//       .map((item, index) => ({
//         name: item.month,
//         target: item.target,
//         actual: monthlyActual[index]?.actual || 0,
//       }))
//       .filter((item) => item.target > 0 || item.actual > 0); // Filter out zero-value data points
//     totals = final_totals || { actual: 0, target: 0 };
//   }

//   const INNER_COLORS = [
//     // "#A8DADC",
//     // "#457B9D",
//     // "#F4A261",
//     // "#2A9D8F",
//     // "#E9C46A",
//     // "#A7C4D3",
//     // "#D4A5A5",
//     // "#84A98C",
//     // "#B3B3E6",
//     // "#F6BD60",
//     // "#6D6875",
//     // "#C9ADA7",
//     "#82ca9d",
//     " #8884d8",
//   ];

//   const OUTER_COLORS = [
//     // "#FF6F61",
//     // "#6B5B95",
//     // "#88B04B",
//     // "#F7CAC9",
//     // "#92A8D1",
//     // "#034732",
//     // "#F5E6CC",
//     // "#ED6A5A",
//     // "#05668D",
//     // "#028090",
//     // "#00A896",
//     // "#02C39A",
//     "#82ca9d",
//     " #8884d8",
//   ];

//   return (
//     <Container>
//       {isLoading ? (
//         <Box
//           mt={4}
//           style={{
//             padding: "20px",
//             height: "650px", // Ensure consistent card height
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             marginTop: "20px",
//           }}
//         >
//           <Loader />
//         </Box>
//       ) : (
//         <>
//           {/* Chart Header */}
//           <Box
//              display="flex"
//              justifyContent="space-between"
//              alignItems="center"
//              my={1}
//           >
//             <Typography variant="h6" style={{ fontWeight: "bold" }}>
//               {/* {month
//                 ? `Daily Target vs Daily Actual`
//                 : "Monthly Target vs Monthly Actual"} */}
//                 {/* <Button>  <i class="bi bi-caret-left"></i><i class="bi bi-caret-right"></i>
//                 </Button> */}
//                 <br/>
//             </Typography>
//           </Box>
//           {/* Totals */}
//           <Grid container spacing={1} justifyContent="space-between">
//             <Grid item xs={12} md={6}>
//               <Card
//                 style={{
//                   textAlign: "center",
//                   padding: "10px",
//                   backgroundColor: "#82ca9d",
//                 }}
//               >
//                 {/* <Typography variant="subtitle1">
//                   Total {month ? "Day" : "Month"} Actual
//                 </Typography> */}
//                 <Typography variant="subtitle1">
//                   Total Actual
//                 </Typography>
//                 <Typography variant="h5" style={{ fontWeight: "bold" }}>
//                   {totals.actual?.toFixed(2)}
//                 </Typography>
//               </Card>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Card
//                 style={{
//                   textAlign: "center",
//                   padding: "10px",
//                   backgroundColor: "#8884d8",
//                 }}
//               >
//                 {/* <Typography variant="subtitle1">
//                   Total {month ? "Day" : "Month"} Target
//                 </Typography> */}
//                 <Typography variant="subtitle1">
//                   Total Target
//                 </Typography>
//                 <Typography variant="h5" style={{ fontWeight: "bold" }}>
//                   {totals.target?.toFixed(2)}
//                 </Typography>
//               </Card>
//             </Grid>
//           </Grid>

//           {/* Pie Chart */}
//           {chartData.length > 0 ? (
//             <Card
//               style={{
//                 width: "100%",
//               height: 300,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               marginTop: "20px",
//               }}
//             >
//               <ResponsiveContainer width="100%" height={270}>
//                 <PieChart>
//                   <Pie
//                     data={chartData}
//                     dataKey="target"
//                     nameKey="name"
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={30}
//                     fill="#8884d8"
//                     stroke="#8884d8"
//                     strokeWidth={2}
//                     label={({ name }) => `${name}`}
//                     name="Monthly Target"
//                   >
//                     {chartData.map((_, index) => (
//                       <Cell
//                         key={`cell-${index}`}
//                         fill={INNER_COLORS[index % INNER_COLORS.length]}
//                       />
//                     ))}
//                   </Pie>

//                   <Pie
//                     data={chartData}
//                     dataKey="actual"
//                     nameKey="name"
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={80}
//                     outerRadius={90}
//                     fill="#82ca9d"
//                     stroke="#82ca9d"
//                     strokeWidth={2}
//                     label={({ name }) => `${name}`}
//                     name="Monthly Actual"
//                   >
//                     {chartData.map((_, index) => (
//                       <Cell
//                         key={`cell-${index}`}
//                         fill={OUTER_COLORS[index % OUTER_COLORS.length]}
//                       />
//                     ))}
//                   </Pie>

//                   <Tooltip />
//                   <Legend
//                     payload={[
//                       {
//                         value: "Outer Circle: Monthly Actual",
//                         type: "circle",
//                         color: "#82ca9d",
//                       },
//                       {
//                         value: "Inner Circle: Monthly Target",
//                         type: "circle",
//                         color: "#8884d8",
//                       },
//                     ]}
//                   />
//                 </PieChart>
//               </ResponsiveContainer>
//             </Card>
//           ) : (
//             <Typography
//               variant="h6"
//               style={{
//                 textAlign: "center",
//                 color: "#757575",
//                 padding: "20px",
//                 height: "350px", // Ensure consistent card height
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 marginTop: "20px",
//               }}
//             >
//               No data available for the selected period.
//             </Typography>
//           )}
//         </>
//       )}
//     </Container>
//   );
// };

// export default COPQ;

import React, { useEffect, useState } from "react";
import { Container, Grid, Card, Typography, Box, Button } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Loader from "../../commonComponents/Loader";

const COPQ = ({ month, data }) => {
  const { datasets, final_totals } = data;

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

  // Extract monthly data
  const monthlyTarget =
    datasets?.find((dataset) => dataset.label === "Avg of monthly target")
      ?.data || [];
  const monthlyActual =
    datasets?.find((dataset) => dataset.label === "Avg of monthly Actual")
      ?.data || [];

  // Toggle data between the first 6 months and the next 6 months
  const chartData = monthlyTarget
    .slice(showFirstHalf ? 0 : 6, showFirstHalf ? 6 : 12)
    .map((item, index) => ({
      name: item.month,
      target: item.target,
      actual: monthlyActual[showFirstHalf ? index : index + 6]?.actual || 0,
    }))
    .filter((item) => item.target > 0 || item.actual > 0); // Filter out zero-value data points

  const totals = final_totals || { actual: 0, target: 0 };

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
          {/* <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={1}
          > */}
          {/* <Typography variant="h6" style={{ fontWeight: "bold" }}> */}
          {/* Monthly Target vs Monthly Actual */}
          {/* </Typography>
            <Button */}
          {/* variant="outlined"
               color="primary"
             onClick={() => setShowFirstHalf((prev) => !prev)}
            > */}
          {/* <i class="bi bi-caret-left"></i> {showFirstHalf}<i class="bi bi-caret-right"></i>
            </Button>
          </Box> */}
          {/* Totals */}
          {/* <Grid container spacing={1} justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Card
                style={{
                  textAlign: "center",
                  padding: "10px",
                  backgroundColor: "#82ca9d",
                }}
              >
                <Typography variant="subtitle1" style={{ fontSize:"0.8rem" }}>Total Actual</Typography>
                <Typography variant="h6" style={{ fontSize:"0.8rem" }}>
                  {totals.actual?.toFixed(2)}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                style={{
                  textAlign: "center",
                  padding: "10px",
                  backgroundColor: "#8884d8",
                }}
              >
                <Typography variant="subtitle1" style={{ fontSize:"0.8rem" }}>Total Target</Typography>
                <Typography variant="h6" style={{ fontSize:"0.8rem" }}>
                  {totals.target?.toFixed(2)}
                </Typography>
              </Card>
            </Grid>
          </Grid> */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            paddingLeft={7}
          >
            <Grid container spacing={1} justifyContent="space-between">
              <Grid item xs={12} md={4}>
                <Card
                  style={{
                    textAlign: "center",
                    // padding: "10px",
                    backgroundColor: "#8884d8",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    style={{ fontSize: "0.7rem", fontWeight: "bold" }}
                  >
                    Total Actual
                  </Typography>
                  <Typography variant="h6" style={{ fontSize: "0.7rem" }}>
                    {totals.actual?.toFixed(2)}
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card
                  style={{
                    textAlign: "center",
                    // padding: "10px",
                    backgroundColor: "#FFDA44",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    style={{ fontSize: "0.7rem", fontWeight: "bold" }}
                  >
                    Total Target
                  </Typography>
                  <Typography variant="h6" style={{ fontSize: "0.7rem" }}>
                    {totals.target?.toFixed(2)}
                  </Typography>
                </Card>
              </Grid>
              <Typography style={{ fontWeight: "bold", fontSize: "0.8rem" }}>
                {/* Monthly Target vs Monthly Actual */}
              </Typography>
              <Grid item xs={12} md={4}>
                <Button onClick={() => setShowFirstHalf((prev) => !prev)}>
                  <i class="bi bi-caret-left"></i> {showFirstHalf}
                  <i class="bi bi-caret-right"></i>
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* Bar Chart */}
          {chartData.length > 0 ? (
            <Card
              style={{
                width: "100%",
                height: 200,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <ResponsiveContainer width="100%"  height={230}>
                <BarChart
                  data={chartData}
                  margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  {/* <Legend /> */}
                  <Bar dataKey="target" fill="#8884d8" name="Target" />
                  <Bar dataKey="actual" fill="#82ca9d" name="Actual" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          ) : (
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                color: "#757575",
                // padding: "20px",
                height: "250px", // Ensure consistent card height
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // marginTop: "20px",
              }}
            >
              No data available for the selected period.
            </Typography>
          )}
        </>
      )}
    </Container>
  );
};

export default COPQ;
