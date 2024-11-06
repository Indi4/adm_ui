import React, { useState, useEffect } from "react";
import { Autocomplete, Box, Grid, IconButton, InputLabel, MenuItem, Modal, TextField, Typography } from "@mui/material";
import { CardBody, CardTitle } from "reactstrap";
import { Card } from "react-bootstrap";

import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { initialAddRowState, initialState } from "./config";
import { CDC_ALLDEMANDS, CDC_GET_PARTINFO, CDC_SAVE_ALLDEMANDS } from "../../../endPointConfig";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import FilterComponent from "../../commonComponent/filter"
import { getYearList, months } from "../../../commonConfig";
import { Button } from "react-bootstrap";
import { callCommonRefreshProps, callCommonSaveAPI, callCommonUpdateAPI } from "../../../../store/action/action";
import { Appbtn, Outline } from "../../../../components/bootstrap/buttons/data/buttondata";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  maxHeight: "90vh", // Set maximum height and enable vertical scroll
  overflowY: "auto", // Enable vertical scroll
  bgcolor: "background.paper",
  borderRadius: "6",
  boxShadow: "none", // Remove the default box shadow
  p: 4,
  "&::-webkit-scrollbar": {
    width: "10px", // Sleek scrollbar width
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888", // Thumb color
    borderRadius: "10px", // Rounded edges
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555", // Thumb color on hover
  },
};
const compactTextFieldStyle = {
  //margin: "4px 0", // Reduce vertical margin
  height: "25px !important", // Set a fixed height
  width: "260px !important", // Set a fixed height
  '& .MuiInputBase-root': {
    fontSize: "14px", // Reduce font size for a compact look
  },
};
const compactGridItemStyle = {
  padding: "4px", // Reduce padding between grid items
};

function AddEditNewDemandComponent(props) {
  const [openModal, setOpenModal] = useState(0);
  const [endPoint, setEndPoint] = useState();
  const { handleAddEditOpenModal, openPopUp, type, rowId, allDemandList, categoryList, errorData, saveDemandDetailsData, saveDemandDetails,
    updateDemandDetailsData, updateDemandDetails, customerCode } = props;
  const [isSave, setIsSave] = useState(0);
  const [state, setState] = useState({});
  const [demandValues, setDemandValues] = useState([{ ...initialAddRowState }]);
  const [errors, setErrors] = useState({ material_description: null });
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const currentYear1 = currentDate.getFullYear();
  const [yearList, setYearList] = useState([])
  const [selectedYear, setSelectedYear] = useState(0)
  const [partNoBYCustCodeList, setPartNoBYCustCodeList] = useState([])
  const [customerNameorCode, setCustomerNameorCode] = useState("")
  const filteredMonths = months.filter((month) => {
    const monthIndex = new Date(
      `${month.demand_month} 1, ${month.id}`
    ).getMonth();
    const monthYear = demandValues[0].demand_year;

    return (
      monthYear > currentYear1 ||
      (monthYear === currentYear1 && monthIndex >= currentMonthIndex)
    );
  });

  useEffect(() => {
    const years = getYearList(0, 5)
    setYearList(years)
    return () => { reset() };
  }, []);

  useEffect(() => {
    if (!!openPopUp) {
      setOpenModal(openPopUp);
      setDemandValues([{ ...initialAddRowState }]);
      if (type === "Edit") {
        if (!!allDemandList && allDemandList.length > 0) {
          let result = allDemandList.filter((data) => data.id === rowId);
          if (result && result.length > 0) {
            let rowData = result[0];
            setState(rowData);
            setDemandValues(rowData.demands);
          }
        }
      }
    } else setOpenModal(0);
  }, [openPopUp]);

  useEffect(() => {
    if (!!isSave && Object.keys(saveDemandDetailsData).length > 0) {
      setIsSave(0);
      handleClose();
      handleAddEditOpenModal(0, 0, saveDemandDetailsData.is_success, "", saveDemandDetailsData.message, "");
    }
    if (!!isSave && Object.keys(updateDemandDetailsData).length > 0) {
      setIsSave(0);
      handleClose();
      handleAddEditOpenModal(0, 0, updateDemandDetailsData.is_success, "", updateDemandDetailsData.message, "");
    }
    if (!!isSave && Object.keys(errorData).length > 0) {
      setIsSave(0);
      handleClose();
      handleAddEditOpenModal(0, 0, 0, "", errorData.error, "");
    }
  }, [saveDemandDetailsData, updateDemandDetailsData, errorData]);

  const valdationForm = () => {
    let valid = true;
    let newErrors = { ...errors };
    if (state.department_name === null || state.department_name === "") {
      newErrors.department_name = "Enter Department Name";
      valid = false;
    } else {
      newErrors.department_name = null;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value });
    if (name === 'fg_part_no') {
      let result = partNoBYCustCodeList.find((item) => item.fg_part_no === value.fg_part_no)
      if (result) {
        setState({ ...state, [name]: value.fg_part_no.trim(), wheel_size: result.wheel_size.trim() })
      }
    }
    setErrors({ [e.target.name]: "" });
  };

  const handleSave = () => {
    props.refreshProps("saveDemandDetailsData");
    props.refreshProps("updateDemandDetailsData");
    props.refreshProps("errorData");
    const payload = state;
    payload.demands = demandValues;
    delete payload.openDeleteModal
    delete payload.openEditModal
    delete payload.openModal
    delete payload.openPopUp
    if (type === 'Edit')
      delete payload.demand_ids
    if (!valdationForm()) {
      return;
    }
    type === "Add"
      ? saveDemandDetails(`${CDC_SAVE_ALLDEMANDS}`, payload)
      : updateDemandDetails(`${CDC_ALLDEMANDS}${rowId}/${customerCode}`, state);
    setIsSave(1);
  };

  const handleClose = (e, reason) => {
    props.refreshProps("saveDemandDetailsData");
    props.refreshProps("updateDemandDetailsData");
    props.refreshProps("errorData");
    reset()
    setOpenModal(0);
    if (reason === "cancel") {
      reset()
      handleAddEditOpenModal(0, 0, 0, "", "", "");
    }
  };

  let handleDeleteEvent = (i) => {
    let newFormValues = [...demandValues];
    newFormValues.splice(i, 1);
    setDemandValues(newFormValues);
  };

  const handleSearchData = (allDemandData, partNoByCustCodeData, customerNameCode) => {
    setCustomerNameorCode(customerNameCode)
    if (type === 'Add') {
      if (partNoByCustCodeData && Object.keys(partNoByCustCodeData).length > 0) {
        let wheelSize = ''
        if (partNoByCustCodeData.data.part_list && partNoByCustCodeData.data.part_list.length > 0) {
          let fgList = []
          partNoByCustCodeData.data.part_list.map((item) => {
            var strItem = item.split(',')
            fgList.push({ "fg_part_no": strItem[0].trim(), "wheel_size": strItem[1] })
          })
          setPartNoBYCustCodeList(fgList)
        }
        if (partNoByCustCodeData.data && Object.keys(partNoByCustCodeData.data).length > 0) {
          setState({
            ...state,
            customer_code: partNoByCustCodeData.data.customer_code,
            customer_name: partNoByCustCodeData.data.customer_name,
            plant_location: partNoByCustCodeData.data.plant_location,
            category: partNoByCustCodeData.data.category,
            wheel_size: wheelSize
          })
        }
      }
    }
  }

  let handleAddChangeEvent = (e, i) => {
    if (e.target.name === "demand_year")
      setSelectedYear(e.target.value)
    let newFormValues = [...demandValues];
    newFormValues[i][e.target.name] = e.target.value;
    setDemandValues(newFormValues);
  };

  let addFormFields = () => {
    setDemandValues([...demandValues, { ...initialAddRowState }]);
  };

  const reset = () => {
    props.refreshProps("saveDemandDetailsData");
    props.refreshProps("updateDemandDetailsData");
    props.refreshProps("errorData");
    props.refreshProps("partNoByCustCodeData");
    setState({ ...initialState, customer_code: '', customer_name: '', plant_location: '', category: '', wheel_size: '' });
    setPartNoBYCustCodeList([])
    setDemandValues([]);
  };

  return (
    <>
      <ToastContainer />
      <Modal open={openModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {type === "Edit" ? "Edit" : "Add"}{" Dispatch Plan"}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={(event, reason) => handleClose(event, "cancel")}
            aria-label="close"
            sx={{ position: "absolute", top: 5, right: 15 }}
          >
            <CloseIcon />
          </IconButton>
          <Grid container spacing={1} >
            <Grid item xs={12} >
              <FilterComponent
                handleSearchData={handleSearchData}
                fromPage={"addNewDemand"}
                disable={type === "Edit" ? true : false}
                callAPI={CDC_GET_PARTINFO}
              />
            </Grid>
            <Grid item xs={4} style={{ ...gridItemStyle, ...compactGridItemStyle }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                label='Customer Code'
                fullWidth
                id="customer_code"
                name="customer_code"
                value={state.customer_code || ''}
                onChange={(e) => handleInputChange(e)}
                InputProps={{ readOnly: type === "Edit" }}
                sx={compactTextFieldStyle}
              />
            </Grid>
            <Grid item xs={4} style={{ ...gridItemStyle, ...compactGridItemStyle }}>
              <TextField
                variant="outlined"
                margin="normal"
                label='Customer Name'
                required
                fullWidth
                id="customer_name"
                name="customer_name"
                value={state.customer_name || ''}
                onChange={(e) => handleInputChange(e)}
                InputProps={{ readOnly: type === "Edit" }}
                sx={compactTextFieldStyle}
              />
            </Grid>
            <Grid item xs={4} style={{ ...gridItemStyle, ...compactGridItemStyle }}>
              <TextField
                variant="outlined"
                margin="normal"
                label='Location'
                required
                fullWidth
                id="plant_location"
                name="plant_location"
                value={state.plant_location || ''}
                onChange={(e) => handleInputChange(e)}
                InputProps={{ readOnly: type === "Edit" }}
                sx={compactTextFieldStyle}
              />
            </Grid>
            <Grid item xs={4} style={{ ...gridItemStyle, ...compactGridItemStyle }}>
              {type === "Edit" ?
                <TextField
                  variant="outlined"
                  margin="normal"
                  label='FG Code'
                  required
                  fullWidth
                  id="fg_part_no"
                  name="fg_part_no"
                  value={state.fg_part_no || ''}
                  onChange={(e) => handleInputChange(e)}
                  InputProps={{ readOnly: type === "Edit" }}
                  sx={compactTextFieldStyle}
                />
                :
                <Autocomplete
                  freeSolo
                  disabled={type === "Edit"}
                  onChange={(event, newValue) => {
                    handleInputChange({ target: { name: 'fg_part_no', value: newValue } });
                  }}
                  onInputChange={(event, newValue) => {
                    handleInputChange({ target: { name: 'fg_part_no', value: newValue || '' } });
                  }}
                  options={partNoBYCustCodeList}
                  getOptionLabel={(option) => option.fg_part_no || ""}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="fg_part_no"
                      name="fg_part_no"
                      label='FG Code'
                    />
                  )}
                  sx={compactTextFieldStyle}
                />
              }
            </Grid>
            <Grid item xs={4} style={{ ...gridItemStyle, ...compactGridItemStyle }} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                label="Wheel Size"
                fullWidth
                id="wheel_size"
                name="wheel_size"
                value={state.wheel_size || ''}
                onChange={(e) => handleInputChange(e)}
                InputProps={{ readOnly: type === "Edit" }}
                sx={compactTextFieldStyle}
              />
            </Grid>
            <Grid item xs={3} style={{ ...gridItemStyle, ...compactGridItemStyle }}>
              <TextField
                variant="outlined"
                margin="normal"
                label="Color"
                fullWidth
                id="color"
                name="color"
                value={state.color || ''}
                onChange={(e) => handleInputChange(e)}
                InputProps={{ readOnly: type === "Edit" }}
                sx={compactTextFieldStyle}
              />
            </Grid>
          </Grid>
          <Card style={{ marginTop: "20px" }}>
            <CardBody>
              <Typography style={{ fontSize: "12px" }}> Add Quantity</Typography>
              <div style={{ maxHeight: "400px", overflowY: "auto" }}>
                {demandValues && demandValues.length > 0 && demandValues.map((element, index) => (
                  <div className="form-inline" key={index}>
                    <Grid container spacing={2} style={gridContainerStyle}>
                      <Grid item xs={3} style={gridItemStyle}>
                        <Autocomplete
                          id="year-select-autocomplete"
                          options={yearList || []}
                          getOptionLabel={(option) => option}
                          renderInput={(params) => (
                            <TextField {...params} label="Year" />
                          )}
                          value={yearList.find((year) => year === element.demand_year) || ""} // Set the current value
                          onChange={(newValue) => {
                            handleAddChangeEvent(
                              {
                                target: {
                                  name: "demand_year",
                                  value: newValue
                                    ? parseInt(newValue.target.innerText)
                                    : "",
                                },
                              },
                              index
                            ); // Pass index as an additional parameter to handleAddChangeEvent
                          }}
                        />
                      </Grid>
                      <Grid item xs={3} marginLeft={2.6} style={gridItemStyle}>
                        <Autocomplete
                          id="demand_month"
                          name="demand_month"
                          value={
                            filteredMonths.find(
                              (month) => month.demand_month === element.demand_month
                            ) || null
                          } // Set the current value
                          options={selectedYear === (currentYear1 + 1) ? months : filteredMonths}
                          getOptionLabel={(month) => month.demand_month || ""}
                          onChange={(event, newValue) => {
                            handleAddChangeEvent(
                              {
                                target: {
                                  name: "demand_month",
                                  value: newValue ? newValue.demand_month : "",
                                },
                              },
                              index
                            ); // Pass index as an additional parameter to handleAddChangeEvent
                          }}
                          renderInput={(params) => <TextField {...params} label="Month" />}
                        />
                      </Grid>
                      <Grid item xs={3} marginLeft={2.6} style={gridItemStyle}>
                        <TextField
                          id="outlined-basic"
                          label="Quantity"
                          name="quantity"
                          type="number"
                          variant="outlined" // 'variant' should be 'outlined' instead of 'quantity'
                          value={element.quantity || ""} // Make sure 'element' and 'index' are defined
                          onChange={(e) => handleAddChangeEvent(e, index)}
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Allow only digits
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        marginTop={2}
                        marginLeft={2}
                        style={gridItemStyle}
                      >
                        <IconButton className="add" onClick={addFormFields}>
                          <AddIcon style={{ color: "green" }} />
                        </IconButton>
                        {index ? (
                          <IconButton
                            style={{ color: "red" }}
                            className="remove"
                            onClick={() => handleDeleteEvent(index)}
                          >
                            <RemoveIcon />
                          </IconButton>
                        ) : null}
                      </Grid>
                    </Grid>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <div
            style={{
              marginTop: "7px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {Outline.filter((idx) => idx.color === "outline-danger").map(
              (idx, out) => (
                <Button
                  key={out}
                  variant={idx.color}
                  onClick={(e, reason) => handleClose(e, "cancel")}
                  style={{ width: "100px", height: "30px" }}
                >
                  Cancel
                </Button>
              )
            )}

            {Appbtn.filter((idx) => idx.icon === "save").map((idx, ap) => (
              <Button
                key={ap}
                variant="secondary"
                className="btn btn-app"
                onClick={handleSave}
                style={{ width: "100px", height: "30px" }}
              >
                <i className={`me-2 fs-13 fa fa-${idx.icon}`}></i>Save
              </Button>
            ))}
          </div>

        </Box>
      </Modal>
    </>
  );
}
const gridContainerStyle = {
  marginTop: 5,
};
const gridItemStyle = {
  marginBottom: 10,
};

const mapStatetoProps = (state) => {
  return {
    saveDemandDetailsData: state.commonReducer.saveDemandDetailsData,
    updateDemandDetailsData: state.commonReducer.updateDemandDetailsData,
    errorData: state.commonReducer.errorData,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    saveDemandDetails: (endPoint, payLoad) => dispatch(callCommonSaveAPI(endPoint, payLoad, "demandDetails")),
    updateDemandDetails: (endPoint, payLoad) => dispatch(callCommonUpdateAPI(endPoint, payLoad, "demandDetails")),
    refreshProps: (title) => dispatch(callCommonRefreshProps(title)),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(AddEditNewDemandComponent);
