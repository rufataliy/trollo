import Head from "next/head";
import React, { useEffect } from "react";
import { Header } from "../components";
import { checkRegisteration } from "../utils";
import Router from "next/router";
import { Calendar } from "../components/Calendar";

export default function Boards() {
  useEffect(() => {
    if (!checkRegisteration()) {
      Router.push("/");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Trollo | Calendar</title>
      </Head>
      <div className="wrapper">
        <Header />
        <main className="p-3">
          <Calendar />
        </main>
      </div>
    </>
  );
}
