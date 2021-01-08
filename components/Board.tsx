import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useOutsideClick } from "../customHooks";
import { ConfirmPopover } from "./ConfirmPopover";
import { DropDown } from "./DropDown";
import { NewCard } from "./NewCard";
import { EditBoard } from "./EditBoard";
import { useStore } from "../store";

interface Props {
  board: Board;
}

export const Board: React.FC<Props> = ({ children, board }) => {
  const [showPopover, setShowPopover] = useState(false);
  const [editing, setEditing] = useState(false);
  const { editBoard, deleteBoard } = useStore();

  const refPopover = useRef<HTMLDivElement>(null);
  const refHeader = useRef<HTMLDivElement>(null);

  const resetPopover = () => {
    setShowPopover(false);
  };
  const resetEditing = () => {
    setEditing(false);
  };

  const handleDelete = (board: Board) => {
    deleteBoard(board);
  };

  const handleSubmit = (value: string) => {
    const editedBoard = { ...board, title: value };
    editBoard(editedBoard);
    resetEditing();
  };

  useOutsideClick(refPopover, resetPopover);
  useOutsideClick(refHeader, resetEditing);

  return (
    <div className="card-container mr-3">
      <div
        ref={refHeader}
        className="d-flex justify-content-between card-container-header p-2"
      >
        {editing ? (
          <EditBoard
            handleSubmit={handleSubmit}
            handleCancel={resetEditing}
            board={board}
          />
        ) : (
          <>
            <h5 className="m-0">{board.title}</h5>
            <DropDown id={board.id} reset={() => console.log()}>
              <div ref={refPopover}>
                <ConfirmPopover
                  id={board.id}
                  show={showPopover}
                  text={"All cards will be removed."}
                  Target={
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPopover(true);
                      }}
                      className="btn-sm text-secondary d-flex align-items-center text-left btn-light w-100"
                    >
                      <p className="m-0 mr-1">Delete</p>
                      <i className="bi bi-trash-fill mt-n1" />
                    </Button>
                  }
                  onCancel={() => setShowPopover(false)}
                  onConfirm={() => handleDelete(board)}
                />
              </div>

              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setEditing(true);
                }}
                className="btn-sm text-secondary d-flex align-items-center text-left btn-light w-100"
              >
                <p className="m-0 mr-1">Edit</p>
                <i className="bi bi-pencil-square mt-n1"></i>
              </Button>
            </DropDown>
          </>
        )}
      </div>
      <div className="card-container-list p-2">{children}</div>
      <div className="card-container-footer p-2">
        <NewCard boardId={board.id} />
      </div>
    </div>
  );
};
