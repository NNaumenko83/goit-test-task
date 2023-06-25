// import { Task } from "components/Task/Task";
import { UsersItem } from "components/UsersItem/UsersItem";

import { useSelector } from "react-redux";

import { UsersListStyled } from "./UsersList.styled";

import { selectFollowingUsers } from "redux/selectors";

export const UsersList = ({ users }) => {
  const followedUsers = useSelector(selectFollowingUsers);

  const isFollowing = (user) =>
    followedUsers.some((item) => item.id === user.id);

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
