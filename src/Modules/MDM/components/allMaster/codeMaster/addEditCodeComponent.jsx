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
import { MDM_CODE } from "../../../../endPointConfig";
import { Button } from "react-bootstrap";
import {
  Appbtn,
  Outline,
} from "../../../../../components/bootstrap/buttons/data/buttondata";

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

function AddEditCodeComponent(props) {
  const [openModal, setOpenModal] = useState(0);
  const [endPoint, setEndPoint] = useState();
  const {
    handleAddEditOpenModal,
    openPopUp,
    type,
    rowId,
    codeList,
    errorData,
    saveCodeDetailsData,
    saveCodeDetails,
    updateCodeDetails,
    updateCodeDetailsData,
  } = props;
  const [isSave, setIsSave] = useState(0);
  const [state, setState] = useState({ code: "", description: "" });
  const [errors, setErrors] = useState({
    code: null,
    description: null,
  });

  useEffect(() => {
    if (!!openPopUp) {
      setOpenModal(openPopUp);
      if (type === "Edit") {
        if (!!codeList && codeList.length > 0) {
          let result = codeList.filter((data) => data.id === rowId);
          if (result && result.length > 0) {
            let rowData = result[0];
            setState(rowData);
          }
        }
      }
    } else setOpenModal(0);
  }, [openPopUp]);

  useEffect(() => {
    if (!!isSave && Object.keys(saveCodeDetailsData).length > 0) {
      setIsSave(0);
      handleClose();
      handleAddEditOpenModal(
        0,
        0,
        saveCodeDetailsData.is_success,
        "",
        saveCodeDetailsData.message
      );
    }
    if (!!isSave && Object.keys(updateCodeDetailsData).length > 0) {
      setIsSave(0);
      handleClose();
      handleAddEditOpenModal(
        0,
        0,
        updateCodeDetailsData.is_success,
        "",
        updateCodeDetailsData.message
      );
    }
    if (!!isSave && Object.keys(errorData).length > 0) {
      setIsSave(0);
      handleClose();
      handleAddEditOpenModal(0, 0, 0, "", errorData.error);
    }
  }, [saveCodeDetailsData, updateCodeDetailsData, errorData]);

  const valdationForm = () => {
    let valid = true;
    let newErrors = { ...errors };

    if (!state.code || state.code.trim() === "") {
      newErrors.code = "Enter Code";
      valid = false;
    } else {
      newErrors.code = null;
    }

    if (!state.description || state.description.trim() === "") {
      newErrors.description = "Enter Plant Name";
      valid = false;
    } else {
      newErrors.description = null;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const validValue = value.replace(/[^a-zA-Z0-9 ]/g, "");

    setState((prevState) => ({
      ...prevState,
      [name]: validValue,
    }));

    if (/[^a-zA-Z0-9 ]/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Only letters and numbers are allowed.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSave = () => {
    props.refreshProps("saveCodeDetailsData");
    props.refreshProps("updateCodeDetailsData");
    props.refreshProps("errorData");
    if (!valdationForm()) {
      return;
    }
    type === "Add"
      ? saveCodeDetails(`${MDM_CODE}`, state)
      : updateCodeDetails(`${MDM_CODE}${rowId}`, state);
    setIsSave(1);
  };

  const handleClose = (e, reason) => {
    props.refreshProps("saveCodeDetailsData");
    props.refreshProps("updateCodeDetailsData");
    props.refreshProps("errorData");
    setState({});
    setErrors({ code: "", description: "" });
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {type + " " + "Plant" || ""}
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
                Code<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="code"
                name="code"
                value={state.code || ""}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.code}
                helperText={errors.code}
              />
            </Grid>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Plant Name<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="description"
                name="description"
                value={state.description || ""}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.description}
                helperText={errors.description}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} style={gridItemStyle}>
            <div
              style={{
                marginTop: "7px",
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
    saveCodeDetailsData: state?.commonReducer.saveCodeDetailsData,
    updateCodeDetailsData: state?.commonReducer.updateCodeDetailsData,
    errorData: state?.commonReducer.errorData,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    saveCodeDetails: (endPoint, payLoad) =>
      dispatch(callCommonSaveAPI(endPoint, payLoad, "codeDetails")),
    updateCodeDetails: (endPoint, payLoad) =>
      dispatch(callCommonUpdateAPI(endPoint, payLoad, "codeDetails")),
    refreshProps: (title) => dispatch(callCommonRefreshProps(title)),
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(AddEditCodeComponent);
