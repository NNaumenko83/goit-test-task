import React, { useState } from "react";
import {
  Avatar,
  AvatarWrapper,
  CenterLine,
  UserCard,
  UserInfoAndButtonContainer,
  UserInfoWrapper,
} from "./UsersItem.styled";
import { increaseFollowers, decreaseFollowers } from "services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  addFollowingUser,
  deleteFollowingUser,
} from "redux/followedUsersSlice";
import { useDispatch } from "react-redux";
import ButtonStyled from "components/Button/Button";

export const UsersItem = ({ user, following }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false); // Стан для кожного UsersItem

  const addFollowerMutation = useMutation({
    mutationFn: increaseFollowers,
    onSuccess: () => {
      dispatch(addFollowingUser(user));
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const deleteFollowerMutation = useMutation({
    mutationFn: decreaseFollowers,
    onSuccess: () => {
      dispatch(deleteFollowingUser(user.id));
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const onButtonFollowClick = async () => {
    setIsLoading(true);
    try {
      await addFollowerMutation.mutateAsync(user);
    } catch (error) {
      console.error("Error adding follower:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onButtonUnFollowClick = async () => {
    setIsLoading(true);
    try {
      await deleteFollowerMutation.mutateAsync(user);
    } catch (error) {
      console.error("Error deleting follower:", error);
    } finally {
      setIsLoading(false);
    }
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
            loading={isLoading}
          >
            {isLoading ? "LOADING" : "FOLLOW"}
          </ButtonStyled>
        ) : (
          <ButtonStyled
            type="button"
            onClick={onButtonUnFollowClick}
            following={following}
            loading={isLoading}
          >
            {isLoading ? "LOADING" : "FOLLOWING"}
          </ButtonStyled>
        )}
      </UserInfoAndButtonContainer>
    </UserCard>
  );
};
