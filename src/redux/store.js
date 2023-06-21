import { configureStore } from "@reduxjs/toolkit";
import { followedUsersReducer } from "./followedUsersSlice";
// import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    followedUsers: followedUsersReducer,
    // filters: filtersReducer
  },
});
