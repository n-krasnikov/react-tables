import { observable, action } from 'mobx';

import { IState } from "../vite-env"


const state = observable<IState>({
  tables: []
})

export const addTable = action(() => {
  console.log('addTable')
  state.tables.push({id: state.tables.length + 1, guests: []})
})

export const removeTable = action((tableId: number) => {
  const table = state.tables.find((t) => t.id === tableId);
  if (table) {
    const index = state.tables.indexOf(table);
    state.tables.splice(index, 1);
  }
})

export const addGuest = action((tableId: number, guestName: string) => {
  const table = state.tables.find((t) => t.id === tableId);
  if (table) {
    table.guests.push({name: guestName, id: table.guests.length + 1, tableId: tableId});
  }
})

export const removeGuest = action((tableId: number, guestId: number) => {
  const table = state.tables.find((t) => t.id === tableId);
  if (table) {
    const guest = table.guests.find((g) => g.id === guestId);
    if (guest) {
      const index = table.guests.indexOf(guest);
      table.guests.splice(index, 1);
    }
  }
})

export const getTables = () => {
  return state.tables;
}

export const getGuests = (tableId: number) => {
  const table = state.tables.find((t) => t.id === tableId);
  if (table) {
    return table.guests;
  }
}