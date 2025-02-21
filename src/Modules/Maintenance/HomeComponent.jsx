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
import LineGraph from "../shareGraph/LineGraph";
import { InfoCircle } from "react-bootstrap-icons";
import CustomCard from "../shareGraph/CustomCard";
import BarGraph from "../shareGraph/BarGraph";
import { processChartData } from "../shareGraph/dataModifierHelper";

const HomeComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const dispatch = useDispatch();
  const {
    PMPlanVSActual,
    MTBFHrs,
    MTTRInHrs,
    BreakdownIncidentVsCloser,
    ComplinityReport,
  } = useSelector((state) => state?.maintenance);

  useEffect(() => {
    const reportTypes = [
      "PMPlanVSActual",
      "MTTRInHrs",
      "MTBFHrs",
      "ComplinityReport",
      "BreakdownIncidentVsCloser",
    ];
    reportTypes.forEach((type) => {
      dispatch(
        fetchMaintenanceData({ report_type: type, year: year, month: month })
      );
    });
  }, [dispatch, year, month]);

  const getData = (selectedYear, selectedMonth) => {
    setYear(selectedYear);
    setMonth(selectedMonth);
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "#2F598C" }}>
      <Filter getData={getData} />
      {/* </Card> */}

      {/* Row with three columns/cards */}
      <Row className="g-2">
        {/*  PM */}
        <Col xl={4} lg={4} md={6} sm={12}>
          <CustomCard
            title="PM"
            tooltipMessage="Detailed information about this PM"
          >
            <LineGraph
              data={processChartData(PMPlanVSActual, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
        </Col>

        {/*   MTTR in Hrs*/}
        <Col xl={4} lg={4} md={6} sm={12}>
        <CustomCard
            title="MTTR in Hrs"
            tooltipMessage="Detailed information about this  MTTR in Hrs"
          >
            <LineGraph
              data={processChartData(MTTRInHrs, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
        </Col>
        {/*   MTRF in Hrs*/}
        <Col xl={4} lg={4} md={6} sm={12}>
        <CustomCard
            title=" MTRF in Hrs"
            tooltipMessage="Detailed information about this   MTRF in Hrs"
          >
            <LineGraph
              data={processChartData(MTBFHrs, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
        
        </Col>
        {/*   Breakdown Incident vs Closure */}
        <Col xl={4} lg={4} md={6} sm={12}>
        <CustomCard
            title="Breakdown Incident vs Closure"
            tooltipMessage="Detailed information about this  Breakdown Incident vs Closure"
          >
            <LineGraph
              data={processChartData(BreakdownIncidentVsCloser, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
        </Col>

        {/*  Complinity Report */}
        <Col xl={4} lg={4} md={6} sm={12}>
        <CustomCard
            title="ComplinityReport"
            tooltipMessage="Detailed information about this ComplinityReport"
          >
            <LineGraph
              data={processChartData(ComplinityReport, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
        </Col>
        {/*  Electricity Consumption */}
        <Col xl={4} lg={4} md={6} sm={12}>
        <CustomCard
            title="Electricity Consumption"
            tooltipMessage="Detailed information about this    Electricity Consumption"
          >
            <LineGraph
              data={processChartData(BreakdownIncidentVsCloser, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
        </Col>

        {/* To-do List Card */}
        {/* <Col lg={12} md={12} sm={12} xl={12} data-aos="fade-up">
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
        </Col> */}
      </Row>
    </div>
  );
};

export default HomeComponent;
