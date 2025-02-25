import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";

export const fetchProductionData = createAsyncThunk(
  "production/fetchProductionData",
  async ({  report_type, year, month }) => {
    try {
      const query = month
        ? `report_type=${report_type}&month=${month}&year=${year}`
        : `report_type=${report_type}&year=${year}`;
      const response = await apiService.get(`metrics/graph_production/?${query}`);
      return { report_type, data: response.data };
    } catch (error) {
      console.error("Error fetching Production data:", error);
      throw error;
    }
  }
);

const productionSlice = createSlice({
  name: "production",
  initialState: {
    Furnace: [],
    Bending: [],
    AHF: [],
    AssemblyProduction: [],
    BendingProduction: [],
    AHFProduction: [],
    MTDProductivity: [],
    ProductionConsumables: [],
    FurnaceConsumables: [],
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
    builder.addCase(fetchProductionData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProductionData.fulfilled, (state, action) => {
      state.loading = false;
      const { report_type, data } = action.payload;
      if (state.hasOwnProperty(report_type)) {
        state[report_type] = data;
      }
    });
    builder.addCase(fetchProductionData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearSuccessMessage, clearErrorMessage } = productionSlice.actions;
export default productionSlice.reducer;
