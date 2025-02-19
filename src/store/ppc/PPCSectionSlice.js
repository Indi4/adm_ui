import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";

export const fetchPPCData = createAsyncThunk(
  "ppc/fetchPPCData",
  async ({ report_type, year, month }) => {
    try {
      const query = month
        ? `report_type=${report_type}&month=${month}&year=${year}`
        : `report_type=${report_type}&year=${year}`;
      const response = await apiService.get(`metrics/graph_ppc/?${query}`);
      return { report_type, data: response.data };
    } catch (error) {
      console.error("Error fetching PPC data:", error);
      throw error;
    }
  }
);

const ppcSlice = createSlice({
  name: "ppc",
  initialState: {
    DeliveryPerformanceDOM: [],
    InvoiceReport: [],
    NoOfTrips: [],
    DomesticFreight: [],
    DomesticSaleInLakh: [],
    ExportSaleInLakh: [],
    TotalSaleInLakh: [],
    GRNReport: [],
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
    builder.addCase(fetchPPCData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPPCData.fulfilled, (state, action) => {
      state.loading = false;
      const { report_type, data } = action.payload;
      if (state.hasOwnProperty(report_type)) {
        state[report_type] = data;
      }
    });
    builder.addCase(fetchPPCData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearSuccessMessage, clearErrorMessage } = ppcSlice.actions;
export default ppcSlice.reducer;
