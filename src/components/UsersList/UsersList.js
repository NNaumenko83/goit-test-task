import PropTypes from "prop-types";
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

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
