import React, { useEffect, useRef, useState } from "react";
import {
  Card as CardBootstrap,
  Popover,
  OverlayTrigger,
  Button,
} from "react-bootstrap";

interface Props {
  card: Card;
}

export const Card: React.FC<Props> = ({ card }) => {
  const [edit, setEdit] = useState(false);
  const [showPopover, setShowPopover] = useState(false);

  const resetState = () => {
    setEdit(false);
  };

  const resetPopover = () => {
    setShowPopover(false);
  };

  return (
    <CardBootstrap id={card.id} className="w-100 mb-2">
      <CardBootstrap.Header className="d-flex align-items-center justify-content-between pt-1 pb-1 pr-1">
        <CardBootstrap.Title as="p" className="w-100 m-0">
          Card Title
        </CardBootstrap.Title>
      </CardBootstrap.Header>
      <CardBootstrap.Body className="p-2 pl-3">
        {edit ? "edit card" : card.content + card.id}
      </CardBootstrap.Body>
      <CardBootstrap.Footer className="p-1 d-flex align-items-center justify-content-between">
        {!edit && (
          <div
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

            <OverlayTrigger
              trigger="click"
              key={card.id + "popover"}
              placement={"left"}
              rootClose
              show={showPopover}
              flip
              overlay={
                <Popover id={`popover-${card.id}`}>
                  <Popover.Title as="h3">Are you sure?</Popover.Title>
                  <Popover.Content className="d-flex">
                    <Button
                      className="btn-sm mr-1 btn-danger w-100"
                      onClick={() => console.log("delete")}
                    >
                      Delete
                    </Button>
                    <Button
                      className="btn-sm btn-secondary w-100"
                      onClick={() => setShowPopover(false)}
                    >
                      Cancel
                    </Button>
                  </Popover.Content>
                </Popover>
              }
            >
              <Button
                onClick={() => setShowPopover(true)}
                className="btn-sm text-secondary btn-light d-flex align-items-center"
              >
                <p className="m-0 mr-1">Delete</p>
                <i className="bi bi-trash-fill mt-n1"></i>
              </Button>
            </OverlayTrigger>
          </div>
        )}
      </CardBootstrap.Footer>
    </CardBootstrap>
  );
};
