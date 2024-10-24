import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { Button, TextField, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { callCommonDeleteAPI } from '../store/action/action'
import { ToastContainer, toast } from "react-toastify";

function DeleteModalComponent(props) {
    // const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal] = useState(0)
    const [endPoint, setEndPoint] = useState("")
    const { handleDeleteModal, openDelete, rowId, callEndPoint, deleteData, deleteRecord, errorData } = props
    const [reason, setReason] = useState("")
    const [isSuccess, setIsuccess] = useState(0)

    useEffect(() => {
        if (!!openDelete) {
            setOpenModal(openDelete)
            setEndPoint(callEndPoint)
        }
        else
            setOpenModal(0)
    }, [openDelete])

    useEffect(() => {
        if (isSuccess && Object.keys(deleteData).length > 0) {
            handleClose()
            setOpenModal(0)
            setIsuccess(0)
            handleDeleteModal(0, 0, deleteData.is_success, deleteData.message)
        }
    }, [deleteData])

    useEffect(() => {
        if (Object.keys(errorData?.length > 0).length > 0) {
            toast.error(errorData.error)
        }
    }, [errorData])

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsuccess(1)
        deleteRecord(`${endPoint}${rowId}`, { reason: reason })
    };

    const handleClose = () => {
        handleDeleteModal(0, 0, 0)
    };

    return (
        <React.Fragment>
            <ToastContainer />
            <Dialog
                open={openModal}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (e) => handleSubmit(e),
                }}
            >
                <DialogTitle>DELETE</DialogTitle>
                <DialogContent>
                    <strong> Are you sure you want to delete the record?</strong>
                    {/* <DialogContentText>
                        Reason
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="reason"
                        name="reason"
                        label="Reason For Deletion"
                        type="reason"
                        fullWidth
                        variant="standard"
                        onChange={(e) => handleChangeEvent(e)}
                    /> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit}>YES</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
const mapStatetoProps = (state) => {
    return {
        deleteData: state.deleteData,
        errorData: state.errorData
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        deleteRecord: (endPoint, payLoad) => dispatch(callCommonDeleteAPI(endPoint, payLoad))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(DeleteModalComponent)
