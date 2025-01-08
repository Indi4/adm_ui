import React, { useState } from 'react'
import MonthlyPurchase from './MonthlyPurchase'
import DailyPurchase from './DailyPurchase'
import { Card, Col, Row } from "react-bootstrap";
import { Autocomplete, Button, Grid, MenuItem, TextField } from '@mui/material';


const Purchase = () => {
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
  const [graphOf, setGraphOf] = useState("month");

  const graphTypeChange = (event)=>{
    setGraphOf(event.target.value)
  }

  return (
    <div className="container-fluid"
    style={{ backgroundColor: "#f8f9fa" }}>
        <Card style={{ backgroundColor: "rgb(53 128 174 / 18%)", padding: 8 }}>
        <div style={{display:'flex', justifyContent:'space-between'}}> 
        <h4 className="text-left mb-4" style={{ fontSize: "2rem", fontWeight:"bold" }}>
          PURCHASE
        </h4>
        <TextField
            select
            label="Month/Day"
            value={graphOf}
            onChange={graphTypeChange}
            style={{ width: "200px" }}
          >
            <MenuItem value="month">Month</MenuItem>
            <MenuItem value="day">Day</MenuItem>
          </TextField>
        </div>
        <div className="row mb-4">
          <div className="col-md-3">
            <Grid item xs={6}>
              <Autocomplete
                options={yearList || []}
                getOptionLabel={(option) => option.toString() || ""}
                value={year}
                // onChange={(event, value, reason) =>
                //   handleYearInputChange(event, value, reason, "year")
                // }
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
                getOptionLabel={(option) => option || ""}
                value={month}
                // onChange={(event, value, reason) =>
                //   handleMonthInputChange(event, value, reason, "month")
                // }
                renderInput={(params) => (
                  <TextField {...params} label="Month" />
                )}
                fullWidth
                disableClearable={false}
              />
            </Grid>
          </div>
          {/* <div className="col-md-3">
            <Grid item xs={6}>
              <Autocomplete
                options={sectionData || []}
                getOptionLabel={(option) => option.section_name || ""}
                value={
                  sectionData.find(
                    (section) => section.section_name === sectionName
                  ) || null
                }
                // onChange={(event, value, reason) =>
                //   handleInputChange(event, value, reason, "section")
                // }
                renderInput={(params) => (
                  <TextField {...params} label="Section Name" />
                )}
                fullWidth
                disableClearable={false}
              />
            </Grid>
          </div> */}
          {/* <div className="col-md-3">
            <Grid item xs={6}>
              <Autocomplete
                options={breakDOwnData || []}
                getOptionLabel={(option) => option.breakdown_reason || ""}
                value={
                  breakDOwnData.find(
                    (reason) => reason.breakdown_reason === breakdownReason
                  ) || null
                }
                // onChange={(event, value, reason) =>
                //   handleReasonInputChange(
                //     event,
                //     value,
                //     reason,
                //     "breakdown_reason"
                //   )
                // }
                renderInput={(params) => (
                  <TextField {...params} label="Reason" />
                )}
                fullWidth
                disableClearable={false}
              />
            </Grid>
          </div> */}
        </div>
      </Card>
      {graphOf==="month"?(
        <MonthlyPurchase/>
      ):(
        <DailyPurchase/>
      )}
    </div>
  )
}

export default Purchase