import Head from "next/head";
import React from "react";
import { Header } from "../components";
import { Calendar } from "../components/Calendar";

export function CalendarPage() {
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
