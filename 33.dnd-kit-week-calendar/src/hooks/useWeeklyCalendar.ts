import { addDays, addWeeks, isAfter, isBefore, startOfWeek, subWeeks } from 'date-fns'
import { useState } from 'react'

export const useWeeklyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 })
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

  return {
    today: new Date(),
    currentDate,
    direction,
    weekDays,
    goTo: {
      previousWeek: () => {
        setDirection('left')
        setCurrentDate(prev => subWeeks(prev, 1))
      },
      nextWeek: () => {
        setDirection('right')
        setCurrentDate(prev => addWeeks(prev, 1))
      },
      today: () => {
        const now = new Date()
        if (isBefore(now, currentDate)) setDirection('right')
        else if (isAfter(now, currentDate)) setDirection('left')
        setCurrentDate(now)
      }
    }
  }
}
