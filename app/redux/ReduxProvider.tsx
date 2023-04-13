"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

interface ProviderProps {
  children: React.ReactNode;
}

export const ReduxProvider: React.FC<ProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
