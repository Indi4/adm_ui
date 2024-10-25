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
import { MDM_GET_CUSTOMER } from "../../../../endPointConfig";

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

function EditCustomerComponent(props) {
  const [openModal, setOpenModal] = useState(0);
  const [endPoint, setEndPoint] = useState();
  const {
    handleEditOpenModal,
    openEdit,
    categoryList,
    rowId,
    customerList,
    updateCustomerDetails,
    updateCustomerDetailsData,
  } = props;
  const [isSave, setIsSave] = useState(0);
  const [state, setState] = useState({
    customer_name: null,
    plant_location: null,
    category: null,
    customer_type: null,
    business_type: null,
  });

  const [errors, setErrors] = useState({
    customer_name: null,
    plant_location: null,
    category: null,
    customer_type: null,
    business_type: null,
  });

  useEffect(() => {
    if (!!openEdit) {
      setOpenModal(openEdit);
      if (!!customerList && customerList.length > 0) {
        let result = customerList.filter(
          (data) => data.customer_code === rowId
        );
        if (result && result.length > 0) {
          let rowData = result[0];

          setState(rowData);
        }
      }
    } else setOpenModal(0);
  }, [openEdit]);

  useEffect(() => {
    if (!!isSave && Object.keys(props.updateCustomerDetailsData).length > 0) {
      setIsSave(0);
      handleClose();
      handleEditOpenModal(
        0,
        0,
        props.updateCustomerDetailsData.is_success,
        updateCustomerDetailsData.message
      );
    }
  }, [updateCustomerDetailsData]);

  const valdationForm = () => {
    let valid = true;
    let newErrors = { ...errors };
    if (state.customer_name === null || state.customer_name === "") {
      newErrors.customer_name = "Enter Customer Name";
      valid = false;
    } else {
      newErrors.customer_name = null;
    }
    if (state.plant_location === null || state.plant_location === "") {
      newErrors.plant_location = "Enter Plant Location ";
      valid = false;
    } else {
      newErrors.plant_location = null;
    }
    if (state.category === null || state.category === "") {
      newErrors.category = "Select Category";
      valid = false;
    } else {
      newErrors.category = null;
    }
    if (state.customer_type === null || state.customer_type === "") {
      newErrors.customer_type = "Enter Customer Type";
      valid = false;
    } else {
      newErrors.customer_type = null;
    }
    if (state.business_type === null || state.business_type === "") {
      newErrors.business_type = "Enter Buisness Type";
      valid = false;
    } else {
      newErrors.business_type = null;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };
  const handleSave = () => {
    if (!valdationForm()) {
      return;
    }
    const payLoad = {
      customer_name: state.customer_name,
      plant_location: state.plant_location,
      category: state.category,
      customer_type: state.customer_type,
      business_type: state.business_type,
    };
    updateCustomerDetails(`${MDM_GET_CUSTOMER}${rowId}`, payLoad);
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
            Edit Customer
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
            <Grid item xs={6}>
              <InputLabel id="category-label">Customer Code</InputLabel>
              <InputLabel id="category-label">
                <strong>{state.customer_code}</strong>
              </InputLabel>
            </Grid>

            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Customer Name<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="customer_name"
                name="customer_name"
                value={state.customer_name}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.customer_name}
                helperText={errors.customer_name}
              />
            </Grid>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Plant Location<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="plant_location"
                name="plant_location"
                value={state.plant_location}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.plant_location}
                helperText={errors.plant_location}
              />
            </Grid>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Category<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="category"
                name="category"
                value={state.category}
                onChange={(e) => handleInputChange(e)}
                select
              >
                {categoryList.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Customer Type<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="customer_type"
                name="customer_type"
                value={state.customer_type}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.customer_type}
                helperText={errors.customer_type}
              />
            </Grid>
            <Grid item xs={6} marginTop={1}>
              <InputLabel id="category-label">
                Business Type<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="business_type"
                name="business_type"
                value={state.business_type || ""}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.business_type}
                helperText={errors.business_type}
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

const gridItemStyle = {
  marginBottom: 10,
};

const mapStatetoProps = (state) => {
  return {
    updateCustomerDetailsData: state.product?.updateCustomerDetailsData,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    updateCustomerDetails: (endPoint, payLoad) =>
      dispatch(callCommonUpdateAPI(endPoint, payLoad, "customerDetails")),
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(EditCustomerComponent);
