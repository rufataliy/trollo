import Head from "next/head";
import React from "react";
import { Container, Card, NewBoard } from "../components";
import { useStore } from "../store";

export default function Home() {
  const { boards, cards } = useStore();
  return (
    <>
      <Head>
        <title>Trollo | Boards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-content p-3">
        {boards.map((board) => {
          return (
            <Container board={board}>
              {cards.map((card) => {
                if (card.board_id === board.id) return <Card card={card} />;
              })}
            </Container>
          );
        })}
        <NewBoard />
      </div>
    </>
  );
}
