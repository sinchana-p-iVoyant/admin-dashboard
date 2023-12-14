import React from 'react'
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import {formatDate}  from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import { useTheme, lightThemeStyles, darkThemeStyles } from '../../ThemeContext'
import Header from '../../components/header/Header';
import './Calendar.css'
import { List } from 'antd';

export const Calendar = () => {
  
  const darkTheme = useTheme()

  const themeStyles = {
    ...(darkTheme ? darkThemeStyles : lightThemeStyles),
    color: darkTheme ? "#DDE6ED" : "#27374D",
    margin: 0,
    padding: 0
  }

  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <div className='calendar-outer-container'>
      <Header title='CALENDAR' subtitle='Full Calendar Interactive Page' />
      
      <div className="cal-wrapper">
        <div className="cal-sidebar-container">
          <h5>Events</h5>
          <List>
            {
              currentEvents.map((event) => (
                <List.Item>
                  <List.Item.Meta
                    title={event.title}
                    description={
                      <p>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    }
                  />
                  
                </List.Item>
              ))
            }
          </List>
        </div>

        <div className="cal-container">
          <h5>Events</h5>

        </div>
      </div>
    </div>
  )
}
