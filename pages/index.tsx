import React from "react";
import { Home } from "../components";
import { Alert } from "../components";
import { useStore } from "../store";

export default function Index() {
  const { alert } = useStore();

  return (
    <>
      <Home />
      {alert && <Alert />}
    </>
  );
}
