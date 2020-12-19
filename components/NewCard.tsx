import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useOutsideClick } from "../customHooks";
import { useStore } from "../store";
import { v1 as getNewId } from "uuid";

interface Props {
  boardId: string;
}

export const NewCard: React.FC<Props> = ({ boardId }) => {
  const { addNewCard } = useStore();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const resetState = () => {
    setValue("");
    setShow(false);
    setError(false);
  };

  const handleSubmit = (e) => {
    if (!value) return setError(true);
    e.preventDefault();
    setError(false);
    const newCard: Card = {
      id: getNewId(),
      board_id: boardId,
      title: value,
      type: "card",
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
        + Add Card
      </button>
      <div className={`${show ? "" : "hide"}`}>
        <Form.Group className={`mb-2`}>
          <Form.Label htmlFor="card" className="form-label">
            Title
          </Form.Label>
          <Form.Control
            isInvalid={error}
            type="text"
            className="form-control"
            name="card"
            id="card"
            onChange={(e) => handleChange(e.currentTarget.value)}
            value={value}
            placeholder="Next big things . . ."
          />
        </Form.Group>
        <div className="mb-0 d-flex">
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
