import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../logic/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;

export var RootState = store.getState;
export var AppDispatch = store.dispatch;
