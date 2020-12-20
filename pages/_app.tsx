import { Header } from "../components";
import { StateProvider } from "../store";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </>
  );
}

export default MyApp;
