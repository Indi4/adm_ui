import React, { useState } from "react";
import MonthlyPurchase from "./MonthlyPurchase";
import DailyPurchase from "./DailyPurchase";
import UploadModal from "../../commonComponents/UploadModal";
import { Card, Button, ToastContainer } from "react-bootstrap";
import { Autocomplete, Grid, MenuItem, TextField } from "@mui/material";

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

  const graphTypeChange = (event) => {
    setGraphOf(event.target.value);
  };

 

  return (
    <div className="container-fluid" style={{ backgroundColor: "#f8f9fa" }}>
      <ToastContainer />
      <Card style={{ backgroundColor: "rgb(53 128 174 / 18%)", padding: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4
            className="text-left mb-4"
            style={{ fontSize: "2rem", fontWeight: "bold" }}
          >
            PURCHASE
          </h4>
          <div
            style={{
              display: "flex",
              gap: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
        </div>
        <div className="row mb-4">
          <div className="col-md-3">
            <Grid item xs={6}>
              <Autocomplete
                options={yearList || []}
                getOptionLabel={(option) => option.toString() || ""}
                value={year}
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
                renderInput={(params) => (
                  <TextField {...params} label="Month" />
                )}
                fullWidth
                disableClearable={false}
              />
            </Grid>
          </div>
        </div>
      </Card>
      {graphOf === "month" ? <MonthlyPurchase /> : <DailyPurchase />}
    </div>
  );
};

export default Purchase;
