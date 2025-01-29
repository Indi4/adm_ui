import React, { useEffect, useState } from "react";
import { 
  Autocomplete, 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  Grid, 
  IconButton, 
  TextField 
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FaFilter } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";

const Filter = ({ getData }) => {
  const yearList = ["2025", "2024", "2023", "2022", "2021", "2020"];
  const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const [open, setOpen] = useState(false);



  useEffect(() => {
    getData(year, month);
  }, [year, month, getData]);


  const handleClear = () => {
    setYear(new Date().getFullYear());
    setMonth("");
    setOpen(false);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "10px", marginBottom:"20px" }}>
        <Button onClick={() => setOpen(true)} style={{ border: "1px solid #ccc" }}>
          <FaFilter style={{ fontSize: "1.5rem", color: "#555" }} />
        </Button>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          style: { borderRadius: "20px", padding: "20px", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" },
        }}
      >
        {/* Dialog Title with Close Button */}
        <DialogTitle style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: "bold" }}>Select Filter</span>
          <IconButton onClick={() => setOpen(false)} style={{ color: "#555" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <div style={{ borderBottom: "1px solid #ccc", marginBottom: "20px" }} />

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Autocomplete
                options={yearList}
                value={year.toString()}
                onChange={(event, value) => setYear(value || new Date().getFullYear())}
                renderInput={(params) => <TextField {...params} label="Year" />}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                options={monthList}
                value={month}
                onChange={(event, value)=> setMonth(value || "")}
                renderInput={(params) => <TextField {...params} label="Month" />}
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        
        <DialogActions>
          {/* <Button onClick={() => setOpen(false)} variant="contained" style={{ backgroundColor: "#FF4D4D" }}>
            Close
          </Button> */}
          <Button onClick={handleClear} variant="contained" style={{ backgroundColor: "#A9A9A9" }}>
            Clear
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Filter;
