import React from 'react'

const styles = {
  body: {
    width: '100%',
    height: '100%',
    padding: 30
  },
  table: {
    display: 'table',
    width: '100%',
    borderBottom: '1px solid #e5e5e5'
  },
  tableRowHead: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 0',
    color: '#4169ea',
    backgroundColor: '#e8edf9',
    borderBottom: '1px solid #4169ea'
  },
  tableRow: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 0'
  },
  tableRowEven: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 0',
    backgroundColor: '#f8f9fd'
  },
  tableCol: {
    width: '100%'
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 12,
    padding: '10px 20px'
  }
}

export function Table ({ columns, rows }) {
  const columnsCount = columns.length

  return (
    <div>
      <div style={styles.body}>
        <div style={styles.table}>
          <div style={styles.tableRowHead}>
            {columns.map((col, indexCol) => (
              <div style={styles.tableCol} key={indexCol}>
                <span style={styles.tableCell}>{col}</span>
              </div>
            ))}
          </div>

          {rows.slice(0, columnsCount).map((row, indexRow) => (
            <div
              key={'row' + indexRow}
              style={indexRow % 2 ? styles.tableRowEven : styles.tableRow}
            >
              {row.map((cell, indexCell) => (
                <div key={'cell' + indexCell} style={styles.tableCol}>
                  <span style={styles.tableCell}>{cell}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
