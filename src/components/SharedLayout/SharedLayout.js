// Imports
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  Footer,
  Header,
  Logo,
  Main,
  MainContainer,
  FooterText,
  FooterContainer,
  NavigateLink,
} from "./SharedLayout.styled";
import { Suspense } from "react";
import ButtonStyled from "components/Button/Button";
import { Hearts } from "react-loader-spinner";

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
          <Link to="/">
            <Logo>
              <span style={{ color: "blue" }}>Follower</span>
              <span style={{ color: "yellow" }}>Flow</span>
            </Logo>
          </Link>
          {isTweetPage && <ButtonStyled onClick={goHome}>Back</ButtonStyled>}

          <nav>
            <NavigateLink to="/">Home</NavigateLink>
            <NavigateLink to="/tweets">Tweets</NavigateLink>
          </nav>
        </HeaderContainer>
      </Header>
      <Main>
        <MainContainer>
          <Suspense
            fallback={
              <Hearts
                height="200"
                width="200"
                color="#4fa94d"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            }
          >
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
