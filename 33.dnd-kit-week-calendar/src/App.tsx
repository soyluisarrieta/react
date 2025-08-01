import { Button } from '@/components/ui/button'
import { getWeekMonthYearLabel } from '@/lib/getWeekMonthYearLabel'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon, SparkleIcon } from 'lucide-react'
import { useWeeklyCalendar } from '@/hooks/useWeeklyCalendar'

export default function App () {
  const { currentDate, weekDays, goTo } = useWeeklyCalendar()
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
      <main className="grid grid-cols-1 gap-1 md:grid-cols-7">
        {weekDays.map((day) => (
          <div
            key={day.toISOString()}
            className='bg-muted rounded-lg group'
            style={{ height: '30rem' }}
          >
            {/* Calendar days */}
            <header className="mb-4 p-2 text-center">
              <span className="font-bold tracking-tighter text-2xl text-foreground">
                {format(day, 'dd')}
              </span>
              <h3 className="text-sm font-medium text-muted-foreground capitalize">
                {format(day, 'eee', { locale: es })}
              </h3>
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
