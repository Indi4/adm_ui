import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiService from "../../services/apiService";


export const HRGraphs = createAsyncThunk(
  "quality/HRGraphs",
  async ({ type, year, month }) => {
    try {
      const query = month
        ? `report_type=${type}&month=${month}&year=${year}`
        : `report_type=${type}&year=${year}`;
      const response = await apiService.get(`metrics/graph_hr/?${query}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Graph data:", error);
      throw error;
    }
  }
);

export const qualityGraphs = createAsyncThunk(
  "quality/qualityGraphs",
  async ({ type, year, month }) => {
    try {
      const query = month
        ? `report_type=${type}&month=${month}&year=${year}`
        : `report_type=${type}&year=${year}`;
      const response = await apiService.get(`metrics/graph_quality/?${query}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Graph data:", error);
      throw error;
    }
  }
);

export const safetyGraphs = createAsyncThunk(
  "quality/safetyGraphs",
  async ({ type, year, month }) => {
    try {
      const query = month
        ? `type=${type}&month=${month}&year=${year}`
        : `type=${type}&year=${year}`;
      const response = await apiService.get(`dashboard/filter_safety/?${query}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Graph data:", error);
      throw error;
    }
  }
);


export const storeGraphs = createAsyncThunk(
  "quality/storeGraphs",
  async ({ type, year, month }) => {
    try {
      const query = month
        ? `report_type=${type}&month=${month}&year=${year}`
        : `report_type=${type}&year=${year}`;
      const response = await apiService.get(`metrics/graph_store/?${query}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Graph data:", error);
      throw error;
    }
  }
);

const qualitySlice = createSlice({
  name: "quality",
  initialState: {
    qualityData:{
      CustomerPPM: null,
      CustomerComplaints: null,
      Kaizen: null,
      COPQ: null,
      SupplierPPM: null,
      LineGenerationComplaints: null,
      PlannedRework: null
    },
    minor: [],
    major: [],
    HRGraphsData:{
      headcount: null,
      mpcost: null,
    },
    storeData:{
      grnreport: null,
      storeinventory: null,
      dailypurchasereport: null
    },
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
    builder
      .addCase(qualityGraphs.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(qualityGraphs.fulfilled, (state, action) => {
        state.loading = false;
        const {type} = action.meta.arg
        state.qualityData[type] = action.payload
      })
      .addCase(qualityGraphs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(storeGraphs.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(storeGraphs.fulfilled, (state, action) => {
        state.loading = false;
        const {type} = action.meta.arg
        state.storeData[type] = action.payload
      })
      .addCase(storeGraphs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

      builder
      .addCase(safetyGraphs.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(safetyGraphs.fulfilled, (state, action) => {
        state.loading = false;
        switch (action.payload.type) {
          case "minor":
            state.minor = action.payload;
            break;
          case "major":
            state.major = action.payload;
            break;
          default:
            state.error = action.error("Getting data of invalid type")
        }
      })
      .addCase(safetyGraphs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

      builder
      .addCase(HRGraphs.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(HRGraphs.fulfilled, (state, action) => {
        state.loading = false;
        const {type} = action.meta.arg;
        state.HRGraphsData[type] = action.payload
      })
      .addCase(HRGraphs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSuccessMessage, clearErrorMessage } = qualitySlice.actions;
export default qualitySlice.reducer;
