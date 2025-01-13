import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiService from "../../services/apiService";


export const qualityGraphs = createAsyncThunk(
  "quality/qualityGraphs",
  async ({ type, year, month}) => {
    try {
      const query = month
        ? `type=${type}&month=${month}&year=${year}`
        : `type=${type}&year=${year}`;
      const response = await apiService.get(
        `dashboard/filter_power/?${query}`
      );
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
    qualityGraphsData: [],
    error: "",
    success:"",
    loading: false,
  },
  reducers: {
    clearSuccessMessage:(state)=>{
      state.success = ""
    },
    clearErrorMessage: (state)=>{
      state.error = ""
    }
  },
  extraReducers: (builder) => {
    builder.addCase(qualityGraphs.pending, (state,action)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(qualityGraphs.fulfilled, (state,action) => {
        state.loading = false;
        state.qualityGraphsData = action.payload
      })
      .addCase(qualityGraphs.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.error.message;
      })
  } 
});

export const { clearSuccessMessage, clearErrorMessage } = qualitySlice.actions;
export default qualitySlice.reducer;