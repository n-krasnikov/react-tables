import { observer } from 'mobx-react';

import { IProps } from './GuestList.props';

import { GuestItem } from '../GuestItem';

const GuestList = observer( ({ guests }: IProps) => guests.map(guest => <GuestItem key={guest.id} guest={guest} />));

export default GuestList;
