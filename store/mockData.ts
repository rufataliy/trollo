import { v1 as getNewId } from "uuid";

const today = new Date();

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const getDeadline = (days: number) => {
  return addDays(today, days).toLocaleDateString("en-CA");
};

export const cardsDefault: Card[] = [
  {
    title: "Initial Layout",
    board_id: "b3",
    content: "Implement initial layout on css",
    id: getNewId(),
    type: "cards",
    date: getDeadline(-5),
  },
  {
    title: "Alerts",
    board_id: "b1",
    content: "Add alerts for check registration",
    id: getNewId(),
    type: "cards",
    date: getDeadline(10),
  },
  {
    title: "Landing page",
    board_id: "b2",
    content: "Make a landing / registeration page",
    id: getNewId(),
    type: "cards",
    date: getDeadline(-3),
  },
  {
    title: "Calendar",
    board_id: "b2",
    content: "Add calendar view",
    id: getNewId(),
    type: "cards",
    date: getDeadline(3),
  },
  {
    title: "Add bootstrap",
    board_id: "b3",
    content: "Add dependency bootstrap",
    id: getNewId(),
    type: "cards",
    date: getDeadline(-7),
  },
  {
    title: "React DnD",
    board_id: "b3",
    content: "Add react-beatiful-dnd",
    id: getNewId(),
    type: "cards",
    date: getDeadline(-4),
  },
  {
    title: "Mock data",
    board_id: "b3",
    content: "Add mock cards and boards",
    id: getNewId(),
    type: "cards",
    date: getDeadline(-5),
  },
  {
    title: "Board DnD",
    board_id: "b3",
    content: "Implement dnd for boards",
    id: getNewId(),
    type: "cards",
    date: getDeadline(-1),
  },
  {
    title: "Card DnD",
    board_id: "b3",
    content: "Implement dnd for cards",
    id: getNewId(),
    type: "cards",
    date: getDeadline(-1),
  },
  {
    title: "Card Crud",
    board_id: "b2",
    content: "Add crud methods for cards",
    id: getNewId(),
    type: "cards",
    date: getDeadline(4),
  },
  {
    title: "Board Crud",
    board_id: "b2",
    content: "Add crud for boards",
    id: getNewId(),
    type: "cards",
    date: getDeadline(5),
  },
  {
    title: "Routing",
    board_id: "b1",
    content: "Implement routing based on view query",
    id: getNewId(),
    type: "cards",
    date: getDeadline(11),
  },
  {
    title: "Icons bug",
    board_id: "b1",
    content: "Fix icons bug after fullcalendar.io",
    id: getNewId(),
    type: "cards",
    date: getDeadline(12),
  },
  {
    title: "Manual Css build",
    board_id: "b1",
    content: "Implement css compliation manually because of fullcalendar.io",
    id: getNewId(),
    type: "cards",
    date: getDeadline(8),
  },
];

export const boardsDefault: Board[] = [
  { id: "b1", title: "TO DO" },
  { id: "b2", title: "DOING" },
  { id: "b3", title: "DONE" },
];
