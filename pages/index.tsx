import Head from "next/head";
import { Container } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trollo | Boards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-content p-3">
        <Container board={{ id: "test", title: "test" }} />
      </div>
    </>
  );
}
