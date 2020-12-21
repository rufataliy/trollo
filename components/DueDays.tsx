import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Badge from "react-bootstrap/Badge";

interface Props {
  card: Card;
}

export const DueDays: React.FC<Props> = ({ card }) => {
  const today = new Date();
  const dueDate = new Date(card.date);

  const dueInMs = dueDate.getTime() - today.getTime();
  const dueInDays = Math.floor(dueInMs / (24 * 60 * 60 * 1000));
  const overdue = dueInDays < 0;

  return (
    <OverlayTrigger
      key={card.id + "tooltip"}
      placement={"bottom-end"}
      overlay={
        <Tooltip id={`tooltip-deadline`}>
          {overdue && `${Math.abs(dueInDays)} days overdue`}
          {!overdue && (
            <span>
              Due by <strong>{card.date}</strong>
            </span>
          )}
        </Tooltip>
      }
    >
      <Badge
        className={`text-${
          overdue ? "danger" : "secondary"
        } d-flex align-items-center`}
        variant="light"
      >
        <i className="bi bi-alarm mr-1"></i>
        <span>{`${overdue ? "+" : ""} ${Math.abs(dueInDays)} days`}</span>
      </Badge>
    </OverlayTrigger>
  );
};
