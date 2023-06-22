import { statusFilters } from "redux/constants";

export const filterUserByStatus = (allUsers, followingUsers, filterStatus) => {
  switch (filterStatus) {
    case statusFilters.follow:
      return allUsers.filter(
        (user) => !followingUsers.some((item) => item.id === user.id)
      );

    case statusFilters.followings:
      return allUsers.filter((user) =>
        followingUsers.some((item) => item.id === user.id)
      );

    default:
      return allUsers;
  }
};
