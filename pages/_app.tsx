import { AppProps } from "next/app";
import { createWrapper } from "next-redux-wrapper";
import { store } from "../redux/store";
import NavbarLayout from "../layouts/main";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <NavbarLayout>
      <Component {...pageProps} />

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: sans-serif;
        }
      `}</style>
    </NavbarLayout>
  );
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
