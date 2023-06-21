import React from "react";
import { AvatarWrapper, UserCard } from "./UsersItem.styled";
import { Button } from "components/Button/Button";
import { increaseFollowers, decreaseFollowers } from "services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addFollowingUser,
  deleteFollowingUser,
} from "redux/followedUsersSlice";

export const UsersItem = ({ user }) => {
  const queryClient = useQueryClient();

  const addFollowerMutation = useMutation({
    mutationFn: increaseFollowers,
    onSuccess: () => {
      // Invalidate and refetch

      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const deleteFollowerMutation = useMutation({
    mutationFn: decreaseFollowers,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const onButtonFollowClick = () => {
    addFollowerMutation.mutate(user);
  };

  const onButtonUnFollowClick = () => {
    deleteFollowerMutation.mutate(user);
  };

  return (
    <UserCard>
      <p>{user.user}</p>
      <div>{<img src={user.awatar} alt="user avatar" />}</div>
      <p>{user.tweets} TWEETS</p>
      <p>{user.followers} FOLLOWERS</p>
      <AvatarWrapper></AvatarWrapper>
      <Button type="button" onClick={onButtonFollowClick}>
        FOLLOW
      </Button>
      <Button type="button" onClick={onButtonUnFollowClick}>
        FOLLOWING
      </Button>
    </UserCard>
  );
};
