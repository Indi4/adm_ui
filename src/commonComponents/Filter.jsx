import React, { useState } from 'react'
import { Autocomplete, Grid, MenuItem, TextField } from "@mui/material";

const Filter = ({change}) => {
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
      const handleYearInputChange = (event, value, reason) => {
        if (reason === "selectOption") {
          setYear(value);
          change(value,month)
        } else {
            // const defaultYear = new Date().getFullYear
          setYear(new Date().getFullYear());
          change(new Date().getFullYear(),month)
        }
      };
    
      const handleMonthInputChange = (event, value, reason) => {
        if (reason === "selectOption") {
          setMonth(value);
          change(year,value)
        } else {
          setMonth();
          change(year,"")
        }
      };
    
  return (
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
  )
}

export default Filter