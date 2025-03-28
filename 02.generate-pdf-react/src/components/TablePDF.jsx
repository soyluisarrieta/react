import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  body: {
    width: '100vw',
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
    flexDirection: 'row',
    padding: '10px 0',
    color: '#4169ea',
    backgroundColor: '#e8edf9',
    borderBottom: '1px solid #4169ea'
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
    padding: '10px 0'
  },
  tableRowEven: {
    margin: 'auto',
    flexDirection: 'row',
    padding: '10px 0',
    backgroundColor: '#f8f9fd'
  },
  tableCol: {
    width: '25%'
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10
  }
})

export function TablePDF ({ columns, rows }) {
  const columnsCount = columns.length

  return (
    <Document title='tablita'>
      <Page size='A4' style={styles.body}>
        <View style={styles.table}>
          <View style={styles.tableRowHead}>
            {columns.map((col, indexCol) => (
              <View style={styles.tableCol} key={indexCol}>
                <Text style={styles.tableCell}>{col}</Text>
              </View>
            ))}
          </View>

          {rows.slice(0, columnsCount).map((row, indexRow) => (
            <View
              key={'row' + indexRow}
              style={indexRow % 2 ? styles.tableRowEven : styles.tableRow}
            >
              {row.map((cell, indexCell) => (
                <View key={'cell' + indexCell} style={styles.tableCol}>
                  <Text style={styles.tableCell}>{cell}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>

  )
}
