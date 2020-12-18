import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface Props {
  boardId: string;
}

export const NewCard: React.FC<Props> = ({ boardId }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const resetState = () => {
    setValue("");
    setShow(false);
    setError(false);
  };

  const handleChange = (value) => {
    setError(false);
    setValue(value);
  };

  return (
    <div>
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
            onClick={() => console.log("submit")}
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
