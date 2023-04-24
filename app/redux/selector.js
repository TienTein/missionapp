import { createSelector } from "@reduxjs/toolkit";

export const selectUser = (state) => state.auth;
export const selectMissions = (state) => state.mission;

export const checkLoadingSelector = createSelector(
  selectUser,
  selectMissions,
  (auth, mission) => {
    const isLoading = auth.loading || mission.loading;

    return isLoading;
  }
);
