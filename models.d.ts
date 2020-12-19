interface Card {
  id: string;
  type?: string;
  content?: string;
  board_id: string;
  title: string;
  deadline?: string;
}

interface Board {
  id: string;
  title: string;
}

interface ContextDefault {
  cards?: Card[];
  boards?: Board[];
  addNewBoard: (board: Board) => void;
  addNewCard: (card: Card) => void;
  editCard: (editedCard: Card) => void;
  deleteCard: (deletedCard: Card) => void;
  reorderCards: (result: { [key: string]: any }) => void;
  reorderBoards: (result: { [key: string]: any }) => void;
}
