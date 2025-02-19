import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Autocomplete, Grid, MenuItem, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { qualityGraphs } from "../../store/quality/qualitySlice";
import TodoList from "../../commonComponents/TodoList";
import PlanVsAct from "./StoreInv";
import Sales from "./DailyPurchase";
import Filter from "../../commonComponents/Filter";
import GRNReport from "./GRNReport";
import StoreInv from "./StoreInv";
import DailyPurchase from "./DailyPurchase";
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
const homeComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const dispatch = useDispatch();
  const { sales, plan_vs_act } = useSelector((state) => state.quality);

  useEffect(() => {
    if (month) {
      dispatch(qualityGraphs({ type: "sales", year: year, month: month }));
      dispatch(
        qualityGraphs({ type: "plan_vs_act", year: year, month: month })
      );
    } else {
      dispatch(qualityGraphs({ type: "sales", year: year }));
      dispatch(qualityGraphs({ type: "plan_vs_act", year: year }));
    }
  }, [dispatch, month, year]);

  const getData = (selectedYear, selectedMonth) => {
    setYear(selectedYear);
    setMonth(selectedMonth);
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
    >
      {/* <ToastContainer /> */}
      <Card
        className="mb-3 p-3"
        style={{ backgroundColor: "white", height: 75 }}
      >
        <Filter getData={getData} />
      </Card>
      <Row className="row-sm">
        <Col
          lg={month ? 6 : 6}
          md={12}
          sm={12}
          xl={month ? 6 : 6}
          data-aos="fade-up"
        >
          <Card className=" overflow-hidden">
            <Card.Header className="border-bottom">
              <Card.Title
                className=" mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                GRN Report
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <GRNReport data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>
        <Col
          lg={month ? 6 : 6}
          md={12}
          sm={12}
          xl={month ? 6 : 6}
          data-aos="fade-up"
        >
          <Card className=" overflow-hidden">
            <Card.Header className="border-bottom">
              <Card.Title
                className=" mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Store Inventory
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <StoreInv data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>

        <Col
          lg={month ? 6 : 6}
          md={12}
          sm={12}
          xl={month ? 6 : 6}
          data-aos="fade-up"
        >
          <Card className=" overflow-hidden">
            <Card.Header className="border-bottom">
              <Card.Title
                className=" mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Daily Purchase Report(In Lakh)
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <DailyPurchase data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={12} sm={12} xl={6} data-aos="fade-up">
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
              <TodoList type="sales" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default homeComponent;
