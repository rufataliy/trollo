import { useState } from "react";
import { boardsDefault, cardsDefault } from "./mockData";

export const useGlobalState = () => {
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

  return {
    cards,
    boards,
    addNewBoard,
    addNewCard,
    editCard,
    deleteCard,
  };
};