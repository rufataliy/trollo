import Head from "next/head";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Container, Card, NewBoard } from "../components";
import { DragDropContext } from "react-beautiful-dnd";
import { useStore } from "../store";

export default function Home() {
  const { boards, cards } = useStore();

  return (
    <>
      <Head>
        <title>Trollo | Boards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DragDropContext onDragEnd={() => {}}>
        <div className="main-content p-3">
          {boards.map((board) => {
            return (
              <Container board={board}>
                <Droppable key={board.id} droppableId={board.id}>
                  {(provided) => {
                    return (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        {cards.map((card, index) => {
                          if (card.board_id === board.id) {
                            return (
                              <Draggable
                                draggableId={card.id}
                                index={index}
                                key={card.id}
                              >
                                {(provided) => {
                                  return (
                                    <div
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                    >
                                      <Card card={card} />
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          }
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </Container>
            );
          })}
          <NewBoard />
        </div>
      </DragDropContext>
    </>
  );
}
