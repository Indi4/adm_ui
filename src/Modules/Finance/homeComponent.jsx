import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Autocomplete, Grid, MenuItem, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { qualityGraphs } from "../../store/quality/qualitySlice";
import TodoList from "../../commonComponents/TodoList";
import Purchase from "./Purchase";
import ConsumableCost from "./ConsumableCost";
import Filter from "../../commonComponents/Filter";


const homeComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const dispatch = useDispatch()
  const {consumable_costs, purchase} = useSelector((state)=> state.quality)

  useEffect(()=>{
    if(month){
      dispatch(qualityGraphs({type:"purchase",year:year,month:month}))
      dispatch(qualityGraphs({type:"consumable_costs", year:year, month: month}))     
    }
    else{
      dispatch(qualityGraphs({type:"purchase",year:year}))
      dispatch(qualityGraphs({type:"consumable_costs", year:year}))  
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
      {/* <div className="row mb-4" style={{display:"flex", justifyContent:"end"}}>
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
        

        </div> */}
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
                Purchase
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <Purchase data={purchase} month={month} />
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
              Consumable Cost
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <ConsumableCost data={consumable_costs} month={month} />
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
              <TodoList  type="finance"/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default homeComponent;
