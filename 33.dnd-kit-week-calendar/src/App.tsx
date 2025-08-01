import { Button } from '@/components/ui/button'
import { addDays, format, startOfWeek } from 'date-fns'
import { es } from 'date-fns/locale'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

export default function App () {
  const today = new Date()
  const weekStart = startOfWeek(today, { weekStartsOn: 1 })
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Calendar header */}
      <header className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-semibold">Octubre, 2025</h2>
        <div className='flex items-center gap-1'>
          <Button variant='outline' size='icon'>
            <ChevronLeftIcon />
          </Button>
          <Button variant='outline'>Hoy</Button>
          <Button variant='outline' size='icon'>
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
            <div className="mb-4 p-2 text-center">
              <span className="font-bold tracking-tighter text-2xl text-foreground">
                {format(day, 'dd')}
              </span>
              <h3 className="text-sm font-medium text-muted-foreground capitalize">
                {format(day, 'eee', { locale: es })}
              </h3>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
