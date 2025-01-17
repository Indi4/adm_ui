import React, { useEffect, useState } from "react";
import MonthlyPurchase from "../Purchase/MonthlyPurchase";
import DailyPurchase from "../Purchase/DailyPurchase";
import { Card, Row, Col } from "react-bootstrap";
import { Autocomplete, Grid, MenuItem, TextField } from "@mui/material";
import PPM from "./PPM";
import COPQ from "./COPQ";
import { useDispatch, useSelector } from "react-redux";
import { qualityGraphs } from "../../store/quality/qualitySlice";
import DesignScrap from "./DesignScrap";
import ProcessScrap from "./ProcessScrap";
import TodoList from "../../commonComponents/TodoList";

const homeComponent = () => {
  const yearList = ["2025", "2024", "2023", "2022", "2021", "2020"];
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const dispatch = useDispatch()
  const {ppm, copq, design_scrap, process_scrap} = useSelector((state)=> state.quality)

  useEffect(()=>{
    if(month){
      dispatch(qualityGraphs({type:"ppm",year:year,month:month}))
      dispatch(qualityGraphs({type:"copq", year:year, month: month}))
      dispatch(qualityGraphs({type:"process_scrap", year:year, month: month}))
      dispatch(qualityGraphs({type:"design_scrap", year:year, month: month}))
      
    }
    else{
      dispatch(qualityGraphs({type:"ppm",year:year}))
      dispatch(qualityGraphs({type:"copq",year:year}))
      dispatch(qualityGraphs({type:"process_scrap", year:year,}))
      dispatch(qualityGraphs({type:"design_scrap", year:year,}))
    }
  },[dispatch, month,year])

  const handleYearInputChange = (event, value, reason) => {
    if (reason === "selectOption") {
      setYear(value);
    } else {
      setYear(new Date().getFullYear());
    }
  };

  const handleMonthInputChange = (event, value, reason) => {
    if (reason === "selectOption") {
      setMonth(value);
    } else {
      setMonth();
    }
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "#f8f9fa" }}>
      {/* <ToastContainer /> */}
      <Card style={{ backgroundColor: "rgb(53 128 174 / 18%)", padding: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4
            className="text-left mb-4"
            style={{ fontSize: "2rem", fontWeight: "bold" }}
          >
            QUALITY
          </h4>
          <div
            style={{
              display: "flex",
              gap: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-3">
            <Grid item xs={6}>
              <Autocomplete
                options={yearList || []}
                getOptionLabel={(option) => option.toString() || ""}
                value={year}
                onChange={(event, value, reason) =>
                  handleYearInputChange(event, value, reason, "year")
                }
                renderInput={(params) => <TextField {...params} label="Year" />}
                fullWidth
                disableClearable={false}
              />
            </Grid>
          </div>
            <div className="col-md-3">
              <Grid item xs={6}>
                <Autocomplete
                  options={monthList || []}
                  getOptionLabel={(option) => option.toString() || ""}
                  value={month}
                  onChange={(event, value, reason) =>
                    handleMonthInputChange(event, value, reason, "month")
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Select Months" />
                  )}
                  fullWidth
                  disableClearable={false}
                />
              </Grid>
            </div>
        

        </div>
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
              <Card.Title className=" mb-0">
                PPM
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <PPM data={ppm} month={month} />
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
              <Card.Title className=" mb-0">
                COPQ
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <COPQ data={copq} month={month} />
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
              <Card.Title className=" mb-0">
                Design Scrap
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <DesignScrap data={design_scrap} month={month} />
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
              <Card.Title className=" mb-0">
                Process Scrap
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <ProcessScrap data={process_scrap} month={month} />
            </Card.Body>
          </Card>
        </Col>

        <Col
          lg={12}
          md={6}
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
              <TodoList type="quality"/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default homeComponent;
