import Head from "next/head";
import React, { useEffect } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Container, Card, NewBoard, Header } from "../components";
import { DragDropContext } from "react-beautiful-dnd";
import { useStore } from "../store";
import { checkRegisteration } from "../utils";
import Router from "next/router";

export default function Boards() {
  const { boards, cards, reorderCards, reorderBoards } = useStore();

  useEffect(() => {
    if (!checkRegisteration()) {
      Router.push("/");
    }
  }, []);
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    if (result.type === "board") return reorderBoards(result);
    reorderCards(result);
  };

  return (
    <>
      <Head>
        <title>Trollo | Boards</title>
      </Head>
      <div className="wrapper">
        <Header />
        <main>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable
              droppableId={"board"}
              type="board"
              direction="horizontal"
            >
              {(provided) => {
                return (
                  <div
                    className="main-content p-3"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {boards.map((board, index) => {
                      return (
                        <Draggable
                          draggableId={board.id}
                          index={index}
                          key={board.id}
                        >
                          {(provided) => {
                            return (
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                              >
                                <Container board={board}>
                                  <Droppable
                                    key={board.id}
                                    droppableId={board.id}
                                  >
                                    {(provided) => {
                                      return (
                                        <div
                                          {...provided.droppableProps}
                                          ref={provided.innerRef}
                                        >
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
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                    <NewBoard />
                  </div>
                );
              }}
            </Droppable>
          </DragDropContext>
        </main>
      </div>
    </>
  );
}
