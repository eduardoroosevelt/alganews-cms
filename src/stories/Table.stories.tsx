import React, { useMemo } from 'react';
import { ComponentMeta } from '@storybook/react';

import Table from '../app/components/Table/Table';
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';
import { Column, useTable } from 'react-table';

export default {
  title: 'Example/Table',
  component: Table,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Table>;


type Data = {
  preview: React.ReactNode,
  col1: string,
  col2: string,
  actions: string
}

export function Default() {

  const data = useMemo<Data[]>(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
        actions: 'acções',
        preview: <Icon
          size="14px"
          color="#09f"
          path={mdiOpenInNew}
        />
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        actions: 'acções',
        preview: <Icon
          size="14px"
          color="#09f"
          path={mdiOpenInNew}
        />
      },
      {
        col1: 'whatever',
        col2: 'you want',
        actions: 'acções',
        preview: <Icon
          size="14px"
          color="#09f"
          path={mdiOpenInNew}
        />
      },
      {
        col1: 'batata',
        col2: 'banana',
        actions: 'acções',
        preview: <Icon
          size="14px"
          color="#09f"
          path={mdiOpenInNew}
        />
      },
    ],
    []
  )

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessor: 'preview'
      },
      {
        Header: 'Column 1',
        accessor: 'col1',
        width: 320,
        Cell: (row) => <div style={{ textAlign: "right" }}>{row.value}</div>
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>
      },
      {
        Header: 'Ações',
        accessor: 'actions'
      },
    ],
    []
  )

  const instance = useTable<Data>({ data, columns })

  return <Table<Data> instance={instance} />
}

export function NoData() {

  const data = useMemo<Data[]>(
    () => [

    ],
    []
  )

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        accessor: 'preview'
      },
      {
        Header: 'Column 1',
        accessor: 'col1',
        width: 320,
        Cell: (row) => <div style={{ textAlign: "right" }}>{row.value}</div>
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>
      },
      {
        Header: 'Ações',
        accessor: 'actions'
      },
    ],
    []
  )

  const instance = useTable<Data>({ data, columns })

  return <Table<Data> instance={instance} />
}

