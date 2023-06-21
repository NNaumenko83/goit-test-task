const { createSlice } = require("@reduxjs/toolkit");

const followedUsersInitialState = {
  items: [],
};

const followedUsersSlice = createSlice({
  name: "followedUsers",
  initialState: followedUsersInitialState,

  reducers: {
    addFollowingUser: (state) => {
      console.log("addFollowingUser");

      return state;
    },
    deleteFollowingUser: (state) => {
      console.log("deleteFollowing");
      return state;
    },
  },
});

export const { addFollowingUser, deleteFollowingUser } =
  followedUsersSlice.actions;

export const followedUsersReducer = followedUsersSlice.reducer;
