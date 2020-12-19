import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";

interface Props {
  card: Card;
  handleCancel: () => void;
  handleSubmit: (value: string) => void;
}

export const EditCard: React.FC<Props> = ({
  card,
  handleCancel,
  handleSubmit,
}) => {
  const [value, setValue] = useState(card.content);
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
      <div>
        <div className={`mb-2 `}>
          <Form.Group className="m-0">
            <Form.Label htmlFor="content" className="form-label">
              Content
            </Form.Label>
            <Form.Control
              type="text"
              className="m-0"
              name="content"
              id={card.id + "edit"}
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
