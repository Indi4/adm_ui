import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiService from "../../services/apiService";

export const uploadQualityExcel = createAsyncThunk(
    "upload/uploadQualityExcel",
    async (formData, { rejectWithValue }) => {
      console.log("FormData:", formData.get("file")); // Log the file from FormData
      console.log({formData})
      try {
        const response = await apiService.post("dashboard/dept_quality/", formData,);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || "An error occurred during upload.");
      }
    }
  );

  export const uploadUtilityExcel = createAsyncThunk(
    "upload/uploadUtilityExcel",
    async (formData, { rejectWithValue }) => {
      console.log("FormData:", formData.get("file")); // Log the file from FormData
      console.log({formData})
      try {
        const response = await apiService.post("dashboard/dept_utility/", formData,);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || "An error occurred during upload.");
      }
    }
  );

  export const uploadFinanceExcel = createAsyncThunk(
    "upload/uploadFinanceExcel",
    async (formData, { rejectWithValue }) => {
      console.log("FormData:", formData.get("file")); // Log the file from FormData
      console.log({formData})
      try {
        const response = await apiService.post("dashboard/dept_finance/", formData,);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || "An error occurred during upload.");
      }
    }
  );

  export const uploadHrExcel = createAsyncThunk(
    "upload/uploadHrExcel",
    async (formData, { rejectWithValue }) => {
      console.log("FormData:", formData.get("file")); // Log the file from FormData
      console.log({formData})
      try {
        const response = await apiService.post("dashboard/dept_hr/", formData,);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || "An error occurred during upload.");
      }
    }
  );

  export const uploadSalesExcel = createAsyncThunk(
    "upload/uploadSalesExcel",
    async (formData, { rejectWithValue }) => {
      console.log("FormData:", formData.get("file")); // Log the file from FormData
      console.log({formData})
      try {
        const response = await apiService.post("dashboard/dept_sales/", formData,);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || "An error occurred during upload.");
      }
    }
  );

  export const uploadProductionExcel = createAsyncThunk(
    "upload/uploadProductionExcel",
    async (formData, { rejectWithValue }) => {
      console.log("FormData:", formData.get("file")); // Log the file from FormData
      console.log({formData})
      try {
        const response = await apiService.post("dashboard/dept_production/", formData,);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || "An error occurred during upload.");
      }
    }
  );

  export const uploadSafetyExcel = createAsyncThunk(
    "upload/uploadSafetyExcel",
    async (formData, { rejectWithValue }) => {
      console.log("FormData:", formData.get("file")); // Log the file from FormData
      console.log({formData})
      try {
        const response = await apiService.post("dashboard/dept_safety/", formData,);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || "An error occurred during upload.");
      }
    }
  );
  

const uploadSlice = createSlice({
  name: "upload",
  initialState: {
    safetyData: [],
    qualityData: [],
    utilityData: [],
    financeData: [],
    hrData: [],
    salesData: [],
    productionData: [],
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
    
    builder.addCase(uploadSafetyExcel.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      builder.addCase(uploadSafetyExcel.fulfilled, (state, action) => {
        state.loading = false;
        (state.success = "Excel Uploaded Successfully"),
          (state.safetyData = action.payload);
      })
      builder.addCase(uploadSafetyExcel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

      
      builder.addCase(uploadQualityExcel.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      builder.addCase(uploadQualityExcel.fulfilled, (state, action) => {
        state.loading = false;
        (state.success = "Excel Uploaded Successfully"),
          (state.qualityData = action.payload);
      })
      builder.addCase(uploadQualityExcel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

      
      builder.addCase(uploadFinanceExcel.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      builder.addCase(uploadFinanceExcel.fulfilled, (state, action) => {
        state.loading = false;
        (state.success = "Excel Uploaded Successfully"),
          (state.financeData = action.payload);
      })
      builder.addCase(uploadFinanceExcel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

      
      builder.addCase(uploadHrExcel.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      builder.addCase(uploadHrExcel.fulfilled, (state, action) => {
        state.loading = false;
        (state.success = "Excel Uploaded Successfully"),
          (state.hrData = action.payload);
      })
      builder.addCase(uploadHrExcel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

      
      builder.addCase(uploadProductionExcel.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      builder.addCase(uploadProductionExcel.fulfilled, (state, action) => {
        state.loading = false;
        (state.success = "Excel Uploaded Successfully"),
          (state.productionData = action.payload);
      })
      builder.addCase(uploadProductionExcel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

      
      builder.addCase(uploadSalesExcel.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      builder.addCase(uploadSalesExcel.fulfilled, (state, action) => {
        state.loading = false;
        (state.success = "Excel Uploaded Successfully"),
          (state.salesData = action.payload);
      })
      builder.addCase(uploadSalesExcel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

      
      builder.addCase(uploadUtilityExcel.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      builder.addCase(uploadUtilityExcel.fulfilled, (state, action) => {
        state.loading = false;
        (state.success = "Excel Uploaded Successfully"),
          (state.utilityData = action.payload);
      })
      builder.addCase(uploadUtilityExcel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

  },
});


export const {clearSuccessMessage, clearErrorMessage } = uploadSlice.actions;
export default uploadSlice.reducer;