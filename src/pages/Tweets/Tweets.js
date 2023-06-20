import { Button } from "components/Button/Button";
import { UsersList } from "components/UsersList/UsersList";
import React from "react";

const Tweets = () => {
  return (
    <>
      <UsersList />
      <Button type="button">Load more</Button>
    </>
  );
};

export default Tweets;
