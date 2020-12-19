import React from "react";
import Button from "react-bootstrap/Button";

interface ToggleProps {
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const CustomToggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ children, onClick }, ref) => (
    <Button
      className="btn btn-sm btn-light"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <i className="bi bi-three-dots-vertical"></i>
    </Button>
  )
);
