import { createSelector } from "@reduxjs/toolkit";

export const selectUser = (state) => state.auth;
export const selectMissions = (state) => state.mission;
