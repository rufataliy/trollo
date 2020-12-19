import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useOutsideClick } from "../customHooks";
import { ConfirmPopover } from "./ConfirmPopover";
import { DropDown } from "./DropDown";
import { NewCard } from "./NewCard";

interface Props {
  board: Board;
}

export const Container: React.FC<Props> = ({ children, board }) => {
  const [showPopover, setShowPopover] = useState(false);

  const refPopover = useRef<HTMLDivElement>(null);

  const handleDelete = (board: Board) => {
    console.log("delete");
  };
  const handleSubmit = (value: string) => {};

  const resetPopover = () => {
    console.log("reset");
    setShowPopover(false);
  };

  useOutsideClick(refPopover, resetPopover);

  return (
    <div className="card-container mr-3">
      <div className="d-flex justify-content-between card-container-header p-2">
        <h5 className="m-0">{board.title}</h5>
        <DropDown id={board.id} reset={() => console.log()}>
          <div ref={refPopover}>
            <ConfirmPopover
              id={board.id}
              show={showPopover}
              text={"Confirm delete."}
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
            }}
            className="btn-sm text-secondary d-flex align-items-center text-left btn-light w-100"
          >
            <p className="m-0 mr-1">Edit</p>
            <i className="bi bi-pencil-square mt-n1"></i>
          </Button>
        </DropDown>
      </div>
      <div className="card-container-list p-2">{children}</div>
      <div className="card-container-footer p-2">
        <NewCard boardId={board.id} />
      </div>
    </div>
  );
};
