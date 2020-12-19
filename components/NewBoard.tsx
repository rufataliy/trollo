import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useOutsideClick } from "../customHooks";
import { v1 as getNewId } from "uuid";
import { useStore } from "../store";

export const NewBoard = () => {
  const { addNewBoard } = useStore();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  const ref = useRef<HTMLDivElement>(null);

  const resetState = () => {
    setValue("");
    setShow(false);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return setError(true);
    const newBoard = { title: value, id: getNewId() };
    addNewBoard(newBoard);
    resetState();
  };

  const handleChange = (value) => {
    setError(false);
    setValue(value);
  };

  useOutsideClick(ref, resetState);

  return (
    <div ref={ref} className="card-container p-2">
      <Button
        onClick={() => setShow(true)}
        className={`btn-new ${show ? "hide" : ""}`}
      >
        + Add new board
      </Button>
      <div className={`${show ? "" : "hide"}`}>
        <div className={`mb-2`}>
          <Form.Group className="mb-0">
            <Form.Label htmlFor="board" className="form-label text-light">
              Name
            </Form.Label>
            <Form.Control
              type="text"
              isInvalid={error}
              className="form-control"
              id="board"
              onChange={(e) => handleChange(e.currentTarget.value)}
              value={value}
              placeholder="Next big things . . ."
            />
          </Form.Group>
        </div>
        <div className="mb-0 d-flex">
          <Button
            onClick={handleSubmit}
            type="submit"
            className="btn-sm btn-success mr-2 w-100"
          >
            Submit
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
