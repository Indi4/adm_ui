import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiService from "../../services/apiService";


export const login = createAsyncThunk("auth/login", async ({email,password}) => {
  try {
		const response = await apiService.post('/dashboard/login/', {email, password});
    const respData = response.data
    // debugger
    if (
      response.status === 400 ||
      response.status === 500 ||
      response.status === 404
    )
      throw new Error(respData.error);
    else return respData;
	  } catch (error) {
		  throw error;
	  }
})

export const signup = createAsyncThunk("auth/signup", async ({email,password}) => {
  try {
		const response = await apiService.post('/dashboard/register/', {email, password});
    const respData = response.data
    // debugger
    if (
      response.status === 400 ||
      response.status === 500 ||
      response.status === 404
    )
      throw new Error(respData.error);
    else return respData;
	  } catch (error) {
		  throw error;
	  }
})

export const forgotPassword = createAsyncThunk("auth/forgotPassword", async ({email}) => {
  try {
		const response = await apiService.post('/dashboard/change_password/', {email});
    const respData = response.data
    // debugger
    if (
      response.status === 400 ||
      response.status === 500 ||
      response.status === 404
    )
      throw new Error(respData.error);
    else return respData;
	  } catch (error) {
		  throw error;
	  }
})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    role: "",
    error: "",
    success:"",
    loading: false,
    isDarkMode: localStorage.getItem("darkMode") === "true" || false,
    accessToken: "",
    division:""
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
      localStorage.setItem("character", action.payload);
    },
    getRole: (state) => {
      state.role = localStorage.getItem("character");
    },
    setAuthToken: (state,action) => {
      state.accessToken = action.payload;
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("darkMode", state.isDarkMode);
      // Optionally update the body class (for UI styling)
      if (state.isDarkMode) {
        document.querySelector(".app").classList.add("dark-mode");
      } else {
        document.querySelector(".app").classList.remove("dark-mode");
      }
    },
    removeRole: (state) => {
      state.role = "";
      state.accessToken = "";
      state.division = "";
      localStorage.removeItem("token")
      localStorage.removeItem("character");
    },
    clearSuccessMessage:(state)=>{
      state.success = ""
    },
    clearErrorMessage: (state)=>{
      state.error = ""
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state,action)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state,action) => {
        state.loading = false;
        state.success = "User logged in successfully"
        state.accessToken = action.payload;
        // let ciphertext = CryptoJS.AES.encrypt(action.payload.key, 'indi4').toString();
        // state.division = action.payload.div_id;
        localStorage.setItem("token",action.payload.token)
      })
      .addCase(login.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(forgotPassword.pending, (state,action)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state,action) => {
        state.loading = false;
        state.success = "Email Sent successfully"
      })
      .addCase(forgotPassword.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(signup.pending, (state,action)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state,action) => {
        state.loading = false;
        state.success = "User Register successfully"
        // state.accessToken = action.payload;
        // let ciphertext = CryptoJS.AES.encrypt(action.payload.key, 'indi4').toString();

      })
      .addCase(signup.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.error.message;
      })
  }
});

export const { getRole, removeRole, setRole, setAuthToken, clearSuccessMessage, clearErrorMessage, toggleDarkMode } = authSlice.actions;
export default authSlice.reducer;