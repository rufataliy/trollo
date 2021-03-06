import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useOutsideClick } from "../customHooks";
import { useStore } from "../store";
import { v1 as getNewId } from "uuid";
import { BoardSelector } from "./BoardSelector";

interface Props {
  boardId?: string;
  date?: string;
}

export const NewCard: React.FC<Props> = ({ boardId, date }) => {
  const { addNewCard } = useStore();
  const [show, setShow] = useState(false);
  const { boards } = useStore();
  const [board_id, setBoard_id] = useState(boards[0].id);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const resetState = () => {
    setValue("");
    setShow(false);
    setError(false);
  };

  const handleSubmit = (e) => {
    if (!value || !board_id) return setError(true);
    e.preventDefault();
    setError(false);
    const newCard: Card = {
      id: getNewId(),
      board_id: board_id,
      title: value,
      type: "card",
      date: date || null,
    };

    addNewCard(newCard);
    resetState();
  };

  const handleChange = (value) => {
    setError(false);
    setValue(value);
  };

  useOutsideClick(ref, resetState);

  return (
    <div ref={ref}>
      <button
        onClick={() => setShow(true)}
        className={`btn-new ${show ? "hide" : ""}`}
      >
        <span>&#43;</span> Add Card
      </button>
      <div className={`card-new ${show ? "" : "hide"}`}>
        {!boardId ? (
          <BoardSelector boards={boards} onChange={(id) => setBoard_id(id)} />
        ) : null}
        <Form.Group className={`mb-2`}>
          <Form.Label htmlFor="card" className="form-label">
            Card title
          </Form.Label>
          <Form.Control
            isInvalid={error}
            type="text"
            className="form-control"
            name="card"
            id={boardId + "-new-card"}
            onChange={(e) => handleChange(e.currentTarget.value)}
            value={value}
            placeholder="Next big things . . ."
          />
        </Form.Group>
        <div className="mb-0 d-flex form-btn-group">
          <Button
            onClick={handleSubmit}
            type="submit"
            className="btn-sm btn-success mr-2 w-100"
          >
            Add
          </Button>

          <Button
            type="reset"
            className="btn-sm btn-secondary w-100"
            onClick={resetState}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
