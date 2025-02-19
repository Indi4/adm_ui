import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";

export const fetchMaintenanceData = createAsyncThunk(
  "maintenance/fetchMaintenanceData",
  async ({ report_type, year, month }) => {
    try {
      const query = month
        ? `report_type=${report_type}&month=${month}&year=${year}`
        : `report_type=${report_type}&year=${year}`;
      const response = await apiService.get(
        `metrics/graph_maintainces/?${query}`
      );
      return { report_type, data: response.data };
    } catch (error) {
      console.error("Error fetching Maintenance data:", error);
      throw error;
    }
  }
);

const maintenanceSlice = createSlice({
  name: "maintenance",
  initialState: {
    ComplinityReport: [],
    BreakdownIncidentVsCloser: [],
    MTBFHrs: [],
    MTTRInHrs: [],
    PMPlanVSActual: [],
    error: "",
    success: "",
    loading: false,
  },
  reducers: {
    clearSuccessMessage: (state) => {
      state.success = "";
    },
    clearErrorMessage: (state) => {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMaintenanceData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchMaintenanceData.fulfilled, (state, action) => {
      state.loading = false;
      const { report_type, data } = action.payload;
      if (state.hasOwnProperty(report_type)) {
        state[report_type] = data;
      }
    });
    builder.addCase(fetchMaintenanceData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearSuccessMessage, clearErrorMessage } = maintenanceSlice.actions;
export default maintenanceSlice.reducer;
