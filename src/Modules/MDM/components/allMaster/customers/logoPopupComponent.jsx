import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import {
  callCommonSaveAPI,
  callCommonUpdateAPI,
} from "../../../../../store/action/action";
import { MDM_GET_CUSTOMER } from "../../../../endPointConfig";
import config from "../../../../../config";

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

const LogoPopupComponent = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [openModal, setOpenModal] = useState(0);
  const [endPoint, setEndPoint] = useState();
  const {
    handleOpenModal,
    open,
    rowId,
    customerList,
    updateCustomerDetails,
    updateCustomerDetailsData,
    callEndPoint,
  } = props;
  const [isSuccess, setIsuccess] = useState(0);
  const [state, setState] = useState({
    customer_name: null,
    plant_location: null,
    category: null,
    customer_type: null,
    business_type: null,
    company_logo: null,
  });
  useEffect(() => {
    return () => {
      handleClose();
    };
  }, []);

  useEffect(() => {
    if (!!open) {
      setOpenModal(open);
      setEndPoint(callEndPoint);
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
  }, [props.open]);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (isSuccess && Object.keys(updateCustomerDetailsData).length > 0) {
      handleClose();
      setOpenModal(0);
      setIsuccess(0);
      handleOpenModal(
        0,
        updateCustomerDetailsData.is_success,
        updateCustomerDetailsData.message
      );
    }
  }, [updateCustomerDetailsData]);

  const handleSave = () => {
    const formData = new FormData();
    formData.append("customer_name", state.customer_name);
    formData.append("plant_location", state.plant_location);
    formData.append("category", state.category);
    formData.append("company_logo", state.customer_type);
    formData.append("company_logo", state.business_type);
    formData.append("company_logo", selectedFile);
    updateCustomerDetails(`${MDM_GET_CUSTOMER}${rowId}`, formData);
    setIsuccess(1);
  };

  const handleClose = (e, reason) => {
    setSelectedFile(null);
    setOpenModal(0);
    if (reason === "cancel") handleOpenModal(0, 0);
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
            Upload File {rowId}
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
            <Grid item xs={8} style={gridItemStyle}>
              <div
                style={{
                  margin: "20px",
                  outline: "dotted",
                  height: "100px",
                }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                />
                <label htmlFor="fileInput">
                  <center
                    style={{
                      margin: "auto",
                      alignContent: "center",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    <center>
                      <div
                        style={{
                          margin: "10px",
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <span>Drag and Drop File</span>
                        <span> or Click</span>
                        {/* <Link component='button'>Browse</Link> */}
                      </div>
                    </center>
                  </center>
                </label>
                {selectedFile && (
                  <p>
                    Selected File: {selectedFile.name} ({selectedFile.size}{" "}
                    bytes)
                  </p>
                )}
              </div>
            </Grid>
            <Grid item xs={4} style={gridItemStyle}>
              <div
                style={{
                  border: "1px solid grey",
                  margin: "18px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "75%",
                  width: "75%",
                  boxShadow: "5px 5px 5px 0px rgba(0, 0, 0, 0.75)",
                }}
              >
                <img
                  src={`${config.apiUrl}/${state.company_logo}`}
                  alt="Your Logo"
                  height={"100%"}
                  width={"100%"}
                />
              </div>
            </Grid>
            {/* </Grid> */}
            <Grid item xs={6} style={gridItemStyle}>
              <div
                style={{
                  marginTop: "7px",
                  display: "flex",
                  justifyContent: "right",
                }}
              >
                <>
                  <Button
                    variant="outlined"
                    sx={{ borderRadius: "7px", width: "150px" }}
                    onClick={(event, reason) => handleClose(event, "cancel")}
                  >
                    Cancel
                  </Button>
                </>
              </div>
            </Grid>
            <Grid item xs={6} style={gridItemStyle}>
              <div
                style={{
                  marginTop: "7px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "7px",
                    width: "150px",
                    fontWeight: "bold",
                  }}
                  onClick={handleSave}
                >
                  Save
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};
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

export default connect(mapStatetoProps, mapDispatchtoProps)(LogoPopupComponent);
