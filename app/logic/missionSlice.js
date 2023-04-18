import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "mission",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    setMissionLoading: (state) => {
      state.loading = true;
    },
    setMissionSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    setMissionFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
    clearMissionData: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});
