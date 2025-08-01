import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

export default function App () {

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="flex items-center justify-between">
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
    </div>
  )
}
