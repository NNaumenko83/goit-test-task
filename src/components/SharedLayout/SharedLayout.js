// Imports
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  Footer,
  Header,
  Link,
  Logo,
  Main,
  MainContainer,
  FooterText,
  FooterContainer,
} from "./SharedLayout.styled";
import { Suspense } from "react";
import ButtonStyled from "components/Button/Button";

const SharedLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isTweetPage = location.pathname === "/tweets";
  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <Header>
        <HeaderContainer>
          <Logo>
            <span style={{ color: "blue" }}>Follower</span>
            <span style={{ color: "yellow" }}>Flow</span>
          </Logo>
          {isTweetPage && <ButtonStyled onClick={goHome}>Back</ButtonStyled>}

          <nav>
            <Link to="/">Home</Link>
            <Link to="/tweets">Tweets</Link>
          </nav>
        </HeaderContainer>
      </Header>
      <Main>
        <MainContainer>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </Main>

      <Footer>
        <FooterContainer>
          <FooterText>Developed by Mykola Naumenko 2023</FooterText>
        </FooterContainer>
      </Footer>
    </>
  );
};

export default SharedLayout;
