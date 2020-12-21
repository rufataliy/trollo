import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useStore } from "../store";
import { Card } from "./Card";
import { useOutsideClick } from "../customHooks";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

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

  const registerEventClick = (id: string, clientX: number, clientY: number) => {
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
      registerEventClick(id, clientX, clientY);
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
  useOutsideClick(ref, unregisterEventClick);
  return (
    <div ref={ref} className="calendar-wrapper p-3">
      <FullCalendar
        eventClick={handleEventClick}
        eventContent={renderCustomEvent}
        events={cards}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  );
};
