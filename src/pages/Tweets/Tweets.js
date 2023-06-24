import { ButtonStyled } from "components/Button/Button";
import { StatusFilter } from "components/StatusFilter/StatusFilter";
import { UsersList } from "components/UsersList/UsersList";
import { filterUserByStatus } from "helpers";
import { useUsers } from "hooks/useUsers";
import React, { useState } from "react";
import { Hearts } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { selectStatusFilter, selectFollowingUsers } from "redux/selectors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Text } from "./Tweets.styled";

const Tweets = () => {
  const { data: users = [], isLoading, isError } = useUsers();

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

  if (isError) {
    toast.error("Something went wrong!!!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return;
  }

  return (
    <>
      <StatusFilter />
      {visibleUsers.length === 0 ? (
        <Text>
          Your subscriptions are as empty as a blank canvas. Seize the
          opportunity to fill your digital world with wonders untold! Unleash
          your curiosity and dive into a realm of captivating creators and
          awe-inspiring adventures!
        </Text>
      ) : (
        <UsersList users={visibleUsers} />
      )}
      {isLoading && (
        <Hearts
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {page !== totalPage && filteredUsers.length > 0 && (
        <ButtonStyled type="button" onClick={onLoadMoreButtonClick}>
          Load more
        </ButtonStyled>
      )}
    </>
  );
};

export default Tweets;
