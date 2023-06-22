import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const filtersInitialState = { status: statusFilters.all };

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

const persistConfig = {
  key: "followedUsers",
  storage,
};

export const { setStatusFilter } = filtersSlice.actions;

const filtersReducer = filtersSlice.reducer;

export const persistedFiltersReducer = persistReducer(
  persistConfig,
  filtersReducer
);
