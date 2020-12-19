import { Header } from "../components";
import { StateProvider } from "../store";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateProvider>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </StateProvider>
    </>
  );
}

export default MyApp;
