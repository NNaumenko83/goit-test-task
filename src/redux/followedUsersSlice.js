import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const { createSlice } = require("@reduxjs/toolkit");

const followedUsersInitialState = {
  items: [],
};

const followedUsersSlice = createSlice({
  name: "followedUsers",
  initialState: followedUsersInitialState,

  reducers: {
    addFollowingUser: (state, action) => {
      state.items.push(action.payload);
      return state;
    },

    deleteFollowingUser: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
      return state;
    },
  },
});

const persistConfig = {
  key: "followedUsers",
  storage,
};

export const { addFollowingUser, deleteFollowingUser } =
  followedUsersSlice.actions;

const followedUsersReducer = followedUsersSlice.reducer;

export const persistedFollowedUsersReducer = persistReducer(
  persistConfig,
  followedUsersReducer
);
