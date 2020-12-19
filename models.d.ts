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
