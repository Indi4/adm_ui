import React, { useEffect, useState } from "react";
import { Card, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../../commonComponents/TodoList";
import Filter from "../../commonComponents/Filter";
import PM from "./PM";
import MTTR from "./MTTR";
import MTRF from "./MTRF";
import BreakdownIncidentClosure from "./BreakdownIncidentClosure";
import ComplinityReportComonent from "./ComplinityReport";
import ElectricityConsumptionComp from "./ElectricityConsumption";
import { fetchMaintenanceData } from "../../store/Maintenance/maintenanceSlice";
import { processChartData, processPieChartData } from "./helperData";
import LineGraph from "../shareGraph/LineGraph";
import { InfoCircle } from "react-bootstrap-icons";
import CustomCard from "../shareGraph/CustomCard";


const HomeComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const dispatch = useDispatch();
   const { PMPlanVSActual, MTBFHrs,MTTRInHrs,BreakdownIncidentVsCloser,ComplinityReport} = useSelector((state) => state?.maintenance);
  // useEffect(() => {
  //     dispatch(fetchMaintenanceData({ type: "major", year: year, month: month }));   
  // }, [dispatch, month, year]);

useEffect(() => {
  const reportTypes = [
    "PMPlanVSActual",
    "MTTRInHrs",
    "MTBFHrs",
    "ComplinityReport",
    "BreakdownIncidentVsCloser"
  ];
  reportTypes.forEach((type) => {
    dispatch(fetchMaintenanceData({ report_type: type, year: year, month: month }));
  });
}, [dispatch, year, month])

  const getData = (selectedYear, selectedMonth) => {
    setYear(selectedYear);
    setMonth(selectedMonth);
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#2F598C" }}
    >
      {/* Filter Card with reduced padding/margin */}
      {/* <Card
        className="mb-2"
        style={{ backgroundColor: "white", height: 75, padding: "5px" }}
      > */}
        <Filter getData={getData} />
      {/* </Card> */}

      {/* Row with three columns/cards */}
      <Row className="g-2">
        {/*  PM */}
        <Col xl={4} lg={4} md={6} sm={12}>
       
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
               PM
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <PM  data={processChartData(PMPlanVSActual,month)}/>
            </Card.Body>
          </Card>
        </Col>

        {/*   MTTR in Hrs*/}
        <Col xl={4} lg={4} md={6} sm={12}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
               MTTR in Hrs
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <MTTR data={processChartData(MTTRInHrs,month)} />
            </Card.Body>
          </Card>
        </Col>
        {/*   MTRF in Hrs*/}
        <Col xl={4} lg={4} md={6} sm={12}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                MTRF in Hrs
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <MTRF data={processChartData(MTBFHrs,month)}  />
            </Card.Body>
          </Card>
        </Col>
        {/*   Breakdown Incident vs Closure */}
        <Col xl={4} lg={4} md={6} sm={12}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
             Breakdown Incident vs Closure
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <BreakdownIncidentClosure data={processChartData(BreakdownIncidentVsCloser,month)} />
            </Card.Body>
          </Card>
        </Col>

        {/*  Complinity Report */}
        <Col xl={4} lg={4} md={6} sm={12}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
               Complinity Report
              </Card.Title>
              <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Detailed information about this report</Tooltip>}
        >
          <InfoCircle
            size={18}
            className="text-muted"
            style={{ cursor: "pointer", marginLeft: "8px" }}
          />
        </OverlayTrigger>
            </Card.Header>
            <Card.Body className="p-1">
              <ComplinityReportComonent data={processPieChartData(ComplinityReport)} />
              {/* <LineGraph data={processChartData(ComplinityReport,month)} /> */}
            </Card.Body>
          </Card>
        </Col>
        {/*  Electricity Consumption */}
        <Col xl={4} lg={4} md={6} sm={12}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
             Electricity Consumption
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <ElectricityConsumptionComp data={processChartData(BreakdownIncidentVsCloser,month)}/>
            </Card.Body>
          </Card>
        </Col>
      
         
         
       
        {/* To-do List Card */}
        <Col lg={12} md={12} sm={12} xl={12} data-aos="fade-up">
          <Card className=" overflow-hidden">
            <Card.Header className="border-bottom">
              <Card.Title
                className=" mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                To-do List
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <TodoList type="" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomeComponent;
