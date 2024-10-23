import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";

export const postForgotPassword = createAsyncThunk(
    "postForgotPassword/postForgotPassword",
    async (data) => {
        try {
            const response = await apiService.post(`users/forgot_password/`, data);
            return response;

        } catch (error) {
            console.log("fetch error while getting modal details", error);
            throw error;
        }
    }
);

const forgotPasswordSlice = createSlice({
    name: "forgotpassword",
    initialState: {
        forgotPasswordfunc: [],
        downloading: false,
    },

    reducers: {
        clearSuccessMessage: (state) => {
            state.error = "";
            state.success = "";
        },
        clearOtherItemParameter: (state) => {
            state.otherItemParameter = null;
        },
        clearOtherItemParameterDropdown: (state) => {
            state.dropdown = [];
        },
        downloadExcelStart(state) {
            state.downloading = true;
            state.error = null;
        },
        downloadExcelSuccess(state) {
            state.downloading = false;
        },
        downloadExcelFailure(state, action) {
            state.downloading = false;
            state.error = action.payload;
        },
    },


    extraReducers: (builder) => {
        builder.addCase(postForgotPassword.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(postForgotPassword.fulfilled, (state, action) => {
            state.loading = false;
            state.forgotPasswordfunc.push(action.payload);
            state.success = action.payload?.data?.maessage;
            console.log( state.success," state.success");
            
            
        });
        builder.addCase(postForgotPassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });


    }
});

export const { clearSuccessMessage, downloadExcelFailure, downloadExcelSuccess, downloadExcelStart } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;