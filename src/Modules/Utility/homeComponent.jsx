import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Autocomplete, Grid, MenuItem, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { qualityGraphs } from "../../store/quality/qualitySlice";
import TodoList from "../../commonComponents/TodoList";
import PowerCosts from "./PowerCosts";
import PowerUnits from "./PowerUnits";
import Filter from "../../commonComponents/Filter";

const homeComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const dispatch = useDispatch();
  const { power_cost, power_units } = useSelector((state) => state.quality);

  useEffect(() => {
    if (month) {
      dispatch(qualityGraphs({ type: "power_cost", year: year, month: month }));
      dispatch(
        qualityGraphs({ type: "power_units", year: year, month: month })
      );
    } else {
      dispatch(qualityGraphs({ type: "power_cost", year: year }));
      dispatch(qualityGraphs({ type: "power_units", year: year }));
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
                Power Units
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <PowerUnits data={power_units} month={month} />
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
                Power Cost
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <PowerCosts data={power_cost} month={month} />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={12} sm={12} xl={12} data-aos="fade-up">
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
              <TodoList type="utility" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default homeComponent;
