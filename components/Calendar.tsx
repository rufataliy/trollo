import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import fullCalendarInteraction from "@fullcalendar/interaction";
import { useStore } from "../store";
import { Card } from "./Card";
import { useOutsideClick } from "../customHooks";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { NewCard } from "./NewCard";
import { NewBoard } from "./NewBoard";

const positionsDefault = {
  clientX: null,
  clientY: null,
};

export const Calendar = () => {
  const {
    cards,
    selectedCard,
    saveCalendarEvent,
    resetCalendarEvent,
  } = useStore();
  const [{ clientX, clientY }, setCardPosition] = useState(positionsDefault);
  const ref = useRef<HTMLDivElement>(null);

  const registerDateClick = (id: string, clientX: number, clientY: number) => {
    setCardPosition(() => ({
      clientX,
      clientY,
    }));
    saveCalendarEvent(id);
  };

  const unregisterEventClick = () => {
    setCardPosition(positionsDefault);
    resetCalendarEvent();
  };

  const handleEventClick = ({
    event: { id },
    jsEvent: { clientX, clientY },
  }) => {
    if (!selectedCard || selectedCard.id !== id) {
      registerDateClick(id, clientX, clientY);
    } else {
      unregisterEventClick();
    }
  };

  try {
    var flip = window?.innerWidth - clientX < 200;
    var flipClientX = window?.innerWidth - 350;
  } catch (e) {}

  const style = {
    left: `${flip ? flipClientX : clientX}px`,
    top: `${clientY}px`,
    transform: "scale(1)",
    opacity: 1,
  };
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
        placement="right"
        rootClose
        onHide={unregisterEventClick}
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
        placement="right"
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
          <span>add</span>
          <span>{e.dayNumberText}</span>
        </div>
      </OverlayTrigger>
    );
  };

  useOutsideClick(ref, unregisterEventClick);
  return (
    <div ref={ref} className="calendar-wrapper p-3">
      <FullCalendar
        eventClick={handleEventClick}
        eventContent={renderCustomEvent}
        dayCellContent={renderCustomDay}
        events={cards}
        plugins={[dayGridPlugin, fullCalendarInteraction]}
        initialView="dayGridMonth"
      />
    </div>
  );
};
