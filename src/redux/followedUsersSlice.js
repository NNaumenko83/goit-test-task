const { createSlice } = require("@reduxjs/toolkit");

const followedUsersInitialState = {
  items: [],
};

const followedUsersSlice = createSlice({
  name: "followedUsers",
  initialState: followedUsersInitialState,

  reducers: {
    addFollowingUser: (state, action) => {
      console.log("action:", action.payload);
      console.log("addFollowingUser");
      state.items.push(action.payload);

      return state;
    },
    deleteFollowingUser: (state, action) => {
      console.log("action:", action.payload);
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
      return state;
    },
  },
});

export const { addFollowingUser, deleteFollowingUser } =
  followedUsersSlice.actions;

export const followedUsersReducer = followedUsersSlice.reducer;
