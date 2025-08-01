export const MOCK_TASKS: Record<string, {
  id: string
  title: string
  description?: string
  time: string
  color: string
}[]> = {
  '2025-08-01': [
    {
      id: '1',
      title: 'Reunión de planificación',
      description: 'Sprint 34',
      time: '09:00',
      color: 'bg-blue-100 border-blue-300'
    },
    {
      id: '2',
      title: 'Revisión de diseño',
      description: 'Mockups Figma',
      time: '14:00',
      color: 'bg-green-100 border-green-300'
    }
  ],
  '2025-08-03': [
    {
      id: '3',
      title: 'Demo del producto',
      description: 'Cliente: ACME Corp',
      time: '11:30',
      color: 'bg-purple-100 border-purple-300'
    }
  ],
  '2025-08-05': [
    {
      id: '4',
      title: 'QA testing',
      description: 'Revisión final',
      time: '16:00',
      color: 'bg-yellow-100 border-yellow-300'
    },
    {
      id: '5',
      title: 'Presentación interna',
      description: 'Equipo de marketing',
      time: '10:00',
      color: 'bg-red-100 border-red-300'
    }
  ]
}
