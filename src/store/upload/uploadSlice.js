import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiService from "../../services/apiService";

export const uploadQualityExcel = createAsyncThunk(
    "upload/uploadQualityExcel",
    async (formData, { rejectWithValue }) => {
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
        (state.success = "Excel Uploaded Successfully")
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
        (state.success = "Excel Uploaded Successfully")
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
        (state.success = "Excel Uploaded Successfully")
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
        (state.success = "Excel Uploaded Successfully")
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
        (state.success = "Excel Uploaded Successfully")
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
        (state.success = "Excel Uploaded Successfully")
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
        (state.success = "Excel Uploaded Successfully")
      })
      builder.addCase(uploadUtilityExcel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

  },
});


export const {clearSuccessMessage, clearErrorMessage } = uploadSlice.actions;
export default uploadSlice.reducer;