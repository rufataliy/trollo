import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { CustomToggle } from "./CustomToggle";

interface Props {
  text?: string;
  id: string;
  reset: () => void;
}

export const DropDown: React.FC<Props> = ({ children, text, id, reset }) => {
  return (
    <Dropdown onToggle={() => reset()} flip>
      <Dropdown.Toggle variant="success" id={id} as={CustomToggle} />
      <Dropdown.Menu rootCloseEvent="click">
        <Dropdown.Header className="text-center pt-1 pb-1">
          Options
        </Dropdown.Header>
        {children?.map((child, index) => {
          return <Dropdown.Item as={() => child} key={index} className="p-0" />;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
