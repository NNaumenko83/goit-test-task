import React, { useState } from "react";
import {
  Avatar,
  AvatarWrapper,
  CenterLine,
  UserCard,
  UserInfoAndButtonContainer,
  UserInfoWrapper,
  BackImage,
} from "./UsersItem.styled";
import { increaseFollowers, decreaseFollowers } from "services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";

import logo from "../../assets/Logo.svg";
import imageBack from "../../assets/BackgroundImage.png";

import {
  addFollowingUser,
  deleteFollowingUser,
} from "redux/followedUsersSlice";
import { useDispatch } from "react-redux";
import ButtonStyled from "components/Button/Button";
import { toast } from "react-toastify";

export const UsersItem = ({ user, following }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

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
    } finally {
      setIsLoading(false);
    }
  };

  const onButtonUnFollowClick = async () => {
    setIsLoading(true);
    try {
      await deleteFollowerMutation.mutateAsync(user);
    } catch (error) {
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <UserCard>
      <img src={logo} alt="logo" />
      <BackImage src={imageBack} alt="" />

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

UsersItem.propTypes = {
  user: PropTypes.shape({
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  following: PropTypes.bool.isRequired,
};
