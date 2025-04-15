import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './styles.module.css';
import { RRule } from 'rrule';

// Set the first day of the week to Monday globally for moment
moment.updateLocale('en', {
  week: {
    dow: 1, // Monday is the first day of the week
  },
});

const localizer = momentLocalizer(moment);

const MeetingCalendar = ({ meetings }) => {
  // Transform meetings data into events for the calendar
  const events = meetings.flatMap((meeting) => {
    if (meeting.recurrence) {
      // Generate recurring events using RRule
      const rule = new RRule({
        freq: meeting.recurrence.freq === "BIWEEKLY" ? RRule.WEEKLY : RRule[meeting.recurrence.freq],
        interval: meeting.recurrence.freq === "BIWEEKLY" ? 2 : 1, // Set interval to 2 for bi-weekly events
        dtstart: new Date(meeting.start),
        until: meeting.recurrence.until ? new Date(meeting.recurrence.until) : undefined,
      });
      return rule.all().map((date) => ({
        title: meeting.title,
        start: date,
        end: new Date(date.getTime() + (new Date(meeting.end) - new Date(meeting.start))),
        description: meeting.description,
        link: `#${meeting.title}`,
        isRecurring: true, // Mark as recurring
      }));
    }
    return {
      title: meeting.title,
      start: new Date(meeting.start),
      end: new Date(meeting.end),
      description: meeting.description,
      link: `#${meeting.title}`,
      isRecurring: false, // Mark as non-recurring
    };
  });

  // Define event styling based on recurrence
  const eventPropGetter = (event) => {
    const backgroundColor = event.isRecurring ? '#afc72d' : '#faa023';
    return {
      style: { backgroundColor }
    };
  };

  return (
    <div className={styles.calendarContainer}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className={styles.rbcCalendar}
        eventPropGetter={eventPropGetter} // Apply custom styles
        views={['month', 'week', 'day']}
        defaultView="month"
        onSelectEvent={(event => {
          if (event.link) {
            window.location.href = event.link;
          }
        }
        )}
        showAllEvents={true}
        // popup={true}
        components={{
          week: {

            /*event: ({ event }) => (
              <span>
                <strong>{event.title}</strong>
                <br />
                {event.description}
              </span>
            ),*/
          },
        }}

      />
    </div>
  );
};

export default MeetingCalendar;
