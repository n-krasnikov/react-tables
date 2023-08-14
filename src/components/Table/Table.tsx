import { useState, type FC } from 'react'

import { removeTable, getGuests, addGuest } from '../../mobx-store';
import { IProps } from './Table.props';

import { GuestList } from '../GuestList';

import './Table.css'

const Table: FC<IProps> = ( { id } ) => {
  const [name, setName] = useState('');

  const handleNameChange = ( event ) => {
    setName( (event.target.value).trim() )
  }

  const handleSetName = () => {
    if (name) {
      addGuest(id, name);
      setName('');
    }
  }

  const guests = getGuests(id);
  return (
    <>
      <div className='table'>
        <span>Table {id}</span>
        <span onClick={()=>{removeTable(id)}}>X</span>
        <input type='text' value={name} onChange={handleNameChange}/>
        <button onClick={handleSetName}>Submit</button>
        <GuestList guests={guests} />
      </div>
    </>
  )
}

export default Table;