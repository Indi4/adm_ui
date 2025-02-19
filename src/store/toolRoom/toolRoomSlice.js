import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiService from "../../services/apiService";

export const getpmToolRoom = createAsyncThunk(
  "toolRoom/getpmToolRoom",
  async ({ report_type, year, month }) => {
    try {
      const query = month
        ? `report_type=${report_type}&month=${month}&year=${year}`
        : `report_type=${report_type}&year=${year}`;
      const response = await apiService.get(`metrics/graph_toolroom/?${query}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Graph data:", error);
      throw error;
    }
  }
);
export const getToollingConsumable = createAsyncThunk(
  "toolRoom/getToollingConsumable",
  async ({ report_type, year, month }) => {
    try {
      const query = month
        ? `report_type=${report_type}&month=${month}&year=${year}`
        : `report_type=${report_type}&year=${year}`;
      const response = await apiService.get(`metrics/graph_toolroom/?${query}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Graph data:", error);
      throw error;
    }
  }
);

const toolRoomSlice = createSlice({
  name: "toolRoom",
  initialState: {
    pmData: [],
    toolingConsumableData: [],
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
    builder.addCase(getpmToolRoom.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getpmToolRoom.fulfilled, (state, action) => {
      state.loading = false;
      state.pmData = action.payload;
    });
    builder.addCase(getpmToolRoom.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(getToollingConsumable.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getToollingConsumable.fulfilled, (state, action) => {
      state.loading = false;
      state.toolingConsumableData = action.payload;
    });
    builder.addCase(getToollingConsumable.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { clearSuccessMessage, clearErrorMessage } = toolRoomSlice.actions;
export default toolRoomSlice.reducer;
