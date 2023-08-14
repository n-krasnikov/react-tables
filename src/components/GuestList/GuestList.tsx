import { observer } from 'mobx-react';

import { GuestItem } from '../GuestItem';

const GuestList = observer( ({ guests }) => guests.map(guest => <GuestItem key={guest.id} guest={guest} />))

export default GuestList;