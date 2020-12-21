import React, { useState } from "react";
import Form from "react-bootstrap/Form";

interface Props {
  onChange: (value: string) => void;
  boards: Board[];
  board_id?: string;
}

export const BoardSelector: React.FC<Props> = ({
  onChange,
  boards,
  board_id,
}) => {
  const [value, setValue] = useState(board_id);

  return (
    <Form.Group className="form-control h-auto" controlId="boardsSelect">
      <Form.Label>Boards</Form.Label>
      <Form.Control
        name="boardsSelect"
        onChange={(e) => {
          setValue(e.currentTarget.value);
          onChange(e.currentTarget.value);
        }}
        value={value ? value : boards[0].id}
        as="select"
        custom
      >
        {boards.map((board, index) => {
          return (
            <option key={index} value={board.id}>
              {board.title}
            </option>
          );
        })}
      </Form.Control>
    </Form.Group>
  );
};
