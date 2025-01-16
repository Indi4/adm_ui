import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "./../../services/apiService";

export const getDashboardMainData = createAsyncThunk(
  "dashboardMain/getDashboardMainData",
  async () => {
    try {
      const response = await apiService.get("dashboard/data/");
      if (
        response.status === 400 ||
        response.status === 500 ||
        response.status === 404
      )
        throw new Error(response.error);
      else {
        return response.data;
      }
    } catch (error) {
      console.log("Error while Sending Mail", error);
      throw error;
    }
  }
);

const dashboardDetailSlice = createSlice({
  name: "dashboardMain",
  initialState: {
    dashboardDetail: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSuccessMessage: (state) => {
      state.success = "";
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDashboardMainData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getDashboardMainData.fulfilled, (state, action) => {
      state.loading = false;
      state.dashboardDetail = action.payload;
    });
    builder.addCase(getDashboardMainData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});
export const { clearSuccessMessage } = dashboardDetailSlice.actions;
export default dashboardDetailSlice.reducer;