import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";

interface Props {
  board: Board;
  handleCancel: () => void;
  handleSubmit: (value: string) => void;
}

export const EditBoard: React.FC<Props> = ({
  board,
  handleCancel,
  handleSubmit,
}) => {
  const [value, setValue] = useState(board.title);
  const [error, setError] = useState(false);

  const resetState = () => {
    setValue("");
    handleCancel();
    setError(false);
  };

  const handleChange = (value) => {
    setError(false);
    setValue(value);
  };

  return (
    <>
      <div className="w-100">
        <div className={`mb-2 `}>
          <Form.Group className="m-0">
            <Form.Label htmlFor="content" className="form-label">
              Title
            </Form.Label>
            <Form.Control
              type="text"
              className="m-0"
              name="content"
              id="content"
              isInvalid={error}
              onChange={(e) => handleChange(e.currentTarget.value)}
              value={value}
              placeholder="Next big things . . ."
            />
          </Form.Group>
        </div>
        <div className="d-flex">
          <Button
            onClick={() => {
              if (!value.trim()) return setError(true);
              handleSubmit(value);
            }}
            type="submit"
            className="btn-sm btn-success mr-2 w-100"
          >
            Save
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
    </>
  );
};
