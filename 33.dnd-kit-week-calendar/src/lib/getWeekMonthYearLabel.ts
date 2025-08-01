import { capitalize } from '@/lib/capitalize'
import { addDays, format, startOfWeek } from 'date-fns'
import { es } from 'date-fns/locale'

/**
 * Returns a formatted label for the week.
 * Example: "October, 2025" or "Oct - Nov, 2025"
 */
export function getWeekMonthYearLabel (date: Date): string {
  const weekStart = startOfWeek(date, { weekStartsOn: 1 }) // Monday
  const weekEnd = addDays(weekStart, 6)

  const startMonth = weekStart.getMonth()
  const endMonth = weekEnd.getMonth()
  const year = weekEnd.getFullYear()

  if (startMonth === endMonth) {
    const fullMonthName = format(weekStart, 'MMMM', { locale: es })
    return `${capitalize(fullMonthName)}, ${year}`
  } else {
    const shortStart = format(weekStart, 'LLL', { locale: es }) // "Oct"
    const shortEnd = format(weekEnd, 'LLL', { locale: es })     // "Nov"
    return `${capitalize(shortStart)} - ${capitalize(shortEnd)}, ${year}`
  }
}
