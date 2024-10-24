import React, { useEffect, useState } from "react";
import { Box, Button, Grid, IconButton, Modal, Typography, CircularProgress, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { callCommonSaveAPI, callCommonRefreshProps } from "../store/action/action";
import { connect } from "react-redux";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    borderRadius: "6",
    boxShadow: "none",
    p: 4,
};

function ModalPopUpComponent(props) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [openModal, setOpenModal] = useState(0);
    const [endPoint, setEndPoint] = useState();
    const [loading, setLoading] = useState(false);
    const { handleOpenModal, open, saveUpload, saveUploadData, callEndPoint, errorData, } = props;
    const [isSuccess, setIsuccess] = useState(0);
    const [isModalError, setIsError] = useState(0);

    useEffect(() => {
        return () => {
            handleClose();
        };
    }, []);

    useEffect(() => {
        if (!!open) {
            setOpenModal(open);
            setEndPoint(callEndPoint);
        } else {
            setOpenModal(0);
        }
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
        if (isSuccess && Object.keys(saveUploadData).length > 0) {
            handleClose();
            setOpenModal(0);
            setIsuccess(0);
            handleOpenModal(0, saveUploadData.is_success, saveUploadData.message);
        }
        setLoading(false); // Stop loader once upload is complete
    }, [saveUploadData]);

    useEffect(() => {
        if (Object.keys(errorData)?.length > 0 && isModalError) {
            setIsError(0);
            toast.error(errorData.error);
        }
        setLoading(false); // Stop loader in case of error
    }, [errorData]);

    const handleSave = () => {
        const formData = new FormData();
        formData.append("filename", selectedFile);
        setIsuccess(1);
        setIsError(1);
        setLoading(true); // Start loader
        saveUpload(endPoint, formData);
    };

    const handleClose = (e, reason) => {
        setSelectedFile(null);
        setOpenModal(0);
        props.refreshProps("saveUploadData");
        props.refreshProps("errorData");
        if (reason === "cancel") handleOpenModal(0, 0);
        setLoading(false); // Ensure loader is stopped on close
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
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ borderBottom: '1px solid #e0e0e0', padding: 2}}>
                        Upload File
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
                        <Grid item xs={12} style={gridItemStyle}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection:"column",
                                    alignItems:"center",
                                    margin: "auto",
                                    outline: "dotted",
                                    width: "70%",
                                    height: "100px",
                                }}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                            >
                                <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: "none", margin:"auto"}}
                                    onChange={handleFileSelect}
                                />
                                <label htmlFor="fileInput" style={{display:"contents"}} >
                                    <center
                                        style={{
                                            marginTop: "20px",
                                            margin: "auto",
                                        }}
                                    >
                                        <center>
                                            <div
                                                style={{
                                                    margin: "10px",
                                                }}
                                            >
                                                <span>Drag and Drop File</span>
                                                <span> or Click</span>
                                            </div>
                                        </center>
                                    </center>
                                </label>
                                {selectedFile && (
                                    <p>
                                        Selected File: {selectedFile.name} ({selectedFile.size}{" "}
                                        bytes)
                                        {loading ? <CircularProgress size={24} /> : null}
                                    </p>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={6} style={gridItemStyle}>
                            <div
                                style={{
                                    marginTop: "7px",
                                    display: "flex",
                                    justifyContent: "right",
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    color="error"
                                    sx={{ borderRadius: "7px", width: "150px" }}
                                    onClick={(event, reason) => handleClose(event, "cancel")}
                                    disabled={loading} // Disable button when loading
                                >
                                    Cancel
                                </Button>
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
                                    disabled={loading} // Disable button when loading
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
}

const gridContainerStyle = {
    marginTop: 10,
};

const gridItemStyle = {
    marginBottom: 10,
};

const mapStatetoProps = (state) => {
    return {
        saveUploadData: state?.saveUploadData,
        errorData: state?.errorData,
    };
};

const mapDispatchtoProps = (dispatch) => {
    return {
        saveUpload: (endPoint, payLoad) => dispatch(callCommonSaveAPI(endPoint, payLoad, "Upload")),
        refreshProps: (title) => dispatch(callCommonRefreshProps(title)),
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ModalPopUpComponent);
