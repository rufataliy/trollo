import { Header } from "../components";
import { StateProvider } from "../store";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateProvider>
        <div className="wrapper">
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </StateProvider>
    </>
  );
}

export default MyApp;
