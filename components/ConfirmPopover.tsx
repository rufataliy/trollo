import React from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";

interface Props {
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
  show: boolean;
  id: string;
  Target: JSX.Element;
}

export const ConfirmPopover: React.FC<Props> = ({
  text,
  onConfirm,
  onCancel,
  show,
  id,
  Target,
}) => {
  return (
    <OverlayTrigger
      trigger="click"
      key={id + "popover"}
      placement={"left"}
      rootClose
      show={show}
      flip
      overlay={
        <Popover id={`popover-${id}`}>
          <Popover.Title as="h3">{text}</Popover.Title>
          <Popover.Content className="d-flex">
            <Button
              className="btn-sm mr-1 btn-danger w-100"
              onClick={onConfirm}
            >
              Confirm
            </Button>
            <Button className="btn-sm btn-secondary w-100" onClick={onCancel}>
              Cancel
            </Button>
          </Popover.Content>
        </Popover>
      }
    >
      {Target}
    </OverlayTrigger>
  );
};
