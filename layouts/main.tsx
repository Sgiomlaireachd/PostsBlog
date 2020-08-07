import HeaderNav from "../components/HeaderNav/HeaderNav";

const NavbarLayout = (props: any) => (
  <>
    <HeaderNav></HeaderNav>
    {props.children}
  </>
);

export default NavbarLayout;
