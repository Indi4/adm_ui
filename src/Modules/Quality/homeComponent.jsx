
// import React, { useEffect, useState } from "react";
// import MonthlyPurchase from "../Purchase/MonthlyPurchase";
// import DailyPurchase from "../Purchase/DailyPurchase";
// import { Card, Row, Col } from "react-bootstrap";
// import { Autocomplete, Grid, TextField } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { qualityGraphs } from "../../store/quality/qualitySlice";
// import TodoList from "../../commonComponents/TodoList";
// import Filter from "../../commonComponents/Filter";
// import CustomerComp from "./CustomerComp";
// import LineCom from "./LineCom";
// import PlantRework from "./PlantRework";
// import KaizenComp from "./KaizenComp";
// import SPPM from "./SPPM";
// import Copq from "./COPQ";
// import PPM from "./PPM";

// const HomeComponent = () => {
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [month, setMonth] = useState("");
//   const dispatch = useDispatch();
//   const { CustomerPPM,CustomerComplaints,Kaizen,COPQ,SupplierPPM,LineGenerationComplaints,PlannedRework} = useSelector((state) => state.quality.qualityData);
//   console.log(LineGenerationComplaints)

//   useEffect(() => {
//     if (month) {
//       dispatch(qualityGraphs({ type: "CustomerPPM", year: year, month: month }));
//       dispatch(qualityGraphs({ type: "CustomerComplaints", year: year, month: month }));
//       dispatch(qualityGraphs({ type: "SupplierPPM", year: year, month: month }));
//       dispatch(qualityGraphs({ type: "LineGenerationComplaints", year: year, month: month }));
//       dispatch(qualityGraphs({ type: "PlannedRework", year: year, month: month }));
//       dispatch(qualityGraphs({ type: "Kaizen", year: year, month: month }));
//       dispatch(qualityGraphs({ type: "COPQ", year: year, month: month }));
//     } else {
//       dispatch(qualityGraphs({ type: "CustomerPPM", year: year}));
//       dispatch(qualityGraphs({ type: "CustomerComplaints", year: year}));
//       dispatch(qualityGraphs({ type: "SupplierPPM", year: year}));
//       dispatch(qualityGraphs({ type: "LineGenerationComplaints", year: year}));
//       dispatch(qualityGraphs({ type: "PlannedRework", year: year}));
//       dispatch(qualityGraphs({ type: "Kaizen", year: year}));
//       dispatch(qualityGraphs({ type: "COPQ", year: year}));
//     }
//   }, [dispatch, month, year]);

//   const getData = (selectedYear, selectedMonth) => {
//     setYear(selectedYear);
//     setMonth(selectedMonth);
//   };

//   return (
//     <div
//       className="container-fluid"
//       style={{ backgroundColor: "#2F598C" }}
//     >
//       {/* <Card
//         className="mb-3 p-3"
//         style={{ backgroundColor: "white", height: 75 }}
//       > */}
//         <Filter getData={getData} />
//       {/* </Card> */}
//       <Row className="g-2">
//         <Col lg={6} md={6} sm={12} xl={4}>
//           <Card className="overflow-hidden" style={{ height: "90%" }}>
//             <Card.Header className="border-bottom">
//               <Card.Title
//                 className="mb-0"
//                 style={{ fontWeight: "bold", fontSize: "1.3rem" }}
//               >
//                 PPM
//               </Card.Title>
//             </Card.Header>
//             <Card.Body className="p-1">
//               <PPM data={CustomerPPM} month={month} />
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col lg={6} md={6} sm={12} xl={4}>
//           <Card className="overflow-hidden" style={{ height: "90%" }}>
//             <Card.Header className="border-bottom">
//               <Card.Title
//                 className="mb-0"
//                 style={{ fontWeight: "bold", fontSize: "1.3rem" }}
//               >
//                 Customer Complaints
//               </Card.Title>
//             </Card.Header>
//             <Card.Body className="p-1">
//               <CustomerComp data={CustomerComplaints} month={month} />
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col lg={6} md={6} sm={12} xl={4}>
//           <Card className="overflow-hidden" style={{ height: "90%" }}>
//             <Card.Header className="border-bottom">
//               <Card.Title
//                 className="mb-0"
//                 style={{ fontWeight: "bold", fontSize: "1.3rem" }}
//               >
//                 Supplier PPM
//               </Card.Title>
//             </Card.Header>
//             <Card.Body className="p-1">
//               <SPPM data={SupplierPPM} month={month} />
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col lg={6} md={6} sm={12} xl={4}>
//           <Card className="overflow-hidden" style={{ height: "90%" }}>
//             <Card.Header className="border-bottom">
//               <Card.Title
//                 className="mb-0"
//                 style={{ fontWeight: "bold", fontSize: "1.3rem" }}
//               >
//                 Line/Generation Complaints
//               </Card.Title>
//             </Card.Header>
//             <Card.Body className="p-1">
//               <LineCom data={LineGenerationComplaints} month={month} />
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col lg={6} md={6} sm={12} xl={4}>
//           <Card className="overflow-hidden" style={{ height: "90%" }}>
//             <Card.Header className="border-bottom">
//               <Card.Title
//                 className="mb-0"
//                 style={{ fontWeight: "bold", fontSize: "1.3rem" }}
//               >
//                 COPQ
//               </Card.Title>
//             </Card.Header>
//             <Card.Body className="p-1">
//               <Copq data={COPQ} month={month} />
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col lg={6} md={6} sm={12} xl={4}>
//           <Card className="overflow-hidden" style={{ height: "90%" }}>
//             <Card.Header className="border-bottom">
//               <Card.Title
//                 className="mb-0"
//                 style={{ fontWeight: "bold", fontSize: "1.3rem" }}
//               >
//                 Plant Rework
//               </Card.Title>
//             </Card.Header>
//             <Card.Body className="p-1">
//               <PlantRework data={PlannedRework} month={month} />
//             </Card.Body>
//           </Card>
//         </Col>


//         <Col lg={6} md={6} sm={12} xl={6}>
//           <Card className="overflow-hidden" style={{ height: "90%" }}>
//             <Card.Header className="border-bottom">
//               <Card.Title
//                 className="mb-0"
//                 style={{ fontWeight: "bold", fontSize: "1.3rem" }}
//               >
//                 Kaizen
//               </Card.Title>
//             </Card.Header>
//             <Card.Body className="p-1">
//               <KaizenComp data={Kaizen} month={month} />
//             </Card.Body>
//           </Card>
//         </Col>
    
//         <Col lg={6}>
//           <Card className="overflow-hidden" style={{ height: "90%" }}>
//             <Card.Header className="border-bottom">
//               <Card.Title
//                 className="mb-0"
//                 style={{ fontWeight: "bold", fontSize: "1.3rem" }}
//               >
//                 To-do List
//               </Card.Title>
//             </Card.Header>
//             <Card.Body className="p-1">
//               <TodoList type="quality" />
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default HomeComponent;


import React, { useEffect, useState } from "react";
import MonthlyPurchase from "../Purchase/MonthlyPurchase";
import DailyPurchase from "../Purchase/DailyPurchase";
import { Card, Row, Col } from "react-bootstrap";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { qualityGraphs } from "../../store/quality/qualitySlice";
import TodoList from "../../commonComponents/TodoList";
import Filter from "../../commonComponents/Filter";
import CustomerComp from "./CustomerComp";
import LineCom from "./LineCom";
import PlantRework from "./PlantRework";
import KaizenComp from "./KaizenComp";
import SPPM from "./SPPM";
import Copq from "./COPQ";
import PPM from "./PPM";
import LineGraph from "../shareGraph/LineGraph";
import { processChartData } from "../shareGraph/dataModifierHelper";
import CustomCard from "../shareGraph/CustomCard";

const HomeComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const dispatch = useDispatch();
  const { CustomerPPM,CustomerComplaints,Kaizen,COPQ,SupplierPPM,LineGenerationComplaints,PlannedRework} = useSelector((state) => state.quality.qualityData);
  console.log(LineGenerationComplaints)

  useEffect(() => {
    if (month) {
      dispatch(qualityGraphs({ type: "CustomerPPM", year: year, month: month }));
      dispatch(qualityGraphs({ type: "CustomerComplaints", year: year, month: month }));
      dispatch(qualityGraphs({ type: "SupplierPPM", year: year, month: month }));
      dispatch(qualityGraphs({ type: "LineGenerationComplaints", year: year, month: month }));
      dispatch(qualityGraphs({ type: "PlannedRework", year: year, month: month }));
      dispatch(qualityGraphs({ type: "Kaizen", year: year, month: month }));
      dispatch(qualityGraphs({ type: "COPQ", year: year, month: month }));
    } else {
      dispatch(qualityGraphs({ type: "CustomerPPM", year: year}));
      dispatch(qualityGraphs({ type: "CustomerComplaints", year: year}));
      dispatch(qualityGraphs({ type: "SupplierPPM", year: year}));
      dispatch(qualityGraphs({ type: "LineGenerationComplaints", year: year}));
      dispatch(qualityGraphs({ type: "PlannedRework", year: year}));
      dispatch(qualityGraphs({ type: "Kaizen", year: year}));
      dispatch(qualityGraphs({ type: "COPQ", year: year}));
    }
  }, [dispatch, month, year]);

  const getData = (selectedYear, selectedMonth) => {
    setYear(selectedYear);
    setMonth(selectedMonth);
  };

  return (
    <div
      className="container-fluid p-2"
      // style={{ backgroundColor: "#2F598C" }}
    >
      {/* <Card
        className="mb-3 p-3"
        style={{ backgroundColor: "white", height: 75 }}
      > */}
        <Filter getData={getData} />
      {/* </Card> */}
      <Row className="g-0">
        <Col lg={6} md={6} sm={12} xl={6} className="p-1">
          <CustomCard
            title="PPM"
            tooltipMessage="Detailed information about this PPM"
          >
            <LineGraph
              data={processChartData(CustomerPPM, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>

        </Col>

        <Col lg={6} md={6} sm={12} xl={6} className="p-1">
          <CustomCard
            title="Customer Complaints"
            tooltipMessage="Detailed information about this Customer Complaints"
          >
            <LineGraph
              data={processChartData(CustomerComplaints, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
              yAxisColor="#FF8632"
            />
          </CustomCard>
        </Col>

        <Col lg={6} md={6} sm={12} xl={6} className="p-1">
          <CustomCard
            title="Supplier PPM"
            tooltipMessage="Detailed information about this Supplier PPM"
          >
            <LineGraph
              data={processChartData(SupplierPPM, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
        </Col>

        <Col lg={6} md={6} sm={12} xl={6} className="p-1">
        <CustomCard
            title="Line Generation Complaints"
            tooltipMessage="Detailed information about this Line Generation Complaints"
          >
            <LineGraph
              data={processChartData(LineGenerationComplaints, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
              yAxisColor="#FF8632"
            />
          </CustomCard>
        </Col>

        <Col lg={6} md={6} sm={12} xl={6} className="p-1">
            <CustomCard
            title="COPQ"
            tooltipMessage="Detailed information about this COPQ"
          >
            <LineGraph
              data={processChartData(COPQ, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
        </Col>

        <Col lg={6} md={6} sm={12} xl={6} className="p-1">
        <CustomCard
            title="Planned Rework"
            tooltipMessage="Detailed information about this Planned Rework"
          >
            <LineGraph
              data={processChartData(PlannedRework, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
              yAxisColor="#FF8632"
            />
          </CustomCard>
        </Col>


        <Col lg={12} md={12} sm={12} xl={12} className="p-1">
        <CustomCard
            title="Kaizen"
            tooltipMessage="Detailed information about this PM"
          >
            <LineGraph
              data={processChartData(Kaizen, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
        </Col>
    
        {/* <Col lg={6}>
          <Card className="overflow-hidden" style={{ height: "90%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                To-do List
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <TodoList type="quality" />
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </div>
  );
};

export default HomeComponent;

