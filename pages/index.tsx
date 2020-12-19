import Head from "next/head";
import React from "react";
import { Container, Card, NewBoard } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trollo | Boards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-content p-3">
        <Container board={{ id: "test", title: "test" }}>
          <Card
            card={{ id: "test-card", title: "card-title", board_id: "test" }}
          />
        </Container>
        <NewBoard />
      </div>
    </>
  );
}
