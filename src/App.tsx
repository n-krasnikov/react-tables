import { FC } from 'react';
import { getTables, addTable } from './mobx-store'

import { TableList } from './components/TableList'

import './App.css'


const tables = getTables();

const App: FC = () => {
  return (
    <>
    <TableList tables={tables} />
    <button onClick={addTable}>add table</button>
    </>
  )
}

export default App
