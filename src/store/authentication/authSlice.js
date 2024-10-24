import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";


export const getUser = ({ email, password }) => {
  const exist = users.filter(
    (user) => user.email === email && user.password === password
  );
  if (exist.length === 0) {
    return {
      error: "User does not exist",
    };
  } else {
    return {
      data: exist[0],
      success: "User logged in successfully",
    };
  }
};

export const login = createAsyncThunk(
  "users/login",
  async ({ password, email }) => {
    try {
      const response = await apiService.post("/users/login/", {
        password,
        email,
      });
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error)
      throw error.response.data.error;
    }
  }
);


export const getMyAccount = createAsyncThunk(
  "getMyAccount/getMyAccount",
  async (id) => {
    try {
      const response = await apiService.get(
        `users/list/${id}`
      );
      return response.data;
    } catch (error) {
      throw error.response.data.error;
    }
  }
);


export const PostChangePassword = createAsyncThunk(
  "PostChangePassword/PostChangePassword",
  async (data) => {
    try {
      const response = await apiService.post(`users/reset_password/`, data);

      return response.data;
    }
    catch (error) {
      throw error;
    }
  }
);



export const PostNewForgotPassword = createAsyncThunk(
  "PostNewForgotPassword/PostNewForgotPassword",
  async ({ uexpt,password,confirm_password }) => {
    try {
      const response = await apiService.post(`users/reset/${uexpt}`, {
        password,
        confirm_password
      });
      return response.data;
    }
    catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    role: "",
    loading: false,
    error: null,
    success: "",
    accessToken: null,
    refreshToken: null,
    ResetPassword: [],
    accountDetails: [],
    NewPassword: [],
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
      localStorage.setItem("character", action.payload);
    },
    getRole: (state) => {
      state.role = localStorage.getItem("character");
    },
    removeRole: (state) => {
      state.role = "";
      localStorage.removeItem("character");
    },
    clearMessage: (state) => {
      state.success = "";
      state.error = null;
    },
    setAuthToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      builder.addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.data.access;
        state.refreshToken = action.payload.data.refresh;
        localStorage.setItem("accessToken", action.payload.data.access);
        localStorage.setItem("refreshToken", action.payload.data.refresh);
        state.success = "User Logged In Successfully";
      })
      builder.addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder.addCase(getMyAccount.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getMyAccount.fulfilled,
      (state, action) => {
        state.loading = false;
        state.accountDetails = action.payload;
      }
    );
    builder.addCase(getMyAccount.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }
    );
    builder.addCase(PostChangePassword.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(PostChangePassword.fulfilled, (state, action) => {
      state.loading = false;
      state.ResetPassword.push(action.payload);
      state.success = "Items added successfully";
    });
    builder.addCase(PostChangePassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(PostNewForgotPassword.pending, (state, action) => {
      state.loading = true;
      state.error = null;

    });
    builder.addCase(PostNewForgotPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.NewPassword.push(action.payload);
      state.success = action.payload.message;
    });
    builder.addCase(PostNewForgotPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { getRole, removeRole, setRole, clearMessage, setAuthToken } =
  authSlice.actions;
export default authSlice.reducer;
