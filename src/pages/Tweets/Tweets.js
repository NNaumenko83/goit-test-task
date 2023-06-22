import { Button } from "components/Button/Button";
import { StatusFilter } from "components/StatusFilter/StatusFilter";
import { UsersList } from "components/UsersList/UsersList";
import { filterUserByStatus } from "helpers";
import { useUsers } from "hooks/useUsers";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectStatusFilter, selectFollowingUsers } from "redux/selectors";

const Tweets = () => {
  const { data: users = [] } = useUsers();
  const statusFilter = useSelector(selectStatusFilter);
  const followingUsers = useSelector(selectFollowingUsers);

  const filteredUsers = filterUserByStatus(users, followingUsers, statusFilter);

  const usersPerPage = 3;

  const [page, setPage] = useState(1);
  const visibleUsers = [...filteredUsers].splice(0, page * usersPerPage);

  const totalPage = Math.ceil(filteredUsers.length / usersPerPage);

  const onLoadMoreButtonClick = () => {
    if (page >= totalPage) {
      return;
    }

    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <StatusFilter />
      <UsersList users={visibleUsers} />
      <Button type="button" onClick={onLoadMoreButtonClick}>
        Load more
      </Button>
    </>
  );
};

export default Tweets;
