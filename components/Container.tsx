import React from "react";

interface Props {
  board: Board;
}

export const Container: React.FC<Props> = ({ children, board }) => {
  return (
    <div className="card-container">
      <div className="card-container-header p-2">
        <h5 className="m-0">{board.title}</h5>
      </div>
      <div className="card-container-list p-2">{children}</div>
      <div className="card-container-footer p-2"></div>
    </div>
  );
};
