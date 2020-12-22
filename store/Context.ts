import React from "react";

const defaultBoard: Board = { id: "", title: "" };
const defaultCard: Card = { board_id: "", id: "", title: "" };
const defaultAlert: Alert = { text: "", variant: "success" };
const voidBoardFn = (defaultBoard) => {};
const voidCardFn = (defaultCard) => {};
const voidFn = () => {};

const defaultContext: ContextDefault = {
  addNewBoard: voidFn,
  addNewCard: voidFn,
  alert: defaultAlert,
  editBoard: voidBoardFn,
  editCard: voidCardFn,
  deleteBoard: voidBoardFn,
  deleteCard: voidCardFn,
  reorderBoards: ({}) => {},
  reorderCards: ({}) => {},
  resetAlert: voidFn,
  showAlert: voidFn,
};

export const Context = React.createContext<ContextDefault>(defaultContext);
