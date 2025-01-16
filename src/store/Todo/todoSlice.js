import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";

// Async thunk to post a new todo
export const postTodo = createAsyncThunk("todo/postTodo", async ({ formData, type }) => {
  try {
    const response = await apiService.post(`dashboard/${type}_tasks/`, formData);
    return { data: response.data, type };
  } catch (error) {
    console.error("Error posting Todo:", error);
    throw error;
  }
});

// Async thunk to fetch todos based on type
export const getTodo = createAsyncThunk("todo/getTodo", async ({type}) => {
  try {
    const response = await apiService.get(`dashboard/${type}_tasks/`);
    return { data: response.data, type };
  } catch (error) {
    console.error("Error fetching Todos:", error);
    throw error;
  }
});

// Async thunk to update a todo
export const updateTodo = createAsyncThunk("todo/updateTodo", async ({ id, formData, type }) => {
  try {
    const response = await apiService.patch(`dashboard/${type}_tasks/${id}/`, formData);
    return { id, data: response.data, type };
  } catch (error) {
    console.error("Error updating Todo:", error);
    throw error;
  }
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: {
      safety: [],
      quality: [],
      hr: [],
      utility: [],
      sales: [],
      finance: [],
    },
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
      // Fetch Todos
      .addCase(getTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        console.log(action.payload)
        const { type, data } = action.payload;
        console.log(data)
        state.todos[type] = data; // Update specific type list
        state.loading = false;
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Post Todo
      .addCase(postTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success =""
      })
      .addCase(postTodo.fulfilled, (state, action) => {
        const { type, data } = action.payload;
        state.todos[type].push(data); // Add the new todo to the specific type list
        state.loading = false;
        state.success ="Activity Added"
      })
      .addCase(postTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Update Todo
      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const { id, type, data } = action.payload;
        const index = state.todos[type].findIndex((todo) => todo.id === id);
        if (index !== -1) {
          state.todos[type][index] = { ...state.todos[type][index], ...data };
        }
        state.loading = false;
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSuccessMessage, clearErrorMessage } = todoSlice.actions;

export default todoSlice.reducer;
