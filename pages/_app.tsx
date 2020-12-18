import { Header } from "../components";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
