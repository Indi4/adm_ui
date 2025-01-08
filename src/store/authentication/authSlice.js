import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import apiService from "../../services/apiService";


export const login = createAsyncThunk("auth/login", async ({ password, username, pu_id, div_id}) => {
  try {
		const response = await apiService.post('/auth/login/', {  password, username, pu_id, div_id });
    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.non_field_errors ? errorData.non_field_errors[0] : 'Unknown error';
      throw new Error(`${errorMessage}`);
    }
    const data = await response.json();
    return {...data, div_id, username};
	  } catch (error) {
		  // console.log("Fetch error while getting user details", error);
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
        state.accessToken = action.payload.key;
        // let ciphertext = CryptoJS.AES.encrypt(action.payload.key, 'indi4').toString();
        state.division = action.payload.div_id;
        localStorage.setItem("token",action.payload.key)
        localStorage.setItem("division",action.payload.div_id)
        localStorage.setItem("username", action.payload.username)
      })
      .addCase(login.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.error.message;
      })
  }
});

export const { getRole, removeRole, setRole, setAuthToken, clearSuccessMessage, clearErrorMessage } = authSlice.actions;
export default authSlice.reducer;