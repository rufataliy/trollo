import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import fullCalendarInteraction from "@fullcalendar/interaction";
import { useStore } from "../store";
import { Card } from "./Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { NewCard } from "./NewCard";
import { NewBoard } from "./NewBoard";

export const Calendar = () => {
  const { cards } = useStore();

  const ref = useRef<HTMLDivElement>(null);

  const renderCustomEvent = ({
    event: {
      title,
      id,
      startStr,
      extendedProps: { board_id, type, content },
    },
  }) => {
    return (
      <OverlayTrigger
        trigger="click"
        rootClose
        flip
        overlay={
          <div className="calendar-card p-1 pb-0">
            <Card
              card={{ board_id, id, type, date: startStr, content, title }}
            />
          </div>
        }
      >
        <div>{title}</div>
      </OverlayTrigger>
    );
  };

  const renderCustomDay = (e) => {
    const dateString = e.date.toDateString();
    const localString = e.date.toLocaleDateString("en-CA");
    return (
      <OverlayTrigger
        trigger="click"
        rootClose
        flip
        overlay={
          <div className="calendar-card p-1 pb-0">
            <p className=" text-light calendar-card-add-title p-2 m-0">
              {dateString}
            </p>
            <NewCard date={localString} />
            <NewBoard />
          </div>
        }
      >
        <div className="d-flex align-items-center justify-content-between">
          <span className="d-flex align-items-center">
            <i className="bi bi-calendar-plus mr-3 mt-n1" />
            <span className="add-new-text">New</span>
          </span>
          <span>{e.dayNumberText}</span>
        </div>
      </OverlayTrigger>
    );
  };

  return (
    <div ref={ref} className="calendar-wrapper p-3">
      <FullCalendar
        eventContent={renderCustomEvent}
        dayCellContent={renderCustomDay}
        events={cards}
        plugins={[dayGridPlugin, fullCalendarInteraction]}
        initialView="dayGridMonth"
      />
    </div>
  );
};
