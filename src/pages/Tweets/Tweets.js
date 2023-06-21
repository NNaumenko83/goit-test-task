import { Button } from "components/Button/Button";
import { UsersList } from "components/UsersList/UsersList";
import { useUsers } from "hooks/useUsers";
import React, { useState } from "react";

const Tweets = () => {
  const { data: users = [] } = useUsers();

  const usersPerPage = 3;

  const [page, setPage] = useState(1);
  const visibleUsers = [...users].splice(0, page * usersPerPage);

  const totalPage = Math.ceil(users.length / usersPerPage);

  const onLoadMoreButtonClick = () => {
    if (page >= totalPage) {
      return;
    }

    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <UsersList users={visibleUsers} />
      <Button type="button" onClick={onLoadMoreButtonClick}>
        Load more
      </Button>
    </>
  );
};

export default Tweets;
