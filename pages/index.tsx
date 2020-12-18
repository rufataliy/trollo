import Head from "next/head";
import { Container } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trollo | Boards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container board={{ id: "test", title: "test" }} />
      </main>

      <footer></footer>
    </div>
  );
}
