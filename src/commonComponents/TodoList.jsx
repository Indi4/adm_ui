import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrorMessage,
  clearSuccessMessage,
  // getFinanceTodo,
  // getHRTodo,
  // getQualityTodo,
  // getSafetyTodo,
  getTodo,
  // getUtilityTodo,
  postTodo,
} from "../store/Todo/todoSlice";
import { getTabId } from "@mui/lab";
import { ToastContainer, toast } from "react-toastify";

const columns = [
  { field: "id", headerName: "Sr. No.", width: 90 },
  { field: "activity", headerName: "Activity", width: 150 },
  { field: "person_responsible", headerName: "Person Responsible", width: 200 },
  { field: "activity_date", headerName: "Activity Date", width: 150 },
  { field: "completion_date", headerName: "Completion Date", width: 150 },
  { field: "status", headerName: "Status", width: 120 },
];

export default function TodoList({ type }) {
  console.log(type)
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todo.todos[type]);
  const successMessage = useSelector((state) => state.todo.success);
  const errorMessage = useSelector((state) => state.todo.error);
  // console.log()
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    activity: "",
    person_responsible: "",
    activity_date: "",
    completion_date: "",
    status: "",
  });
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage, { autoClose: 2000 });
      dispatch(clearSuccessMessage)
    }
    if (errorMessage) {
      toast.error(errorMessage, { autoClose: 2000 });
      dispatch(clearErrorMessage)
    }
  }, [successMessage, errorMessage]);
  useEffect(() => {
    dispatch(getTodo({type}));
    // let action;
    // switch (type) {
    //   case "safety":
    //     action = getSafetyTodo;
    //     break;
    //   case "quality":
    //     action = getQualityTodo;
    //     break;
    //   case "hr":
    //     action = getHRTodo;
    //     break;
    //   case "finance":
    //     action = getFinanceTodo;
    //     break;
    //   case "utility":
    //     action = getUtilityTodo;
    //     break;
    //   default:
    //     console.error("Invalid type. Cannot determine Todo Page.");
    //     return;
    
  }, [dispatch, type]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    dispatch(postTodo({ formData, type }));
    dispatch(getTodo({type}))
    setFormData({
      activity: "",
      person_responsible: "",
      activity_date: "",
      completion_date: "",
      status: "",
    });
    handleClose();
  };

  return (
    <Box sx={{ padding: "20px", marginTop: "20px" }}>
      <ToastContainer/>
      {/* <h2>To Do List</h2> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Box>
          <Select defaultValue="Year" size="small" sx={{ width: 100, marginRight: 2 }}>
            <MenuItem value="Year">Year</MenuItem>
            <MenuItem value="Month">Month</MenuItem>
            <MenuItem value="Daily">Daily</MenuItem>
          </Select>
        </Box>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add
        </Button>
      </Box>
      <Paper
        sx={{
          padding: "20px",
          height: "700px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        <DataGrid
          rows={todoData || []}
          columns={columns}
          pageSizeOptions={10}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 10 } },
          }}
          sx={{
            border: 0,
            "& .MuiDataGrid-columnHeader": { fontWeight: "bold" },
          }}
        />
      </Paper>
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
          />
          <TextField
            margin="dense"
            name="person_responsible"
            label="Person Responsible"
            type="text"
            fullWidth
            value={formData.person_responsible}
            onChange={handleChange}
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
          />
          <Select
            name="status"
            value={formData.status}
            onChange={handleChange}
            displayEmpty
            fullWidth
            margin="dense"
          >
            <MenuItem value="" disabled>
              Select Status
            </MenuItem>
            <MenuItem value="PENDING">Pending</MenuItem>
            <MenuItem value="IN_PROGRESS">In Progress</MenuItem>
            <MenuItem value="COMPLETED">Completed</MenuItem>
            <MenuItem value="ON_HOLD">On Hold</MenuItem>
            <MenuItem value="DELAYED">Delayed</MenuItem>
            <MenuItem value="WAITING_FOR_INPUT">Waiting For Input</MenuItem>
            <MenuItem value="REOPENED">Reopened</MenuItem>
            <MenuItem value="UNDER_REVIEW">Under Review</MenuItem>
            <MenuItem value="CANCELLED">Cancelled</MenuItem>
          </Select>
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
