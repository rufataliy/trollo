import { StateProvider } from "../store";
import Head from "next/head";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Trollo | Trello Clone" />
        <meta
          name="description"
          content="Clone application of trello with drag and drop cards and boards and calendar."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trollo.rufat.tech/" />
        <meta property="og:title" content="Trollo | Trello Clone" />
        <meta
          property="og:description"
          content="Clone application of trello with drag and drop cards and boards and calendar."
        />
        <meta
          property="og:image"
          content="https://trollo.rufat.tech/thumbnail.jpg"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://trollo.rufat.tech/" />
        <meta property="twitter:title" content="Trollo | Trello Clone" />
        <meta
          property="twitter:description"
          content="Clone application of trello with drag and drop cards and boards and calendar."
        />
        <meta
          property="twitter:image"
          content="https://trollo.rufat.tech/thumbnail.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </>
  );
}

export default MyApp;
