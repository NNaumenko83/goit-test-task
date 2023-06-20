import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  min-width: 320px;
  height: 100%;
  align-items: center;
  padding: 15px 30px;
  background-color: ${(props) => props.theme.header};

  outline: 1px solid red;

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

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  min-width: 320px;
  height: 100%;
  align-items: center;
  padding: 15px 30px;
  background-color: ${(props) => props.theme.header};

  outline: 1px solid red;

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
  padding: 15px 30px;
  background-color: ${(props) => props.theme.header};

  outline: 1px solid red;

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #0181e4;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  /* outline: 1px solid purple; */
  background-color: pink;
`;

export const Main = styled.main`
  flex-grow: 1;
`;
