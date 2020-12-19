import { useState } from "react";
import { boardsDefault, cardsDefault } from "./mockData";

export const useGlobalState = (): ContextDefault => {
  const [cards, setCards] = useState<Card[] | null>(cardsDefault);
  const [boards, setBoards] = useState<Board[] | null>(boardsDefault);

  const addNewBoard = (newBoard: Board) => {
    setBoards((boards) => {
      return [...boards, newBoard];
    });
  };

  const addNewCard = (newCard: Card) => {
    setCards((cards) => {
      return [...cards, newCard];
    });
  };

  const editCard = (editedCard: Card) => {
    setCards((cards) => {
      return cards.map((card) => {
        if (card.id === editedCard.id) {
          return editedCard;
        }
        return card;
      });
    });
  };

  const deleteCard = (deletedCard: Card) => {
    setCards((cards) => {
      return cards.filter((card) => card.id !== deletedCard.id);
    });
  };

  const reorderCards = (result) => {
    const { destination, source } = result;
    setCards((cards) => {
      let indexBalance = source.index > destination.index ? 0 : -1;
      if (destination.droppableId === source.droppableId) indexBalance = 0;
      const updatedCards = [...cards];
      const draggedItem = updatedCards[source.index];
      draggedItem.board_id = destination.droppableId;

      updatedCards.splice(source.index, 1);
      updatedCards.splice(destination.index + indexBalance, 0, draggedItem);
      return updatedCards;
    });
  };

  const reorderBoards = (result) => {
    const { destination, source } = result;
    setBoards((boards) => {
      const updatedBoards = [...boards];
      const draggedItem = updatedBoards[source.index];

      updatedBoards.splice(source.index, 1);
      updatedBoards.splice(destination.index, 0, draggedItem);
      return updatedBoards;
    });
  };

  return {
    cards,
    boards,
    addNewBoard,
    addNewCard,
    editCard,
    deleteCard,
    reorderCards,
    reorderBoards,
  };
};
