import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiService from "../../services/apiService";

export const majorsafetyGraphs = createAsyncThunk(
  "safety/majorsafetyGraphs",
  async ({ accident_type, year, month }) => {
    try {
      const query = month
        ? `accident_type=${accident_type}&month=${month}&year=${year}`
        : `accident_type=${accident_type}&year=${year}`;
      const response = await apiService.get(
        `metrics/graph_safety?${query}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching Graph data:", error);
      throw error;
    }
  }
);
export const minorsafetyGraph = createAsyncThunk(
  "safety/minorsafetyGraph",
  async ({ accident_type, year, month }) => {
    try {
      const query = month
      ? `accident_type=${accident_type}&month=${month}&year=${year}`
      : `accident_type=${accident_type}&year=${year}`;
      const response = await apiService.get(
        `metrics/graph_safety?${query}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching Graph data:", error);
      throw error;
    }
  }
);

const safetySlice = createSlice({
  name: "safety",
  initialState: {
    minorData: [],
    majorData: [],
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
    builder.addCase(majorsafetyGraphs.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(majorsafetyGraphs.fulfilled, (state, action) => {
      state.loading = false;
      state.majorData = action.payload;
    });
    builder.addCase(majorsafetyGraphs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(minorsafetyGraph.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(minorsafetyGraph.fulfilled, (state, action) => {
      state.loading = false;
      state.minorData = action.payload;
    });
    builder.addCase(minorsafetyGraph.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { clearSuccessMessage, clearErrorMessage } = safetySlice.actions;
export default safetySlice.reducer;
