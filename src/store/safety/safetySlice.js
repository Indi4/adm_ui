import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiService from "../../services/apiService";


export const safetyGraphs = createAsyncThunk(
  "safety/safetyGraphs",
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

const safetySlice = createSlice({
  name: "safety",
  initialState: {
   
    minor: [],
    major: [],
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
  },
});

export const { clearSuccessMessage, clearErrorMessage } = safetySlice.actions;
export default safetySlice.reducer;
