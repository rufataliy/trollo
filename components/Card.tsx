import React, { useState, useRef } from "react";
import { Card as CardBootstrap, Button, Form } from "react-bootstrap";
import { EditCard } from "./EditCard";
import { ConfirmPopover } from "./ConfirmPopover";
import { DropDown } from "./DropDown";
import { useOutsideClick } from "../customHooks";
import { useStore } from "../store";
import { DueDays } from "./DueDays";
import { BoardSelector } from "./BoardSelector";

interface Props {
  card: Card;
}

export const Card: React.FC<Props> = ({ card }) => {
  const defaultOptions = { date: card.date, board_id: card.board_id };
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
        <CardBootstrap.Title as="p" className="w-100 m-0 ">
          <span className="card-title">{card.title}</span>
        </CardBootstrap.Title>
        <DropDown id={card.id} reset={resetOptions}>
          <Form.Group className="form-control h-auto" controlId="deadline">
            <Form.Label>Deadline</Form.Label>
            <Form.Control
              onChange={(e) =>
                handleOptionsChange({
                  date: e.currentTarget.value,
                  board_id: options.board_id,
                })
              }
              value={options.date}
              type="date"
              custom
            />
          </Form.Group>
          <BoardSelector
            boards={boards}
            board_id={options.board_id}
            onChange={(value) =>
              handleOptionsChange({
                date: options.date,
                board_id: value,
              })
            }
          />
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
          <span className="card-content">{card.content}</span>
        )}
      </CardBootstrap.Body>
      {!edit && (
        <CardBootstrap.Footer className="p-2 d-flex align-items-center justify-content-between">
          <DueDays card={card} />
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
