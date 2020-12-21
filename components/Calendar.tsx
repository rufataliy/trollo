import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useStore } from "../store";

export const Calendar = () => {
  const { cards } = useStore();

  return (
    <div className="calendar-wrapper p-3">
      <FullCalendar
        events={cards}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  );
};
