import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Autocomplete, Grid, MenuItem, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { qualityGraphs } from "../../store/quality/qualitySlice";
import TodoList from "../../commonComponents/TodoList";
import PlanVsAct from "./PlanVsAct";
import Sales from "./Sales";

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
  const {sales, plan_vs_act} = useSelector((state)=> state.quality)

  useEffect(()=>{
    if(month){
      dispatch(qualityGraphs({type:"sales",year:year,month:month}))
      dispatch(qualityGraphs({type:"plan_vs_act", year:year, month: month}))      
    }
    else{
      dispatch(qualityGraphs({type:"sales",year:year}))
      dispatch(qualityGraphs({type:"plan_vs_act",year:year}))
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
    <div className="container-fluid" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
      {/* <ToastContainer /> */}
      <Card className="mb-3 p-3" style={{ backgroundColor: "white",height:75}}>


      <div className="row mb-4" style={{display:"flex", justifyContent:"end"}}>
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
                Plan Vs Act
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <PlanVsAct data={plan_vs_act} month={month} />
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
                Sales
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <Sales data={sales} month={month} />
            </Card.Body>
          </Card>
        </Col>

        <Col
          lg={6}
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
              <TodoList type="sales"/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default homeComponent;
