import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { HRGraphs } from "../../store/quality/qualitySlice";
import TodoList from "../../commonComponents/TodoList";
import Filter from "../../commonComponents/Filter";
import Headcount from "./Headcount";
import MPCost from "./MPCost";

const homeComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const dispatch = useDispatch();
  const headcount = useSelector(
    (state) => state.quality.HRGraphsData.headcount
  );
  const mpcost = useSelector(
    (state) => state.quality.HRGraphsData.mpcost
  );

  console.log(headcount,mpcost)

  useEffect(() => {
    if (month) {
      dispatch(HRGraphs({ type: "mpcost", year: year, month: month }));
      dispatch(
        HRGraphs({ type: "headcount", year: year, month: month })
      );
    } else {
      dispatch(HRGraphs({ type: "mpcost", year: year }));
      dispatch(HRGraphs({ type: "headcount", year: year }));
    }
  }, [dispatch, month, year]);

  const getData = (selectedYear, selectedMonth) => {
    setYear(selectedYear);
    setMonth(selectedMonth);
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#2F598C" }}
    >
      {/* <ToastContainer /> */}
      {/* <Card
        className="mb-3 p-3"
        style={{ backgroundColor: "white", height: 75 }}
      > */}
        <Filter  getData={getData} />
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
      {/* </Card> */}
      <Row className="row-sm">
        <Col lg={6} md={12} sm={12} xl={6} data-aos="fade-up">
          <Card className=" overflow-hidden">
            <Card.Header className="border-bottom">
              <Card.Title
                className=" mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Headcount Report
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <Headcount data={headcount} month={month} />
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
                MP Cost Report
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <MPCost data={mpcost} month={month} />
            </Card.Body>
          </Card>
        </Col>

        {/* <Col lg={4} md={12} sm={12} xl={4} data-aos="fade-up">
          <Card className=" overflow-hidden">
            <Card.Header className="border-bottom">
              <Card.Title
                className=" mb-0"
                style={{ fontWeight: "bold", fontSize: "1.3rem" }}
              >
                Indirect Manpower
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-3">
              <InDirectManpower data={indirect_manpower} month={month} />
            </Card.Body>
          </Card>
        </Col> */}

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
              <TodoList type="hr" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default homeComponent;
