import { useMemo } from "react";
import { Column, useTable } from "react-table";

type Data = {
  col1: string,
  col2: string,
  actions: string
}


export default function Table() {

  const data = useMemo<Data[]>(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
        actions: 'acções'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        actions: 'acções'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        actions: 'acções'
      },
    ],
    []
  )

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1'
      },
      {
        Header: 'Column 2',
        accessor: 'col2'
      },
    ],
    []
  )


  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows
  } = useTable<Data>({ data, columns })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
              headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))
            }
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>

        {
          rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })
        }

      </tbody>
    </table>
  )
}