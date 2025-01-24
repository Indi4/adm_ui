import React, { useEffect, useState } from "react";
import MonthlyPurchase from "../Purchase/MonthlyPurchase";
import DailyPurchase from "../Purchase/DailyPurchase";
import { Card, Row, Col } from "react-bootstrap";
import { Autocomplete, Grid, MenuItem, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {safetyGraphs } from "../../store/quality/qualitySlice";
import TodoList from "../../commonComponents/TodoList";
import Minor from "./Minor";
import Major from "./Major";
import Filter from "../../commonComponents/Filter";

const homeComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const dispatch = useDispatch()
  const {minor,major} = useSelector((state)=> state.quality)

  useEffect(()=>{
    if(month){
      dispatch(safetyGraphs({type:"major",year:year,month:month}))
      dispatch(safetyGraphs({type:"minor", year:year, month: month}))
      
    }
    else{
      dispatch(safetyGraphs({type:"major",year:year}))
      dispatch(safetyGraphs({type:"minor", year:year}))
    }
  },[dispatch, month,year])

  const getData = (selectedYear, selectedMonth)=>{
    setYear(selectedYear)
    setMonth(selectedMonth)
  }

  return (
    <div className="container-fluid" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
      {/* <ToastContainer /> */}
            <Card className="mb-3 p-3" style={{ backgroundColor: "white",height:75}}>
            <Filter change={getData} />
      </Card>
      <Row className="row-sm">
        <Col
          lg={6}
          // lg={month ? 6 : 6}
          md={12}
          sm={12}
          xl={6}
          data-aos="fade-up"
          style={{width:"100%"}}
        >
          <Card className=" overflow-hidden">
            <Card.Header className="border-bottom">
              <Card.Title className=" mb-0">
                Major
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <Major data={major} month={month} />
            </Card.Body>
          </Card>
        </Col>
        <Col
          lg={6}
          md={12}
          sm={12}
          xl={6}
          data-aos="fade-up"
        >
          <Card className=" overflow-hidden">
            <Card.Header className="border-bottom">
              <Card.Title className=" mb-0">
                Minor
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <Minor data={minor} month={month} />
            </Card.Body>
          </Card>
        </Col>


        <Col
          lg={12}
          md={12}
          sm={12}
          xl={12}
          data-aos="fade-up"
        >
          <Card className=" overflow-hidden">
            <Card.Header className="border-bottom">
              <Card.Title className=" mb-0">
                To-do List
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <TodoList type="safety"/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default homeComponent;
