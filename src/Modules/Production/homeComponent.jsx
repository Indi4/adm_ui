import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { safetyGraphs } from "../../store/quality/qualitySlice";
import TodoList from "../../commonComponents/TodoList";
import Filter from "../../commonComponents/Filter";
import AHF from "./AHF";
import Bending from "./Bending";
import AssemblyProduction from "./AssemblyProduction";
import AHFOEE from "./AHFOEE";
import BendingOEE from "./BendingOEE";
import MTD from "./MDT";
import ProductionConsumables from "./ProductionConsumables";
import JobWork from "./JobWork";
import PackagingConsumbles from "./PackagingConsumbles";
import FurnaceConsumbles from "./FurnaceConsumbles";
import KWIP from "./KWIP";
import FurnaceOEE from "./FurnaceOEE";
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

  useEffect(() => {
    if (month) {
      dispatch(safetyGraphs({ type: "major", year: year, month: month }));
      dispatch(safetyGraphs({ type: "minor", year: year, month: month }));
    } else {
      dispatch(safetyGraphs({ type: "major", year: year }));
      dispatch(safetyGraphs({ type: "minor", year: year }));
    }
  }, [dispatch, month, year]);

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
      <Card className="mb-2" style={{ backgroundColor: "white", height: 75, padding: "5px" }}>
        <Filter getData={getData} />
      </Card>

      {/* Row with three columns/cards */}
      <Row className="g-2">
        {/* AHF Production Card */}
        <Col xl={4} lg={4} md={6} sm={12} data-aos="fade-up">
              <Card className="overflow-hidden" style={{ height: "100%" }}>
                      <Card.Header className="border-bottom">
                        <Card.Title
                          className="mb-0"
                          style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                        >
                      AHF Production
                        </Card.Title>
                      </Card.Header>
            <Card.Body className="p-1">
              <AHF data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>

        {/* Bending Production Card */}
        <Col xl={4} lg={4} md={6} sm={12} data-aos="fade-up">
            <Card className="overflow-hidden" style={{ height: "100%" }}>
                    <Card.Header className="border-bottom">
                      <Card.Title
                        className="mb-0"
                        style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                      >
                        Bending Production
                      </Card.Title>
                    </Card.Header>
            <Card.Body className="p-1">
              <Bending data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>
        {/* Bending Production Card */}
        <Col xl={4} lg={4} md={6} sm={12} data-aos="fade-up">
            <Card className="overflow-hidden" style={{ height: "100%" }}>
                    <Card.Header className="border-bottom">
                      <Card.Title
                        className="mb-0"
                        style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                      >
                       Assembly Production plan (quality clear)
                      </Card.Title>
                    </Card.Header>
            <Card.Body className="p-1">
              <AssemblyProduction data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>
           {/* AHFOEE Card */}
           <Col xl={4} lg={4} md={6} sm={12} data-aos="fade-up">
           <Card className="overflow-hidden" style={{ height: "100%" }}>
                   <Card.Header className="border-bottom">
                     <Card.Title
                       className="mb-0"
                       style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                     >
                      AHF OEE
                     </Card.Title>
                   </Card.Header>
            <Card.Body className="p-1">
              <AHFOEE data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>

           {/* Bending OEE Production Card */}
           <Col xl={4} lg={4} md={6} sm={12} data-aos="fade-up">
          <Card className="overflow-hidden" style={{ height: "100%" }}>
                  <Card.Header className="border-bottom">
                    <Card.Title
                      className="mb-0"
                      style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                    >
                    Bending OEE
                    </Card.Title>
                  </Card.Header>
            <Card.Body className="p-1">
              <BendingOEE data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>
           {/* Furnace OEE */}
           <Col xl={4} lg={4} md={6} sm={12} data-aos="fade-up">
            <Card className="overflow-hidden" style={{ height: "100%" }}>
                    <Card.Header className="border-bottom">
                      <Card.Title
                        className="mb-0"
                        style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                      >
                       Furnace OEE
                      </Card.Title>
                    </Card.Header>
            <Card.Body className="p-1">
              <FurnaceOEE data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>
          {/* MTD productivity */}
          <Col xl={4} lg={4} md={6} sm={12} data-aos="fade-up">
             <Card className="overflow-hidden" style={{ height: "100%" }}>
                     <Card.Header className="border-bottom">
                       <Card.Title
                         className="mb-0"
                         style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                       >
                        MTD Productivity
                       </Card.Title>
                     </Card.Header>
            <Card.Body className="p-1">
              <MTD data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>
         {/*  production consumable */}
         <Col xl={4} lg={4} md={6} sm={12} data-aos="fade-up">
             <Card className="overflow-hidden" style={{ height: "100%" }}>
                     <Card.Header className="border-bottom">
                       <Card.Title
                         className="mb-0"
                         style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                       >
                       Production Consumables
                       </Card.Title>
                     </Card.Header>
            <Card.Body className="p-1">
              <ProductionConsumables data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>
         {/*  JOb WOrker */}
         <Col xl={4} lg={4} md={6} sm={12} data-aos="fade-up">
             <Card className="overflow-hidden" style={{ height: "100%" }}>
                     <Card.Header className="border-bottom">
                       <Card.Title
                         className="mb-0"
                         style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                       >
                        Job Work
                       </Card.Title>
                     </Card.Header>
            <Card.Body className="p-1">
              <JobWork data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>
           {/*  Packaging consumbles */}
           <Col xl={4} lg={4} md={6} sm={12} data-aos="fade-up">
             <Card className="overflow-hidden" style={{ height: "100%" }}>
                     <Card.Header className="border-bottom">
                       <Card.Title
                         className="mb-0"
                         style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                       >
                      Packaging Consumbles
                       </Card.Title>
                     </Card.Header>
            <Card.Body className="p-1">
              <PackagingConsumbles data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>
          {/*  furnace consumbles */}
          <Col xl={4} lg={4} md={6} sm={12} data-aos="fade-up">
            <Card className="overflow-hidden" style={{ height: "100%" }}>
                    <Card.Header className="border-bottom">
                      <Card.Title
                        className="mb-0"
                        style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                      >
                       Furnace Consumbles
                      </Card.Title>
                    </Card.Header>
            <Card.Body className="p-1">
              <FurnaceConsumbles data={dummyData} month={month} />
            </Card.Body>
          </Card>
        </Col>
         {/*  4KWIP +OS */}
         <Col xl={4} lg={4} md={6} sm={12} data-aos="fade-up">
           <Card className="overflow-hidden" style={{ height: "100%" }}>
                   <Card.Header className="border-bottom">
                     <Card.Title
                       className="mb-0"
                       style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                     >
                      4K WIP+OS
                     </Card.Title>
                   </Card.Header>
            <Card.Body className="p-1">
              <KWIP data={dummyData} month={month} />
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
              <TodoList type="Production" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomeComponent;
