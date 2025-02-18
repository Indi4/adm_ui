import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../../commonComponents/TodoList";
import Minor from "./Minor";
import Major from "./Major";
import Filter from "../../commonComponents/Filter";
import {
  majorsafetyGraphs,
  minorsafetyGraph,
} from "./../../store/safety/safetySlice";

const homeComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const dispatch = useDispatch();
  const { minorData, majorData } = useSelector((state) => state.safety);

  useEffect(() => {
    if (month) {
      dispatch(
        majorsafetyGraphs({ accident_type: "major", year: year, month: month })
      );
      dispatch(
        minorsafetyGraph({ accident_type: "minor", year: year, month: month })
      );
     
    } else {
      dispatch(
        minorsafetyGraph({ accident_type: "minor", year: year })
      );

      dispatch(
        majorsafetyGraphs({ accident_type: "major", year: year })
      );
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
          lg={6}
          // lg={month ? 6 : 6}
          md={12}
          sm={12}
          xl={6}
          data-aos="fade-up"
          style={{ width: "100%" }}
        >
          <Card className=" overflow-hidden">
            <Card.Header className="border-bottom">
              <Card.Title
                className=" mb-0"
                style={{
                  fontWeight: "bolder",
                  fontSize: "1.3rem",
                  color: "black",
                }}
              >
                Major
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <Major data={majorData} month={month} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12} sm={12} xl={6} data-aos="fade-up">
          <Card className=" overflow-hidden">
            <Card.Header className="border-bottom">
              <Card.Title
                className=" mb-0"
                style={{
                  fontWeight: "bolder",
                  fontSize: "1.3rem",
                  color: "black",
                }}
              >
                Minor
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <Minor data={minorData} month={month} />
            </Card.Body>
          </Card>
        </Col>

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
              <TodoList type="safety" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default homeComponent;
