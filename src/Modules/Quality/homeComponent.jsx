// import React, { useEffect, useState } from "react";
// import MonthlyPurchase from "../Purchase/MonthlyPurchase";
// import DailyPurchase from "../Purchase/DailyPurchase";
// import { Card, Row, Col } from "react-bootstrap";
// import { Autocomplete, Grid, MenuItem, TextField } from "@mui/material";
// import PPM from "./PPM";
// import COPQ from "./COPQ";
// import { useDispatch, useSelector } from "react-redux";
// import { qualityGraphs } from "../../store/quality/qualitySlice";
// import DesignScrap from "./DesignScrap";
// import ProcessScrap from "./ProcessScrap";
// import TodoList from "../../commonComponents/TodoList";

// const homeComponent = () => {
//   const yearList = ["2025", "2024", "2023", "2022", "2021", "2020"];
//   const monthList = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   const [year, setYear] = useState(new Date().getFullYear());
//   const [month, setMonth] = useState("");
//   const dispatch = useDispatch();
//   const { ppm, copq, design_scrap, process_scrap } = useSelector(
//     (state) => state.quality
//   );

//   useEffect(() => {
//     if (month) {
//       dispatch(qualityGraphs({ type: "ppm", year: year, month: month }));
//       dispatch(qualityGraphs({ type: "copq", year: year, month: month }));
//       dispatch(
//         qualityGraphs({ type: "process_scrap", year: year, month: month })
//       );
//       dispatch(
//         qualityGraphs({ type: "design_scrap", year: year, month: month })
//       );
//     } else {
//       dispatch(qualityGraphs({ type: "ppm", year: year }));
//       dispatch(qualityGraphs({ type: "copq", year: year }));
//       dispatch(qualityGraphs({ type: "process_scrap", year: year }));
//       dispatch(qualityGraphs({ type: "design_scrap", year: year }));
//     }
//   }, [dispatch, month, year]);

//   const handleYearInputChange = (event, value, reason) => {
//     if (reason === "selectOption") {
//       setYear(value);
//     } else {
//       setYear(new Date().getFullYear());
//     }
//   };

//   const handleMonthInputChange = (event, value, reason) => {
//     if (reason === "selectOption") {
//       setMonth(value);
//     } else {
//       setMonth();
//     }
//   };

//   return (
//     <div className="container-fluid" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
//     {/* <ToastContainer /> */}
//     <Card style={{ backgroundColor: "white", padding: 8,    height:75,
//  }}>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         {/* <h4
//           className="text-left mb-4"
//           style={{ fontSize: "2rem", fontWeight: "bold" }}
//         >
//           QUALITY
//         </h4> */}
//         {/* <div
//           style={{
//             display: "flex",
//             // gap: 20,
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         ></div> */}
//       </div>
//       <div className="row mb-4" style={{display:"flex", justifyContent:"end"}}>
//         <div className="col-md-3">
//           <Grid item xs={6}>
//             <Autocomplete
//               options={yearList || []}
//               getOptionLabel={(option) => option.toString() || ""}
//               value={year}
//               onChange={(event, value, reason) =>
//                 handleYearInputChange(event, value, reason, "year")
//               }
//               renderInput={(params) => <TextField {...params} label="Year" />}
//               fullWidth
//               disableClearable={false}
//             />
//           </Grid>
//         </div>
//         <div className="col-md-3">
//           <Grid item xs={6}>
//             <Autocomplete
//               options={monthList || []}
//               getOptionLabel={(option) => option.toString() || ""}
//               value={month}
//               onChange={(event, value, reason) =>
//                 handleMonthInputChange(event, value, reason, "month")
//               }
//               renderInput={(params) => (
//                 <TextField {...params} label="Select Months" />
//               )}
//               fullWidth
//               disableClearable={false}
//             />
//           </Grid>
//         </div>
//       </div>
//     </Card>
//     <Row className="row-sm">
//       <Col lg={6} md={6} sm={12} xl={3} data-aos="fade-up">
//         <Card className="overflow-hidden" style={{ height: "340px", width: "100%" }}>
//           <Card.Header className="border-bottom">
//             <Card.Title className="mb-0">PPM</Card.Title>
//           </Card.Header>
//           <Card.Body className="p-3">
//             <PPM data={ppm} month={month} />
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col lg={6} md={6} sm={12} xl={3} data-aos="fade-up">
//         <Card className="overflow-hidden" style={{ height: "340px", width: "100%" }}>
//           <Card.Header className="border-bottom">
//             <Card.Title className="mb-0">COPQ</Card.Title>
//           </Card.Header>
//           <Card.Body className="p-3">
//             <COPQ data={copq} month={month} />
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col lg={6} md={6} sm={12} xl={3} data-aos="fade-up">
//         <Card className="overflow-hidden" style={{ height: "340px", width: "100%" }}>
//           <Card.Header className="border-bottom">
//             <Card.Title className="mb-0">Design Scrap</Card.Title>
//           </Card.Header>
//           <Card.Body className="p-3">
//             <DesignScrap data={design_scrap} month={month} />
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col lg={6} md={6} sm={12} xl={3} data-aos="fade-up">
//         <Card className="overflow-hidden" style={{ height: "340px", width: "100%" }}>
//           <Card.Header className="border-bottom">
//             <Card.Title className="mb-0">Process Scrap</Card.Title>
//           </Card.Header>
//           <Card.Body className="p-3">
//             <ProcessScrap data={process_scrap} month={month} />
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col lg={12} md={6} sm={12} xl={12} data-aos="fade-up">
//         <Card className="overflow-hidden" style={{ height: "340px", width: "100%" }}>
//           <Card.Header className="border-bottom">
//             <Card.Title className="mb-0">To-do List</Card.Title>
//           </Card.Header>
//           <Card.Body className="p-3">
//             <TodoList type="quality" />
//           </Card.Body>
//         </Card>
//       </Col>
//     </Row>
//   </div>

//   );
// };

// export default homeComponent;
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
      className="container-fluid"
      style={{ backgroundColor: "#2F598C" }}
    >
      {/* <Card
        className="mb-3 p-3"
        style={{ backgroundColor: "white", height: 75 }}
      > */}
        <Filter getData={getData} />
      {/* </Card> */}
      <Row className="g-3">
        <Col lg={6} md={6} sm={12} xl={6}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                PPM
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <PPM data={CustomerPPM} month={month} />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={6} sm={12} xl={6}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Customer Complaints
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <CustomerComp data={CustomerComplaints} month={month} />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={6} sm={12} xl={6}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Supplier PPM
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <SPPM data={SupplierPPM} month={month} />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={6} sm={12} xl={6}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Line/Generation Complaints
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <LineCom data={LineGenerationComplaints} month={month} />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={6} sm={12} xl={6}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                COPQ
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <Copq data={COPQ} month={month} />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={6} sm={12} xl={6}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Plant Rework
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <PlantRework data={PlannedRework} month={month} />
            </Card.Body>
          </Card>
        </Col>


        <Col lg={6} md={6} sm={12} xl={6}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Kaizen
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <KaizenComp data={Kaizen} month={month} />
            </Card.Body>
          </Card>
        </Col>
    
        <Col lg={6}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                To-do List
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <TodoList type="quality" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomeComponent;
