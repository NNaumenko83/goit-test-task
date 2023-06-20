// Imports
import { Outlet } from "react-router-dom";
import { Container, Header, Link, Logo } from "./SharedLayout.styled";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>GoIt Test Task</Logo>
        <p>Test</p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/template">Template</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
