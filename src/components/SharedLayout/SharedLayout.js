// Imports
import { Outlet } from "react-router-dom";
import {
  Container,
  HeaderContainer,
  Footer,
  Header,
  Link,
  Logo,
  Main,
} from "./SharedLayout.styled";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <Logo>GoIt Test Task</Logo>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/tweets">Tweets</Link>
          </nav>
        </HeaderContainer>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
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
