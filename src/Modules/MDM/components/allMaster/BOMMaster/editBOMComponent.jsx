import React, { useEffect, useState } from "react";

import {
  Autocomplete,
  Box,
  Button,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { callCommonUpdateAPI } from "../../../../../store/action/action";
import { connect } from "react-redux";
import { MDM_GET_BOMDETAILS } from "../../../../endPointConfig";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  borderRadius: "6",
  boxShadow: "none",
  p: 4,
};
function EditBOMComponent(props) {
  const [openModal, setOpenModal] = useState(0);
  const [endPoint, setEndPoint] = useState();
  const {
    handleEditOpenModal,
    openEdit,
    rowId,
    BOMList,
    updateBomDetails,
    updateBomDetailsData,
  } = props;
  const [isSave, setIsSave] = useState(0);
  const [state, setState] = useState({});

  const [errors, setErrors] = useState({
    description: null,
    storage_location: null,
    unrestricted_stock: null,
  });

  useEffect(() => {
    if (!!openEdit) {
      setOpenModal(openEdit);
      if (!!BOMList && BOMList.length > 0) {
        let result = BOMList.filter((data) => data.id === rowId);
        if (result && result.length > 0) {
          let rowData = result[0];
          setState(rowData);
        }
      }
    } else setOpenModal(0);
  }, [openEdit]);

  useEffect(() => {
    if (!!isSave && Object.keys(updateBomDetailsData).length > 0) {
      setIsSave(0);
      handleClose();
      handleEditOpenModal(
        0,
        0,
        updateBomDetailsData.is_success,
        updateBomDetailsData.message
      );
    }
  }, [updateBomDetailsData]);

  const valdationForm = () => {
    let valid = true;
    let newErrors = { ...errors };
    if (state.description === null || state.description === "") {
      newErrors.description = "Enter Material Description";
      valid = false;
    } else {
      newErrors.description = null;
    }
    if (state.storage_location === null || state.storage_location === "") {
      newErrors.storage_location = "Enter Storage Location";
      valid = false;
    } else {
      newErrors.storage_location = null;
    }
    if (state.unrestricted_stock === null || state.unrestricted_stock === "") {
      newErrors.unrestricted_stock = "Enter Unrestricted Stock";
      valid = false;
    } else {
      newErrors.unrestricted_stock = null;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateBomDetails(`${MDM_GET_BOMDETAILS}${rowId}`, state);
    setIsSave(1);
  };

  const handleClose = (e, reason) => {
    setState({});
    if (reason === "cancel") handleEditOpenModal(0, 0, 0);
  };

  return (
    <>
      <ToastContainer />
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit BOM Details
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
              <InputLabel id="category-label">Plant</InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="plant_id"
                name="plant_id"
                value={state.plant_id}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.plant_id}
                helperText={errors.plant_id}
              />
            </Grid>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">FG Code</InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="fg_code"
                name="fg_code"
                value={state.fg_code}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.fg_code}
                helperText={errors.fg_code}
              />
            </Grid>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">WIP Unpainted Wheels</InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="wip_unpainted_wheel"
                name="wip_unpainted_wheel"
                value={state.wip_unpainted_wheel}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.wip_unpainted_wheel}
                helperText={errors.wip_unpainted_wheel}
              />
            </Grid>

            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Material Code Rim1<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="material_code_rim1"
                name="material_code_rim1"
                value={state.material_code_rim1}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.material_code_rim1}
                helperText={errors.material_code_rim1}
              />
            </Grid>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Material Description Rim1<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="material_description_rim1"
                name="material_description_rim1"
                value={state.material_description_rim1}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.material_description_rim1}
                helperText={errors.material_description_rim1}
              />
            </Grid>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Material Wt Rim1<span>*</span>
              </InputLabel>
              <TextField
                type="number"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="material_weight_rim1"
                name="material_weight_rim1"
                value={state.material_weight_rim1}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.material_weight_rim1}
                helperText={errors.material_weight_rim1}
              />
            </Grid>

            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Material Code Rim2<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="material_code_rim2"
                name="material_code_rim2"
                value={state.material_code_rim2}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Material Description Rim2<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="material_description_rim2"
                name="material_description_rim2"
                value={state.material_description_rim2}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Material Wt Rim2<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="material_weight_rim2"
                name="material_weight_rim2"
                value={state.material_weight_rim2}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>

            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                WIP Rim Part<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="wip_rim_part"
                name="wip_rim_part"
                value={state.wip_rim_part}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>

            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                WIP Rim Blanks<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="wip_rim_blanks"
                name="wip_rim_blanks"
                value={state.wip_rim_blanks}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>

            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Material Code Disc1<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="material_code_disc1"
                name="material_code_disc1"
                value={state.material_code_disc1}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Material Description Disc1<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="material_description_disc1"
                name="material_description_disc1"
                value={state.material_description_disc1}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Material Weight Disc1<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="material_weight_disc1"
                name="material_weight_disc1"
                value={state.material_weight_disc1}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>

            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Material Code Disc2<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="material_code_disc2"
                name="material_code_disc2"
                onChange={(e) => handleInputChange(e)}
                value={state.material_code_disc2}
              />
            </Grid>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Material Description Disc2<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="material_description_disc2"
                name="material_description_disc2"
                value={state.material_description_disc2}
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Material Wt Disc2<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="material_weight_disc2"
                name="material_weight_disc2"
                value={state.material_weight_disc2}
              />
            </Grid>
          </Grid>
          <div
            style={{
              marginTop: "7px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Button
                variant="contained"
                sx={{ borderRadius: "7px", width: "150px", margin: "10px" }}
                onClick={(e) => handleClose(e, "cancel")}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{ borderRadius: "7px", width: "150px" }}
                onClick={handleSave}
              >
                Save
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

const gridContainerStyle = {
  marginTop: 10,
};

const mapStatetoProps = (state) => {
  return {
    updateBomDetailsData: state?.updateBomDetailsData,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    updateBomDetails: (endPoint, payLoad) =>
      dispatch(callCommonUpdateAPI(endPoint, payLoad, "bomDetails")),
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(EditBOMComponent);
