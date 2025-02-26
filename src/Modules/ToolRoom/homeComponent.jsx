import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import {getpmToolRoom,getToollingConsumable} from "../../store/toolRoom/toolRoomSlice";
import {getpmToolRoom,getToollingConsumable} from "../../store/toolRoom/toolRoomSlice.js";
import TodoList from "../../commonComponents/TodoList";
import PM from "./PM";
import ToolingConsumable from "./ToolingConsumable";
import Filter from "../../commonComponents/Filter";
import CustomCard from "../shareGraph/CustomCard.jsx";
import { processChartData } from "../shareGraph/dataModifierHelper.js";
import LineGraph from "../shareGraph/LineGraph.jsx";

const homeComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const dispatch = useDispatch();
  // const {pmData,toolingConsumableData } = useSelector((state) => state.toolRoom);
  const { pmData, toolingConsumableData } = useSelector((state) => state.toolRoom);


  useEffect(() => {
    if (month) {
      dispatch(getpmToolRoom({ report_type: "pmtoolroom", year: year, month: month }));
      dispatch(
        getToollingConsumable({ report_type: "consumable", year: year, month: month })
      );
    } else {
      dispatch(getpmToolRoom({ report_type: "pmtoolroom", year: year }));
      dispatch(getToollingConsumable({ report_type: "consumable", year: year }));
    }
  }, [dispatch, month, year]);

  const getData = (selectedYear, selectedMonth) => {
    setYear(selectedYear);
    setMonth(selectedMonth);
  };

  return (
    <div
      className="container-fluid p-4"
      style={{ backgroundColor: "#2F598C" }}
    >
      {/* <ToastContainer /> */}
      {/* <Card
        className="mb-3 p-3"
        style={{ backgroundColor: "white", height: 75 }}
      > */}
        <Filter getData={getData} />
      {/* </Card> */}
      {/* <Row className="row-sm"> */}
      <Row className=" flex-row gap-2">
        <Col
          lg={month ? 12 : 12}
          md={12}
          sm={12}
          xl={month ? 12 : 12}
          data-aos="fade-up"
        >
           <CustomCard
            title="PM"
            tooltipMessage="Detailed PM"
          >
            <LineGraph
              data={processChartData(pmData, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
            />
          </CustomCard>
          {/* <Card className=" overflow-hidden">
            <Card.Header className="border-bottom">
              <Card.Title
                className=" mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                PM
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <PM data={pmData} month={month} />
            </Card.Body>
          </Card> */}
        </Col>
        <Col
          lg={month ? 12: 12}
          md={12}
          sm={12}
          xl={month ? 12: 12}
          data-aos="fade-up"
        >
           <CustomCard
            title="Tooling Consumables"
            tooltipMessage="Detailed Tooling Consumables "
          >
            <LineGraph
              data={processChartData(toolingConsumableData, month, "target", "actual")}
              xAxisKey="target"
              yAxisKey="actual"
              yAxisColor="#FF8632"
            />
          </CustomCard>
          {/* <Card className=" overflow-hidden">
            <Card.Header className="border-bottom">
              <Card.Title
                className=" mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Tooling Consumables{" "}
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <ToolingConsumable data={toolingConsumableData} month={month} />
            </Card.Body>
          </Card> */}
        </Col>

        {/* <Col lg={6} md={12} sm={12} xl={12} data-aos="fade-up">
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
        </Col> */}
      </Row>
    </div>
  );
};

export default homeComponent;
