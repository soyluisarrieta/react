import { addDays, addWeeks, startOfWeek, subWeeks } from 'date-fns'
import { useState } from 'react'

export const useWeeklyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 })
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

  return {
    currentDate,
    weekDays,
    goTo: {
      previousWeek: () => setCurrentDate(prev => subWeeks(prev, 1)),
      nextWeek: () => setCurrentDate(prev => addWeeks(prev, 1)),
      today: () => setCurrentDate(new Date())
    }
  }
}
