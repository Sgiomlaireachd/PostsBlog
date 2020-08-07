import HeaderNav from "../components/HeaderNav/HeaderNav";
import Head from "next/head";

const NavbarLayout = (props: any) => (
  <>
    <Head>
      <title>MyBLOG</title>
    </Head>
    <HeaderNav />
    {props.children}
  </>
);

export default NavbarLayout;
