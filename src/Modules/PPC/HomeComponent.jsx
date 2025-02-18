import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { safetyGraphs } from "../../store/quality/qualitySlice";
import TodoList from "../../commonComponents/TodoList";
import Filter from "../../commonComponents/Filter";
import DeliveryPerformance from "./DeliveryPerformance";
import ExpPerformance from "./ExpPerformance";
import OverallPerformance from "./OverallPerformance";
import InviceReports from "./InviceReports";
import NoTrips from "./NoTrips";
import DomesticFreight from "./DomesticFreight";
import DomesticSale from "./DomesticSale";
import ExportSale from "./ExportSale";
import TotaleSale from "./TotaleSale";
import GrnReport from "./GrnReport";
const dummyData = {
  // Example for when month is provided. This represents daily data.
  day_wise_data: [
    { day: 0, target: 20, actual: 15 },
    { day: 1, target: 25, actual: 22 },
    { day: 2, target: 30, actual: 28 },
    { day: 3, target: 35, actual: 30 },
    { day: 4, target: 40, actual: 38 },
    { day: 5, target: 45, actual: 42 },
    { day: 6, target: 50, actual: 48 },
    { day: 7, target: 55, actual: 53 },
    { day: 8, target: 60, actual: 58 },
    { day: 9, target: 65, actual: 60 },
    { day: 10, target: 70, actual: 68 },
  ],
  // Dummy datasets for monthly data (if no month is provided)
  datasets: [
    {
      label: "Minor Accident Target",
      data: [
        { month: 0, target: 20 },
        { month: 1, target: 0 },
        { month: 2, target: 30 },
        { month: 3, target: 23 },
        { month: 4, target: 7 },
        { month: 5, target: 9 },
        { month: 6, target: 77 },
        { month: 7, target: 55 },
        { month: 8, target: 0 },
        { month: 9, target: 65 },
        { month: 10, target: 5 },
      ],
    },
    {
      label: "Minor Accident Actual",
      data: [
        { month: 0, actual: 88 },
        { month: 1, actual: 23 },
        { month: 2, actual: 28 },
        { month: 3, actual: 8 },
        { month: 4, actual: 38 },
        { month: 5, actual: 9 },
        { month: 6, actual: 48 },
        { month: 7, actual: 52 },
        { month: 8, actual: 99 },
        { month: 9, actual: 62 },
        { month: 10, actual: 50 },
      ],
    },
  ],
};
const HomeComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const dispatch = useDispatch();
  const { minor, major } = useSelector((state) => state.quality);

  // useEffect(() => {
  //   if (month) {
  //     dispatch(safetyGraphs({ type: "major", year: year, month: month }));
  //     dispatch(safetyGraphs({ type: "minor", year: year, month: month }));
  //   } else {
  //     dispatch(safetyGraphs({ type: "major", year: year }));
  //     dispatch(safetyGraphs({ type: "minor", year: year }));
  //   }
  // }, [dispatch, month, year]);

  const getData = (selectedYear, selectedMonth) => {
    setYear(selectedYear);
    setMonth(selectedMonth);
  };

  return (
    <div
      className="container-fluid p-2"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
    >
      {/* Filter Card with reduced padding/margin */}
      <Card
        className="mb-2"
        style={{ backgroundColor: "white", height: 75, padding: "5px" }}
      >
        <Filter getData={getData} />
      </Card>

      {/* Row with three columns/cards */}
      <Row className="g-2">
        {/* delivery performance */}
        <Col xl={4} lg={4} md={6} sm={12}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Delivery Performance DOM (Sale Qyt)
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <DeliveryPerformance data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>

        {/* EXp Performance */}
        <Col xl={4} lg={4} md={6} sm={12}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Exp Performance DOM (Sale Qyt)
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <ExpPerformance data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>
        {/* overall performance */}
        <Col xl={4} lg={4} md={6} sm={12}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                OverAll Performance
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <OverallPerformance  />
            </Card.Body>
          </Card>
        </Col>
        {/* InviceReports */}
        <Col xl={6} lg={6} md={6} sm={12}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Invoice Reports
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <InviceReports data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>

        {/* No Of Trips */}
        <Col xl={6} lg={6} md={6} sm={12}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                No of Trips
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <NoTrips data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>
        {/* Domestic Freight */}
        <Col xl={4} lg={4} md={6} sm={12}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Domestic Freight
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <DomesticFreight data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>
        {/* Domestic Sale */}
        <Col xl={4} lg={4} md={6} sm={12}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Domestic Sale (in lakh)
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <DomesticSale data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>
        {/* Export Sale */}
        <Col xl={4} lg={4} md={6} sm={12}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Export Sale
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <ExportSale  />
            </Card.Body>
          </Card>
        </Col>
        {/*  Total Sale */}
        <Col xl={6} lg={6} md={6} sm={12}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Total Sale (in lakh)
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <TotaleSale data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>
        {/* Grn Report */}
        <Col xl={6} lg={6} md={6} sm={12}>
          <Card className="overflow-hidden" style={{ height: "100%" }}>
            <Card.Header className="border-bottom">
              <Card.Title
                className="mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                GRN Reports
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-1">
              <GrnReport data={dummyData} month={month} />
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
              <TodoList type="PPC" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomeComponent;
