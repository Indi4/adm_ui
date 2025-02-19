import React, { useEffect, useState } from "react";
import {
  Paper,
  Button,
  Select,
  MenuItem,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Fab,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrorMessage,
  clearSuccessMessage,
  getTodo,
  postTodo,
  updateTodo,
} from "../store/Todo/todoSlice";
import { ToastContainer, toast } from "react-toastify";

export default function TodoList({ type }) {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todo.todos[type]);
  const successMessage = useSelector((state) => state.todo.success);
  const errorMessage = useSelector((state) => state.todo.error);

  const [open, setOpen] = useState(false);
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [formData, setFormData] = useState({
    activity: "",
    person_responsible: "",
    activity_date: "",
    completion_date: "",
    status: "",
  });

  const [formErrors, setFormErrors] = useState({
    activity: "",
    person_responsible: "",
    activity_date: "",
    completion_date: "",
    status: "",
  });

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage, { autoClose: 2000 });
      dispatch(clearSuccessMessage());
    }
    if (errorMessage) {
      toast.error(errorMessage, { autoClose: 2000 });
      dispatch(clearErrorMessage());
    }
  }, [successMessage, errorMessage, dispatch]);

  useEffect(() => {
    if(type){
      dispatch(getTodo({ type }));
    }
  }, [dispatch, type]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.activity) errors.activity = "Activity is required.";
    if (!formData.person_responsible)
      errors.person_responsible = "Person responsible is required.";
    if (!formData.activity_date)
      errors.activity_date = "Activity date is required.";
    if (!formData.completion_date)
      errors.completion_date = "Completion date is required.";
    if (!formData.status) errors.status = "Status is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  const handleAdd = () => {
    if (!validateForm()) {
      return; // Stop if the form is invalid
    }

    // Dispatch actions to add todo
    dispatch(postTodo({ formData, type }));
    dispatch(getTodo({ type }));

    // Reset form and errors
    setFormData({
      activity: "",
      person_responsible: "",
      activity_date: "",
      completion_date: "",
      status: "",
    });
    setFormErrors({});
    handleClose();
  };

  const getStatusButtonStyle = (status) => {
    const baseStyle = {
      border: "2px solid",
      fontSize: "12px",
      padding: "10px 20px",
      cursor: "pointer",
      borderRadius: "10px",
      fontWeight: "bold",
      animation: "blink 3s infinite alternate",
      transition: "all 0.3s ease",
    };

    const colors = {
      PENDING: {
        borderColor: "#FFA500",
        backgroundColor: "#FFF8E1",
        color: "#FF8C00",
      },
      IN_PROGRESS: {
        borderColor: "#2196F3",
        backgroundColor: "#E3F2FD",
        color: "#0D47A1",
      },
      COMPLETED: {
        borderColor: "#4CAF50",
        backgroundColor: "#E8F5E9",
        color: "#2E7D32",
      },
      ON_HOLD: {
        borderColor: "#FF5722",
        backgroundColor: "#FFEBEE",
        color: "#BF360C",
      },
      DELAYED: {
        borderColor: "#E91E63",
        backgroundColor: "#FCE4EC",
        color: "#880E4F",
      },
      "WAITING FOR INPUT": {
        borderColor: "#9C27B0",
        backgroundColor: "#F3E5F5",
        color: "#6A1B9A",
      },
      REOPENED: {
        borderColor: "#FFC107",
        backgroundColor: "#FFFDE7",
        color: "#FF6F00",
      },
      UNDER_REVIEW: {
        borderColor: "#3F51B5",
        backgroundColor: "#E8EAF6",
        color: "#1A237E",
      },
      CANCELLED: {
        borderColor: "#F44336",
        backgroundColor: "#FFEBEE",
        color: "#B71C1C",
      },
    };

    return { ...baseStyle, ...colors[status] };
  };

  const buttonStyle = {
    border: "2px solid #04c0f2",
    backgroundColor: "rgb(4 192 242 / 12%)",
    color: "#1b51a9",
    fontSize: "12px",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "10px",
    fontWeight: "bold",
    animation: "blink 3s infinite alternate",
    transition: "all 0.3s ease",
  };

  const blink = `
    @keyframes blink {
      0% { opacity: 0; }
      50% { opacity: 0.5; }
      100% { opacity: 1; }
    }
  `;

  const handleStatusDialogOpen = (row) => {
    setSelectedRow(row);
    setNewStatus(row.status);
    setStatusDialogOpen(true);
  };

  const handleStatusDialogClose = () => {
    setStatusDialogOpen(false);
    setSelectedRow(null);
    setNewStatus("");
  };

  const handleStatusUpdate = () => {
    if (selectedRow) {
      dispatch(
        updateTodo({
          id: selectedRow.id,
          status: newStatus,
          person_responsible: selectedRow.person_responsible,
          type,
          activity: selectedRow.activity,
        })
      );
      setStatusDialogOpen(false);
      setSelectedRow(null);
      dispatch(getTodo({ type })); // Refresh the list
    }
  };

  return (
    <Box sx={{ padding: "20px", marginTop: "5px" }}>
      <ToastContainer />
      
      <Paper
        sx={{
          // padding: "20px",
          // marginTop: "20px",
          position: "relative",
        }}
      >
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          sx={{
            position: "absolute",
            top: -30,
            right: 16,
          }}
          onClick={handleOpen}
        >
          +
        </Fab>
        <TableContainer
          sx={{
            maxHeight: 300,
            overflowY: "auto",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr. No.</TableCell>
                <TableCell>Activity</TableCell>
                <TableCell>Person Responsible</TableCell>
                <TableCell>Activity Date</TableCell>
                <TableCell>Completion Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todoData &&
                todoData.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.activity}</TableCell>
                    <TableCell>{row.person_responsible}</TableCell>
                    <TableCell>{row.activity_date}</TableCell>
                    <TableCell>{row.completion_date}</TableCell>
                    <TableCell style={{ textAlign: "center", display:"flex" }}>
                      <button
                        style={getStatusButtonStyle(row.status)}
                        onClick={() => handleStatusDialogOpen(row)}
                      >
                        {row.status}
                      </button>
                      <style>{blink}</style>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Dialog
        open={statusDialogOpen}
        onClose={handleStatusDialogClose}
        fullWidth
      >
        <DialogTitle>Update Status</DialogTitle>
        <DialogContent>
          <Select
            fullWidth
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <MenuItem value="PENDING">Pending</MenuItem>
            <MenuItem value="IN_PROGRESS">In Progress</MenuItem>
            <MenuItem value="COMPLETED">Completed</MenuItem>
            <MenuItem value="ON_HOLD">On Hold</MenuItem>
            <MenuItem value="DELAYED">Delayed</MenuItem>
            <MenuItem value="WAITING FOR INPUT">Waiting For Input</MenuItem>
            <MenuItem value="REOPENED">Reopened</MenuItem>
            <MenuItem value="UNDER_REVIEW">Under Review</MenuItem>
            <MenuItem value="CANCELLED">Cancelled</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleStatusDialogClose}>Cancel</Button>
          <Button
            onClick={handleStatusUpdate}
            variant="contained"
            color="primary"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="activity"
            label="Activity"
            type="text"
            fullWidth
            value={formData.activity}
            onChange={handleChange}
            error={!!formErrors.activity}
            helperText={formErrors.activity}
          />
          <TextField
            margin="dense"
            name="person_responsible"
            label="Person Responsible"
            type="text"
            fullWidth
            value={formData.person_responsible}
            onChange={handleChange}
            error={!!formErrors.person_responsible}
            helperText={formErrors.person_responsible}
          />
          <TextField
            margin="dense"
            name="activity_date"
            label="Activity Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formData.activity_date}
            onChange={handleChange}
            error={!!formErrors.activity_date}
            helperText={formErrors.activity_date}
          />
          <TextField
            margin="dense"
            name="completion_date"
            label="Completion Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formData.completion_date}
            onChange={handleChange}
            error={!!formErrors.completion_date}
            helperText={formErrors.completion_date}
          />
          <Select
            name="status"
            value={formData.status}
            onChange={handleChange}
            displayEmpty
            fullWidth
            margin="dense"
            error={!!formErrors.status}
          >
            <MenuItem value="" disabled>
              Select Status
            </MenuItem>
            <MenuItem value="PENDING">Pending</MenuItem>
            <MenuItem value="IN_PROGRESS">In Progress</MenuItem>
            <MenuItem value="COMPLETED">Completed</MenuItem>
            <MenuItem value="ON_HOLD">On Hold</MenuItem>
            <MenuItem value="DELAYED">Delayed</MenuItem>
            <MenuItem value="WAITING FOR INPUT">Waiting For Input</MenuItem>
            <MenuItem value="REOPENED">Reopened</MenuItem>
            <MenuItem value="UNDER_REVIEW">Under Review</MenuItem>
            <MenuItem value="CANCELLED">Cancelled</MenuItem>
          </Select>
          {formErrors.status && (
            <p style={{ color: "red", fontSize: "0.8rem" }}>
              {formErrors.status}
            </p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
