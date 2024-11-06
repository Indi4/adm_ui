import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  InputLabel,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import {
  callCommonUpdateAPI,
  callCommonSaveAPI,
  callCommonRefreshProps,
} from "../../../../../store/action/action";
import { connect } from "react-redux";
import { MDM_GET_SAVE_DEPARTMENTDETAILS } from "../../../../endPointConfig";
import {
  Appbtn,
  Outline,
} from "../../../../../components/bootstrap/buttons/data/buttondata";
import { Button } from "react-bootstrap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "6",
  boxShadow: "none",
  p: 4,
};

function AddEditDepartmentComponent(props) {
  const [openModal, setOpenModal] = useState(0);
  const [endPoint, setEndPoint] = useState();
  const {
    handleAddEditOpenModal,
    openPopUp,
    type,
    rowId,
    departmentList,
    errorData,
    saveDepartmentDetailsData,
    saveDepartmentDetails,
    updateDepartmentDetails,
    updateDepartmentDetailsData,
  } = props;
  const [isSave, setIsSave] = useState(0);
  const [state, setState] = useState({});
  const [errors, setErrors] = useState({
    department_name: "",
  });

  useEffect(() => {
    if (!!openPopUp) {
      setOpenModal(openPopUp);
      if (type === "Edit") {
        if (!!departmentList && departmentList.length > 0) {
          let result = departmentList.filter((data) => data.id === rowId);
          if (result && result.length > 0) {
            let rowData = result[0];
            setState(rowData);
          }
        }
      }
    } else setOpenModal(0);
  }, [openPopUp]);

  useEffect(() => {
    if (!!isSave && Object.keys(saveDepartmentDetailsData).length > 0) {
      setIsSave(0);
      handleClose();
      handleAddEditOpenModal(
        0,
        0,
        saveDepartmentDetailsData.is_success,
        "",
        saveDepartmentDetailsData.message
      );
    }
    if (!!isSave && Object.keys(updateDepartmentDetailsData).length > 0) {
      setIsSave(0);
      handleClose();
      handleAddEditOpenModal(
        0,
        0,
        updateDepartmentDetailsData.is_success,
        "",
        updateDepartmentDetailsData.message
      );
    }
    if (!!isSave && Object.keys(errorData).length > 0) {
      setIsSave(0);
      handleClose();
      handleAddEditOpenModal(0, 0, 0, "", errorData.error);
    }
  }, [saveDepartmentDetailsData, updateDepartmentDetailsData, errorData]);

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
    const { name, value } = e.target;

    const alphanumericPattern = /^[a-zA-Z0-9]*$/;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (!alphanumericPattern.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Department name must be alphanumeric.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleKeyPress = (e) => {
    const char = String.fromCharCode(e.which);
    const alphanumericPattern = /^[a-zA-Z0-9]$/;

    if (!alphanumericPattern.test(char)) {
      e.preventDefault();
    }
  };

  const handleSave = () => {
    props.refreshProps("saveDepartmentDetailsData");
    props.refreshProps("updateDepartmentDetailsData");
    props.refreshProps("errorData");

    if (!valdationForm()) {
      return;
    }

    const alphanumericPattern = /^[a-zA-Z0-9]*$/;

    if (!state.department_name?.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        department_name: "Department name is required.",
      }));
      return;
    }

    if (!alphanumericPattern.test(state.department_name)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        department_name: "Department name must be alphanumeric.",
      }));
      return;
    }

    if (type === "Add") {
      saveDepartmentDetails(`${MDM_GET_SAVE_DEPARTMENTDETAILS}`, state);
    } else {
      updateDepartmentDetails(
        `${MDM_GET_SAVE_DEPARTMENTDETAILS}${rowId}`,
        state
      );
    }

    setIsSave(1);
  };

  const handleClose = (e, reason) => {
    props.refreshProps("saveDepartmentDetailsData");
    props.refreshProps("updateDepartmentDetailsData");
    props.refreshProps("errorData");
    setState({});
    setErrors({ department_name: "" });
    setOpenModal(0);
    if (reason === "cancel") handleAddEditOpenModal(0, 0, 0, "", "");
  };

  return (
    <>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" 
            sx={{ borderBottom: "1px solid #e0e0e0", padding: 2 }}
            >
            {type + "  Department" || ""}
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
          <Grid container spacing={2} style={gridContainerStyle}>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Department Name<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="none"
                required
                fullWidth
                id="department_name"
                name="department_name"
                value={state.department_name || ""}
                onKeyPress={handleKeyPress}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.department_name}
                helperText={errors.department_name}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} style={gridItemStyle}>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {Outline.filter((idx) => idx.color === "outline-danger").map(
                (idx, out) => (
                  <Button
                    key={out}
                    variant={idx.color}
                    onClick={(event, reason) => handleClose(event, "cancel")}
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
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
const gridContainerStyle = {
  marginTop: 10,
};

const gridItemStyle = {
  marginBottom: 10,
};
const mapStatetoProps = (state) => {
  return {
    saveDepartmentDetailsData: state.commonReducer.saveDepartmentDetailsData,
    updateDepartmentDetailsData:
      state.commonReducer.updateDepartmentDetailsData,
    errorData: state.commonReducer.errorData,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    saveDepartmentDetails: (endPoint, payLoad) =>
      dispatch(callCommonSaveAPI(endPoint, payLoad, "departmentDetails")),
    updateDepartmentDetails: (endPoint, payLoad) =>
      dispatch(callCommonUpdateAPI(endPoint, payLoad, "departmentDetails")),
    refreshProps: (title) => dispatch(callCommonRefreshProps(title)),
  };
};
export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(AddEditDepartmentComponent);
