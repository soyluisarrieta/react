import { useEffect, useState } from 'react'
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createResizePlugin } from '@schedule-x/resize'
import { createEventModalPlugin } from '@schedule-x/event-modal'
 
 
import '@schedule-x/theme-default/dist/index.css'
function Calendar() {
  const eventsService = useState(() => createEventsServicePlugin())[0]
 
  const calendar = useCalendarApp({
    locale: 'es-ES',
    isDark: true,
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: '2025-01-01',
        end: '2025-01-14',
      },
    ],
    plugins: [eventsService, createEventModalPlugin(), createDragAndDropPlugin(), createResizePlugin()]
  })
 
  useEffect(() => {
    eventsService.getAll()
  }, [])
 
  return (
    <div id='calendar'>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}
 
export default Calendar