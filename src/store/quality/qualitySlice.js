import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiService from "../../services/apiService";

export const qualityGraphs = createAsyncThunk(
  "quality/qualityGraphs",
  async ({ type, year, month }) => {
    try {
      const query = month
        ? `type=${type}&month=${month}&year=${year}`
        : `type=${type}&year=${year}`;
      const response = await apiService.get(`dashboard/filter_power/?${query}`);
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
    ppm: [],
    copq: [],
    sales: [],
    purchase: [],
    manpower: [],
    direct_manpower: [],
    indirect_manpower: [],
    process_scrap: [],
    design_scrap: [],
    power_cost: [],
    power_units: [],
    consumable_costs: [],
    plan_vs_act: [],
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
        switch (action.payload.type) {
          case "ppm":
            state.ppm = action.payload;
            break;
          case "copq":
            state.copq = action.payload;
            break;
          case "sales":
            state.sales = action.payload;
            break;
          case "purchase":
            state.purchase = action.payload;
            break;
          case "manpower":
            state.manpower = action.payload;
            break;
          case "direct_manpower":
            state.direct_manpower = action.payload;
            break;
          case "indirect_manpower":
            state.indirect_manpower = action.payload;
            break;
          case "process_scrap":
            state.process_scrap = action.payload;
            break;
          case "design_scrap":
            state.design_scrap = action.payload;
            break;
          case "power_cost":
            state.power_cost = action.payload;
            break;
          case "power_units":
            state.power_units = action.payload;
            break;
          case "consumable_costs":
            state.consumable_costs = action.payload;
            break;
          case "plan_vs_act":
            state.plan_vs_act = action.payload;
            break;
          default:
            state.error = action.error("Getting data of invalid type")
        }
      })
      .addCase(qualityGraphs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSuccessMessage, clearErrorMessage } = qualitySlice.actions;
export default qualitySlice.reducer;
