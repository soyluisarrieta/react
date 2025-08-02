import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { getWeekMonthYearLabel } from '@/lib/getWeekMonthYearLabel'
import { format, isSameDay } from 'date-fns'
import { es } from 'date-fns/locale'
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon, SparkleIcon } from 'lucide-react'
import { useWeeklyCalendar } from '@/hooks/useWeeklyCalendar'
import { cn } from '@/lib/utils'
import { MOCK_TASKS, type Task } from '@/mocks/Tasks'
import TaskCard from '@/components/TaskCard'
import { DroppableColumn } from '@/components/DroppableColumn'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { sortTasksByTime } from '@/lib/sortTasksByTime'
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent
} from '@dnd-kit/core'

export default function App () {
  const [tasksByDay, setTasksByDay] = useState(MOCK_TASKS)
  const [activeTask, setActiveTask] = useState<Task | null>(null)
  const [animKey, setAnimKey] = useState(0)

  // Calendar navigation
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

  // Active dnd after 8px
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8
      }
    })
  )

  // dnd handlers
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event
    const taskId = active.id as string

    // Active overlay task
    for (const [_, dayTasks] of Object.entries(tasksByDay)) {
      const task = dayTasks.find((t) => t.id === taskId)
      if (task) {
        setActiveTask(task)
        break
      }
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over || active.id === over.id) return

    const activeId = active.id
    const destinationDay = Object.keys(tasksByDay).find(day =>
      tasksByDay[day].some(task => task.id === over.id)
    ) ?? over.id

    // Get current day of task
    const originDay = Object.keys(tasksByDay).find(day =>
      tasksByDay[day].some(task => task.id === activeId)
    )

    if (!originDay || originDay === destinationDay) return

    // Get task
    const activeTask = tasksByDay[originDay].find(task => task.id === activeId)
    if (!activeTask) return

    // Update tasks position
    setTasksByDay(prev => {
      const newOrigin = prev[originDay].filter(task => task.id !== activeId)
      const newDest = [...(prev[destinationDay] || []), activeTask]
      return {
        ...prev,
        [originDay]: newOrigin,
        [destinationDay]: newDest
      }
    })
  }

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
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <main
          key={animKey}
          className={cn(
            'grid grid-cols-1 gap-1 md:grid-cols-7 animation-duration-200',
            direction === 'left' ? 'animate-fade-in-right' : 'animate-fade-in-left'
          )}
        >
          {weekDays.map((day) => {
            const dayId = format(day, 'yyyy-MM-dd')
            const dayTasks = sortTasksByTime(tasksByDay[dayId] || [])

            return (
              <DroppableColumn key={dayId} id={dayId}>
                <div
                  className='bg-muted rounded-lg group'
                  style={{ height: '30rem' }}
                >
                  {/* Calendar days */}
                  <header className="p-2 text-center pointer-events-none">
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

                  {/* Card list */}
                  <div className='space-y-2'>
                    <SortableContext
                      items={dayTasks.map(task => task.id)}
                      strategy={verticalListSortingStrategy}
                    >
                      {dayTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                      ))}
                    </SortableContext>

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
                </div>
              </DroppableColumn>
            )
          })}
        </main>

        <DragOverlay>
          {activeTask ? (
            <div className={`p-3 rounded-lg border-2 shadow-lg ${activeTask.color} opacity-90`}>
              <h4 className="font-medium text-sm">{activeTask.title}</h4>
              {activeTask.description && <p className="text-xs text-gray-600 mt-1">{activeTask.description}</p>}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  )
}
