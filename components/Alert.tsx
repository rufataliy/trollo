import React from "react";
import AlertBootstrap from "react-bootstrap/Alert";
import { useStore } from "../store";

export const Alert = () => {
  const { alert, resetAlert } = useStore();

  return (
    <AlertBootstrap
      className="alert"
      variant={alert.variant}
      onClose={resetAlert}
      dismissible
    >
      {alert.titie ? (
        <AlertBootstrap.Heading>{alert.titie}</AlertBootstrap.Heading>
      ) : null}
      <p>{alert.text}</p>
    </AlertBootstrap>
  );
};
