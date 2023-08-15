import { FC } from 'react';

import { removeGuest } from '../../mobx-store';
import { IProps } from './GuestItem.props';

import './GuestItem.css';

const GuestItem: FC<IProps> = ({ guest }) => {
  return (
    <div className="guest" key={guest.id}>
      <span>{guest.name}</span>
      <span className='guest-remove' onClick={()=>{removeGuest(guest.tableId, guest.id);}}>X</span>
    </div>
  );
};

export default GuestItem;
