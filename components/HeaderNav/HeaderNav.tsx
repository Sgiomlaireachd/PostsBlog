import styled from "styled-components";
import theme from "../../themes";
const { colors } = theme;
import { Button, Container } from "../styled";
import Link from "next/link";

const Navbar = styled.nav`
  background-color: ${colors.grey};
  color: #fff;
  padding: 25px 35px;
`;

const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderNav = () => {
  return (
    <Navbar>
      <Container>
        <NavbarInner>
          <Link href="/">
            <h1>MyBLOG</h1>
          </Link>
          <div>
            <Link href="/">
              <Button spaced>All Posts</Button>
            </Link>
            <Link href="/posts/new">
              <Button>Add Post</Button>
            </Link>
          </div>
        </NavbarInner>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
