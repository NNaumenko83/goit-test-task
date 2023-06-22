import React from "react";
import { AvatarWrapper, UserCard } from "./UsersItem.styled";
import { Button } from "components/Button/Button";
import { increaseFollowers, decreaseFollowers } from "services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  addFollowingUser,
  deleteFollowingUser,
} from "redux/followedUsersSlice";
import { useDispatch } from "react-redux";

export const UsersItem = ({ user, following }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const addFollowerMutation = useMutation({
    mutationFn: increaseFollowers,
    onSuccess: () => {
      // Invalidate and refetch
      dispatch(addFollowingUser(user));
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const deleteFollowerMutation = useMutation({
    mutationFn: decreaseFollowers,
    onSuccess: () => {
      // Invalidate and refetch
      dispatch(deleteFollowingUser(user.id));
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
      <p>{user.tweets.toLocaleString("en-GB")} TWEETS</p>
      <p>{user.followers.toLocaleString("en-GB")} FOLLOWERS</p>
      <AvatarWrapper></AvatarWrapper>
      {!following ? (
        <Button type="button" onClick={onButtonFollowClick}>
          FOLLOW
        </Button>
      ) : (
        <Button type="button" onClick={onButtonUnFollowClick}>
          FOLLOWING
        </Button>
      )}
    </UserCard>
  );
};
