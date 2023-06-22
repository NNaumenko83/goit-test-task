// Imports
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  HeaderContainer,
  Footer,
  Header,
  Link,
  Logo,
  Main,
  MainContainer,
} from "./SharedLayout.styled";
import { Suspense } from "react";

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
          <Logo>GoIt Test Task</Logo>
          {isTweetPage && (
            <button type="button" onClick={goHome}>
              Back
            </button>
          )}

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
        <Container>
          <p>Footer</p>
        </Container>
      </Footer>
    </>
  );
};

export default SharedLayout;
