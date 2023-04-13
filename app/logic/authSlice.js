import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "auth",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    setUserLoading: (state) => {
      state.loading = true;
    },
    setUserSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    setUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
    clearUserData: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});
