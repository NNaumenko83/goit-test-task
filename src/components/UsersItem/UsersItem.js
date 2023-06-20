import React from "react";
import { AvatarWrapper, UserCard } from "./UsersItem.styled";
import { Button } from "components/Button/Button";

export const UsersItem = ({ user }) => {
  return (
    <UserCard>
      <p>{user.user}</p>
      <div>{<img src={user.awatar} alt="user avatar" />}</div>
      <p>{user.tweets} TWEETS</p>
      <p>{user.followers} FOLLOWERS</p>
      <AvatarWrapper></AvatarWrapper>
      <Button type="button">FOLLOW</Button>
    </UserCard>
  );
};
