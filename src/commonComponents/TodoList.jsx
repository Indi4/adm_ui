import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const columns = [
  { field: 'id', headerName: 'Sr. No.', width: 90 },
  { field: 'activity', headerName: 'Activity', width: 150 },
  { field: 'personResponsible', headerName: 'Person Responsible', width: 200 },
  { field: 'activityDate', headerName: 'Activity Date', width: 150 },
  { field: 'completionDate', headerName: 'Completion Date', width: 150 },
  { field: 'status', headerName: 'Status', width: 120 },
];

export default function TodoList() {
  const [rows, setRows] = React.useState([
    { id: 1, activity: 'ABC', personResponsible: 'XYZ', activityDate: '10/01/25', completionDate: '10/01/25', status: 'Open' },
    { id: 2, activity: 'ABC', personResponsible: 'XYZ', activityDate: '10/01/25', completionDate: '10/01/25', status: 'Close' },
    { id: 3, activity: 'ABC', personResponsible: 'XYZ', activityDate: '10/01/25', completionDate: '10/01/25', status: 'Close' },
  ]);

  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    activity: '',
    personResponsible: '',
    activityDate: '',
    completionDate: '',
    status: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        id: prevRows.length + 1,
        ...formData,
      },
    ]);
    setFormData({
      activity: '',
      personResponsible: '',
      activityDate: '',
      completionDate: '',
      status: '',
    });
    handleClose();
  };

  return (
    <Box sx={{ padding: "20px",
        marginTop: "20px",}}>
      <h2>To Do List</h2>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
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
      <Paper sx={{   padding: "20px",
          height: "680px", // Ensure consistent card height
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: "40px", }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
          sx={{
            border: 0,
           
            '& .MuiDataGrid-columnHeader': { fontWeight: 'bold' },
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
            name="personResponsible"
            label="Person Responsible"
            type="text"
            fullWidth
            value={formData.personResponsible}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="activityDate"
            label="Activity Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formData.activityDate}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="completionDate"
            label="Completion Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formData.completionDate}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="status"
            label="Status"
            type="text"
            fullWidth
            value={formData.status}
            onChange={handleChange}
          />
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
