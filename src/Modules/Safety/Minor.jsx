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
// import Loader from '../../commonComponents/Loader'

// const Minor = ({ month, data }) => {
//   const { datasets, day_wise_data, final_totals } = data;
//   console.log(data)

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
//     const monthlyTarget = datasets?.find((dataset) => dataset.label === "Minor Accident Target")?.data || [];
//     const monthlyActual = datasets?.find((dataset) => dataset.label === "Minor Accident Actual")?.data || [];
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
//     "#A8DADC",
//     "#457B9D",
//     "#F4A261",
//     "#2A9D8F",
//     "#E9C46A",
//     "#A7C4D3",
//     "#D4A5A5",
//     "#84A98C",
//     "#B3B3E6",
//     "#F6BD60",
//     "#6D6875",
//     "#C9ADA7",
//   ];

//   const OUTER_COLORS = [
//     "#FF6F61",
//     "#6B5B95",
//     "#88B04B",
//     "#F7CAC9",
//     "#92A8D1",
//     "#034732",
//     "#F5E6CC",
//     "#ED6A5A",
//     "#05668D",
//     "#028090",
//     "#00A896",
//     "#02C39A",
//   ];

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
// ):(
// <>
//  {/* Chart Header */}
//  <Box display="flex" justifyContent="space-between" alignItems="center" my={3}>
//         <Typography variant="h6" style={{ fontWeight: "bold" }}>
//           {month ? `Daily Target vs Daily Actual` : "Monthly Target vs Monthly Actual"}
//         </Typography>
//       </Box>
//       {/* Totals */}
//       <Grid container spacing={2} justifyContent="space-between">
//         <Grid item xs={12} md={6}>
//           <Card style={{ textAlign: "center", padding: "10px", backgroundColor: "#82ca9d" }}>
//             <Typography variant="subtitle1">Total {month ? "Day" : "Month"} Actual</Typography>
//             <Typography variant="h5" style={{ fontWeight: "bold" }}>
//               {totals.actual?.toFixed(2)}
//             </Typography>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Card style={{ textAlign: "center", padding: "10px", backgroundColor: "#8884d8" }}>
//             <Typography variant="subtitle1">Total {month ? "Day" : "Month"} Target</Typography>
//             <Typography variant="h5" style={{ fontWeight: "bold" }}>
//               {totals.target?.toFixed(2)}
//             </Typography>
//           </Card>
//         </Grid>
//       </Grid>

     

//       {/* Pie Chart */}
//       {chartData.length > 0 ? (
//         <Card style={{   padding: "20px",
//           height: "650px", // Ensure consistent card height
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           marginTop: "20px", }}>
//           <ResponsiveContainer width="100%" height={600}>
//             <PieChart>
//               <Pie
//                 data={chartData}
//                 dataKey="target"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={110}
//                 fill="#8884d8"
//                 stroke="#8884d8"
//                 strokeWidth={3} 
//                 label={({ name }) => `${name}`}
//                 name="Monthly Target"
//                 >
//                 {chartData.map((_, index) => (
//                   <Cell key={`cell-${index}`} fill={INNER_COLORS[index % INNER_COLORS.length]} />
//                 ))}
//               </Pie>

//               <Pie
//                 data={chartData}
//                 dataKey="actual"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={170}
//                 outerRadius={220}
//                 fill="#82ca9d"
//                 stroke="#82ca9d"
//                 strokeWidth={2} 
//                 label={({ name }) => `${name}`}
//                 name="Monthly Actual"
//                 >
//                 {chartData.map((_, index) => (
//                   <Cell key={`cell-${index}`} fill={OUTER_COLORS[index % OUTER_COLORS.length]} />
//                 ))}
//               </Pie>

//               <Tooltip />
//               <Legend
//                 payload={[
//                   { value: "Outer Circle: Monthly Actual", type: "circle", color:"#82ca9d"},
//                   { value: "Inner Circle: Monthly Target", type: "circle", color:"#8884d8"},
//                 ]}
//                 />
//             </PieChart>
//           </ResponsiveContainer>
//         </Card>
//       ) : (
//         <Typography variant="h6" style={{ textAlign: "center", color: "#757575",   padding: "20px",
//           height: "650px", // Ensure consistent card height
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           marginTop: "20px", }}>
//           No data available for the selected period.
//         </Typography>
//       )}
//           </>
//           )}
//     </Container>
//   );
// };

// export default Minor;


import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Loader from "../../commonComponents/Loader";

const Minor = ({ month, data }) => {
  const { datasets, day_wise_data } = data;
  console.log(data)

  const [isLoading, setIsLoading] = useState(true);
  // const [showFirstHalf, setShowFirstHalf] = useState(true);

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(true);
    }
  }, [data]);

  // const monthlyTarget =
  //   datasets?.find((dataset) => dataset.label === "Major Accident Target")
  //     ?.data || [];
  // const monthlyActual =
  //   datasets?.find((dataset) => dataset.label === "Major Accident Actual")
  //     ?.data || [];

  // const chartData = monthlyTarget
  //   .slice(showFirstHalf ? 0 : 6, showFirstHalf ? 6 : 12)
  //   .map((item, index) => ({
  //     name: item.month,
  //     target: item.target,
  //     actual: monthlyActual[showFirstHalf ? index : index + 6]?.actual || 0,
   
  //   }));

  let chartData = [];
    let totals = { actual: 0, target: 0 };
  
    if (month) {
      // Filter data for the selected month from day_wise_data
      chartData = day_wise_data?.map((day) => ({
        name: `${day.day}`,
        target: day.target,
        actual: day.actual,
      }));
    } else {
      // Use datasets for monthly data
      const monthlyTarget = datasets?.find((dataset) => dataset.label === "Minor Accident Target")?.data || [];
      const monthlyActual = datasets?.find((dataset) => dataset.label === "Minor Accident Actual")?.data || [];
      chartData = monthlyTarget.map((item, index) => ({
        name: item.month,
        target: item.target,
        actual: monthlyActual[index]?.actual || 0,
      }));
    }
    console.log(chartData)


  return (
    <Container >
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center mt-4" style={{ height: "250px" }}>
          <Loader />
        </div>
      ) : (
        <>
          {/* <Row className="justify-content-center my-3">
            <Col xs={6} md={4} className="text-center">
              <Card className="p-2 bg-primary text-white">
                <Card.Title style={{ fontSize: "0.9rem" }}>Actual</Card.Title>
                <Card.Text style={{ fontSize: "0.9rem" }}>{totals.actual?.toFixed(2)}</Card.Text>
              </Card>
            </Col>
            <Col xs={6} md={4} className="text-center">
              <Card className="p-2 bg-warning text-dark">
                <Card.Title style={{ fontSize: "0.9rem" }}>Target</Card.Title>
                <Card.Text style={{ fontSize: "0.9rem" }}>{totals.target?.toFixed(2)}</Card.Text>
              </Card>
            </Col>
          </Row> */}

          {/* <Row className="justify-content-center mb-3">
            <Col xs={12} className="text-center">
              <Button variant="secondary" onClick={() => setShowFirstHalf((prev) => !prev)}>
                {showFirstHalf ? "Next 6 Months" : "First 6 Months"}
              </Button>
            </Col>
          </Row> */}

          <Card style={{border:"none"}}>
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="actual" stroke="#FF8632" strokeWidth={2} dot={{ r: 5 }} name="Actual" />
                <Line type="monotone" dataKey="target" stroke="#135C75" strokeWidth={2} dot={{ r: 5 }} name="Target" />
                <Legend/>
              </ComposedChart>
            </ResponsiveContainer>
          </Card>
        </>
      )}
    </Container>
  );
};

export default Minor;
