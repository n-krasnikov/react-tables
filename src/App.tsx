import { FC } from 'react';

import { getTables, addTable } from './mobx-store';

import { TableList } from './components/TableList';

import './App.css';


const tables = getTables();

const App: FC = () => {
  return (
    <>
    <div className='button' onClick={addTable}>Add Table</div>
    <div className='table-container'>
      <TableList tables={tables} />
    </div>
    </>
  );
};

export default App;
