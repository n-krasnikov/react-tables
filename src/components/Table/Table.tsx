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

  const handleCloseTable = () => {
    removeTable(id);
  }

  const guests = getGuests(id);
  return (
    <>
      <div className='table'>
        <h3 className='table-title'>Table {id}</h3>
        <span className='table-close' onClick={handleCloseTable}>X</span>
        <GuestList guests={guests} />
        <div className='table-form'>
          <input type='text' value={name} onChange={handleNameChange}/>
          <button className='form-btn' onClick={handleSetName}>Add Guest</button>
        </div>
      </div>
    </>
  )
}

export default Table;