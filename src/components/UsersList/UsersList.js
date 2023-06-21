// import { Task } from "components/Task/Task";
import { UsersItem } from "components/UsersItem/UsersItem";

import { useSelector } from "react-redux";

// import { statusFilters } from "redux/constants";
// import { getStatusFilter } from "redux/selectors";

import { UsersListStyled } from "./UsersList.styled";
import { useEffect } from "react";
import { getFollowingUsers } from "redux/selectors";

// const getVisibleTasks = (tasks = [], statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter((task) => !task.completed);

//     case statusFilters.completed:
//       return tasks.filter((task) => task.completed);

//     default:
//       return tasks;
//   }
// };

export const UsersList = ({ users }) => {
  console.log("visibleUsers:", users);

  const followedUsers = useSelector(getFollowingUsers);
  console.log("followedUsers:", followedUsers);

  useEffect(() => {
    console.log("UsersList");
  });

  const isFollowing = (user) =>
    followedUsers.some((item) => item.id === user.id);
  // console.log("users:", users);
  //   const statusFilter = useSelector(getStatusFilter);

  //   const visibleTasks = getVisibleTasks(query.data, statusFilter);

  return (
    users && (
      <UsersListStyled>
        {users.map((user) => (
          <UsersItem user={user} key={user.id} following={isFollowing(user)} />
        ))}
      </UsersListStyled>
    )
  );
};
