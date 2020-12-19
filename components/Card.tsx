import React, { useState, useRef } from "react";
import { Card as CardBootstrap, Button, Form } from "react-bootstrap";
import { EditCard } from "./EditCard";
import { ConfirmPopover } from "./ConfirmPopover";
import { DropDown } from "./DropDown";
import { useOutsideClick } from "../customHooks";
import { useStore } from "../store";

interface Props {
  card: Card;
}

export const Card: React.FC<Props> = ({ card }) => {
  const defaultOptions = { deadline: card.deadline, board_id: card.board_id };
  const [edit, setEdit] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const refBody = useRef<HTMLDivElement>(null);
  const refPopover = useRef<HTMLDivElement>(null);
  const { deleteCard, editCard, boards } = useStore();
  const [options, setOptions] = useState(defaultOptions);

  const handleOptionsSubmit = () => {
    const updatedCard = { ...card, ...options };
    editCard(updatedCard);
  };

  const handleOptionsChange = (options) => {
    setOptions(() => {
      return options;
    });
  };

  const resetOptions = () => {
    setOptions(() => ({ ...defaultOptions }));
  };

  const resetState = () => {
    setEdit(false);
  };

  const handleDelete = (card) => {
    deleteCard(card);
    resetPopover();
  };

  const handleEdit = (value) => {
    card.content = value;
    editCard(card);
    resetState();
  };

  const resetPopover = () => {
    setShowPopover(false);
  };

  const DeleteButton = (
    <Button
      className="btn-sm text-secondary btn-light d-flex align-items-center"
      onClick={(e) => {
        setShowPopover(true);
      }}
    >
      <p className="m-0 mr-1">Delete</p>
      <i className="bi bi-trash-fill mt-n1" />
    </Button>
  );

  useOutsideClick(refPopover, resetPopover);
  useOutsideClick(refBody, resetState);

  return (
    <CardBootstrap ref={refBody} id={card.id} className="w-100 mb-2">
      <CardBootstrap.Header className="d-flex align-items-center justify-content-between pt-1 pb-1 pr-1">
        <CardBootstrap.Title as="p" className="w-100 m-0">
          {card.title}
        </CardBootstrap.Title>
        <DropDown id={card.id} reset={() => console.log("reset")}>
          <Form.Group className="form-control h-auto" controlId="deadline">
            <Form.Label>Deadline</Form.Label>
            <Form.Control
              onChange={(e) =>
                handleOptionsChange({
                  deadline: e.currentTarget.value,
                  board_id: options.board_id,
                })
              }
              value={options.deadline}
              type="date"
              custom
            />
          </Form.Group>
          <Form.Group className="form-control h-auto" controlId="boardsSelect">
            <Form.Label>Boards</Form.Label>
            <Form.Control
              name="boardsSelect"
              onChange={(e) =>
                handleOptionsChange({
                  deadline: options.deadline,
                  board_id: e.currentTarget.value,
                })
              }
              value={options.board_id}
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
          <div className="form-control">
            <Button
              onClick={handleOptionsSubmit}
              className="btn-sm btn-success w-100"
            >
              Done
            </Button>
          </div>
        </DropDown>
      </CardBootstrap.Header>
      <CardBootstrap.Body className="p-2">
        {edit ? (
          <EditCard
            card={card}
            handleCancel={resetState}
            handleSubmit={handleEdit}
          />
        ) : (
          card.content + card.id
        )}
      </CardBootstrap.Body>
      {!edit && (
        <CardBootstrap.Footer className="p-2 d-flex align-items-center justify-content-between">
          <div
            ref={refPopover}
            className="d-flex justify-content-end align-items-end position-relative"
            role="group"
          >
            <Button
              className="btn-sm text-secondary btn-light d-flex align-items-center"
              onClick={(e) => {
                e.stopPropagation();
                setEdit(true);
              }}
            >
              <p className="m-0 mr-1">Edit</p>
              <i className="bi bi-pencil-square mt-n1"></i>
            </Button>
            <ConfirmPopover
              id={card.id}
              show={showPopover}
              text={"Confirm delete."}
              Target={DeleteButton}
              onCancel={resetPopover}
              onConfirm={() => handleDelete(card)}
            />
          </div>
        </CardBootstrap.Footer>
      )}
    </CardBootstrap>
  );
};
