import { AppProps } from "next/app";
import { createWrapper } from "next-redux-wrapper";
import { store } from "../redux/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
