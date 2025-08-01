import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { getWeekMonthYearLabel } from '@/lib/getWeekMonthYearLabel'
import { format, isSameDay } from 'date-fns'
import { es } from 'date-fns/locale'
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon, SparkleIcon } from 'lucide-react'
import { useWeeklyCalendar } from '@/hooks/useWeeklyCalendar'
import { cn } from '@/lib/utils'

export default function App () {
  const [animKey, setAnimKey] = useState(0)

  const {
    today,
    currentDate,
    weekDays,
    direction,
    goTo
  } = useWeeklyCalendar()

  const weekDaysKey = weekDays.map(d => d.toISOString()).join()

  useEffect(() => {
    setAnimKey(prev => prev + 1)
  }, [weekDaysKey])

  return (
    <div className="p-6 max-w-7xl mx-auto">

      {/* Calendar header */}
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-semibold">
          {getWeekMonthYearLabel(currentDate)}
        </h2>
        <div className='flex items-center gap-1'>
          <Button variant='outline' size='icon' onClick={goTo.previousWeek}>
            <ChevronLeftIcon />
          </Button>
          <Button variant='outline' onClick={goTo.today}>Hoy</Button>
          <Button variant='outline' size='icon' onClick={goTo.nextWeek}>
            <ChevronRightIcon />
          </Button>
        </div>
      </header>

      {/* Weekly Calendar */}
      <main
        key={animKey}
        className={cn(
          'grid grid-cols-1 gap-1 md:grid-cols-7 animation-duration-200',
          direction === 'left' ? 'animate-fade-in-right' : 'animate-fade-in-left'
        )}
      >
        {weekDays.map((day) => (
          <div
            key={day.toISOString()}
            className='bg-muted rounded-lg group'
            style={{ height: '30rem' }}
          >
            {/* Calendar days */}
            <header className="mb-4 p-2 text-center pointer-events-none">
              <div className={cn(
                'inline-block px-5 py-1 rounded-lg',
                isSameDay(day, today) && 'bg-primary text-primary-foreground'
              )}>
                <span className="font-bold tracking-tighter text-2xl">
                  {format(day, 'dd')}
                </span>
                <h3 className="text-sm opacity-70 capitalize">
                  {format(day, 'eee', { locale: es })}
                </h3>
              </div>
            </header>

            {/* Buttons to create cards */}
            <div className='px-2'>
              <div
                className="
                  hidden w-full rounded-lg py-10 group-hover:flex justify-center gap-1 opacity-70 hover:opacity-100 transition-opacity
                  [&>button]:not-hover:bg-white [&>button]:not-hover:text-foreground
                "
                style={{ backgroundImage: 'repeating-linear-gradient(120deg, #f0f0f0, #f0f0f0 7px, #d1d5db  9px)' }}
              >
                <Button size='icon'>
                  <PlusIcon />
                </Button>
                <Button size='icon'>
                  <SparkleIcon />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
