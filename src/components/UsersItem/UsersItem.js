import React from "react";
import {
  Avatar,
  AvatarWrapper,
  CenterLine,
  UserCard,
  UserInfoAndButtonContainer,
  UserInfoWrapper,
} from "./UsersItem.styled";
import { Button, ButtonStyled } from "components/Button/Button";
import { increaseFollowers, decreaseFollowers } from "services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  addFollowingUser,
  deleteFollowingUser,
} from "redux/followedUsersSlice";
import { useDispatch } from "react-redux";
import { useUsers } from "hooks/useUsers";

export const UsersItem = ({ user, following }) => {
  const { isFetching } = useUsers();
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
      <CenterLine></CenterLine>
      <AvatarWrapper>
        <Avatar src={user.avatar} alt="user avatar" />
      </AvatarWrapper>
      <UserInfoAndButtonContainer>
        <UserInfoWrapper>
          <p>{user.tweets.toLocaleString("en-GB")} TWEETS</p>
          <p>{user.followers.toLocaleString("en-GB")} FOLLOWERS</p>
        </UserInfoWrapper>
        {!following ? (
          <ButtonStyled
            type="button"
            onClick={onButtonFollowClick}
            following={following}
            loading={isFetching}
          >
            FOLLOW
          </ButtonStyled>
        ) : (
          <ButtonStyled
            type="button"
            onClick={onButtonUnFollowClick}
            following={following}
            loading={isFetching}
          >
            FOLLOWING
          </ButtonStyled>
        )}
      </UserInfoAndButtonContainer>
    </UserCard>
  );
};
