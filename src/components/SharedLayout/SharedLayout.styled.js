import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  min-width: 320px;
  /* height: 100%; */
  align-items: center;
  padding: 15px 30px;

  /* outline: 1px solid red; */

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  min-width: 320px;
  height: 100%;
  align-items: center;
  margin-top: 60px;
  padding: 15px 30px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Header = styled.header`
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  min-width: 100vw;
  gap: 12px;
  padding: 8px 0;
  height: 70px;

  background: linear-gradient(to right, #8e44ad, #3498db);
  background-size: 200% auto;
  animation: gradientAnimation 5s ease infinite;
  @keyframes gradientAnimation {
    0% {
      background-position: 0% center;
    }
    50% {
      background-position: 100% center;
    }
    100% {
      background-position: 0% center;
    }
  }

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const NavigateLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: color 200ms linear;
  :hover,
  :focus {
    color: #cfd907;
  }

  &.active {
    color: white;
    background-color: #0181e4;
  }
`;

export const Footer = styled.footer`
  height: 70px;
  min-width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0;

  background: linear-gradient(to right, #8e44ad, #3498db);
  background-size: 200% auto;
  animation: gradientAnimation 5s ease infinite;
  @keyframes gradientAnimation {
    0% {
      background-position: 0% center;
    }
    50% {
      background-position: 100% center;
    }
    100% {
      background-position: 0% center;
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-width: 320px;

  align-items: center;
  padding: 15px 30px;

  /* outline: 1px solid red; */

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Main = styled.main`
  flex-grow: 1;

  background-image: radial-gradient(circle at center, #7107d9, #1b7ac8);
  background-attachment: fixed;
`;

export const FooterText = styled.p`
  font-size: 15px;
`;
