// import React, { useEffect, useState } from "react";
// import { Container, Grid, Card, Typography, Box } from "@mui/material";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import Loader from '../../commonComponents/Loader'


// const PlanVsAct = ({ month, data }) => {
//   const { datasets, day_wise_data, final_totals } = data;
//   const [isLoading, setIsLoading] = useState(true); // State to track loading

//   useEffect(() => {
//     if(data){
//       // Simulate a loading delay (replace with real data fetching logic)
//       const timer = setTimeout(() => {
//         setIsLoading(false); // Set loading to false after data is fetched
//       }, 2000);
      
//       return () => clearTimeout(timer);
//     }
//     else{
//       setIsLoading(true)
//     }
    
//   }, []);

//   let chartData = [];
//   let totals = { actual: 0, target: 0 };

//   if (month) {
//     // Filter data for the selected month from day_wise_data
//     chartData = day_wise_data?.map((day) => ({
//       name: `${day.day}`,
//       target: day.target,
//       actual: day.actual,
//     }));
//     totals = final_totals || { actual: 0, target: 0 };
//   } else {
//     // Use datasets for monthly data
//     const monthlyTarget =
//       datasets?.find((dataset) => dataset.label === "Max of monthly target")?.data || [];
//     const monthlyActual =
//       datasets?.find((dataset) => dataset.label === "Max of monthly Actual")?.data || [];
//     chartData = monthlyTarget.map((item, index) => ({
//       name: item.month,
//       target: item.target,
//       actual: monthlyActual[index]?.actual || 0,
//     }));
//     totals = final_totals || { actual: 0, target: 0 };
//   }

//   return (
//     <Container>

// {isLoading?(
//          <Box mt={4}
//          style={{   padding: "20px",
//           height: "650px", // Ensure consistent card height
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           marginTop: "20px", }}
//          >
//          <Loader />
//        </Box>
//        ):(
//         <>
//           {/* Chart Header */}
//       <Box display="flex" justifyContent="space-between" alignItems="center" my={3}>
//         <Typography variant="h6" style={{ fontWeight: "bold" }}>
//           {month ? `Daily Target vs Daily Actual` : "Monthly Target vs Monthly Actual"}
//         </Typography>
//       </Box>
      
//       {/* Totals */}
//       <Grid container spacing={2} justifyContent="space-between">
//         <Grid item xs={12} md={6}>
//           <Card style={{ textAlign: "center", padding: "10px", backgroundColor: "#FFD966" }}>
//             <Typography variant="subtitle1">Total {month ? "Day" : "Month"} Actual</Typography>
//             <Typography variant="h5" style={{ fontWeight: "bold" }}>
//               {totals.actual?.toFixed(2)}
//             </Typography>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Card style={{ textAlign: "center", padding: "10px", backgroundColor: "#88B04B" }}>
//             <Typography variant="subtitle1">Total {month ? "Day" : "Month"} Target</Typography>
//             <Typography variant="h5" style={{ fontWeight: "bold" }}>
//               {totals.target?.toFixed(2)}
//             </Typography>
//           </Card>
//         </Grid>
//       </Grid>

    

//       {/* Area Chart */}
//       <Card style={{   padding: "20px",
//           height: "650px", // Ensure consistent card height
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           marginTop: "20px", }}>
//         <ResponsiveContainer width="100%" height={600}>
//           <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//           <defs>
//     <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//       <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
//       <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
//     </linearGradient>
//     <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
//       <stop offset="5%" stopColor="#FFD966" stopOpacity={0.8}/>
//       <stop offset="95%" stopColor="#FFD966" stopOpacity={0}/>
//     </linearGradient>
//   </defs>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name"/>
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Area
//               type="monotone"
//               dataKey="target"
//               stroke="#8884d8"
//               fillOpacity={1} fill="url(#colorUv)" 
//               strokeWidth={2}
//               name="Target"
//               />
//             <Area
//               type="monotone"
//               dataKey="actual"
//               stroke="#FFD966"
//               fillOpacity={1} fill="url(#colorPv)"
//               strokeWidth={2}
//               name="Actual"
//               />
//           </AreaChart>
//         </ResponsiveContainer>
//       </Card>
//       </>
//     )}
//     </Container>
//   );
// };

// export default PlanVsAct;


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

const PlanVsAct = ({ month, data }) => {
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
    datasets?.find((dataset) => dataset.label === "Max of monthly target")
      ?.data || [];
  const monthlyActual =
    datasets?.find((dataset) => dataset.label === "Max of monthly Actual")
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
                     Actual
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
                     Target
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

export default PlanVsAct;
