import { useState } from 'react'

import { Button } from 'react-bootstrap'
import { BlobProvider } from '@react-pdf/renderer'

import { Table } from './components/Table'
import { TablePDF } from './components/TablePDF'

const COLUMNS = [
  'title',
  'description',
  'price',
  'quantity'
]

const ROWS = [
  [
    'Tablet',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    '$5000',
    '3'
  ],
  [
    'TV',
    'Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    '$16000',
    '1'
  ],
  [
    'Portatil',
    'Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    '$20000',
    '2'
  ],
  [
    'PC Desktop',
    'Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    '$50000',
    '1'
  ]
]

const handleOpenPdf = (url) => {
  const options = 'toolbar=yes,scrollbars=yes,resizable=yes,width=800,height=600'
  window.open(url, '_blank', options)
}

function App () {
  const [viewPDF, setViewPDF] = useState(false)

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center gap-3'>
        <Button onClick={() => setViewPDF(!viewPDF)}>
          {viewPDF ? 'Ocultar PDF' : 'Ver PDF'}
        </Button>

        <Button className='btn-danger'>
          <BlobProvider document={<TablePDF columns={COLUMNS} rows={ROWS} />}>
            {({ url }) => url && handleOpenPdf(url)}
          </BlobProvider>

        </Button>
      </nav>

      <Table columns={COLUMNS} rows={ROWS} />

      <div className='text-center text-muted'>
        No hallé el modo de cambiarle el nombre al pdf al descargar en el visor PDF
      </div>
    </>
  )
}

export default App
