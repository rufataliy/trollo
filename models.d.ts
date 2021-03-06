interface Card {
  id: string;
  type?: string;
  content?: string;
  board_id: string;
  title: string;
  date?: string;
}

interface Board {
  id: string;
  title: string;
}

interface Alert {
  titie?: string;
  variant: "success" | "danger";
  text: string;
}

interface ContextDefault {
  cards?: Card[];
  boards?: Board[];
  addNewBoard: (board: Board) => void;
  addNewCard: (card: Card) => void;
  editCard: (editedCard: Card) => void;
  deleteCard: (deletedCard: Card) => void;
  editBoard: (editedBoard: Board) => void;
  deleteBoard: (deletedBoard: Board) => void;
  reorderCards: (result: { [key: string]: any }) => void;
  reorderBoards: (result: { [key: string]: any }) => void;
  alert: Alert;
  showAlert: (alert: Alert) => void;
  resetAlert: () => void;
}

type DefaultRegisterValues = { trollo_name: string; trollo_company: string };
