/// <reference types="vite/client" />


export interface IGuest {
  id: number;
  name: string;
  tableId: number;
}

export interface ITable {
  id: number;
  guests: IGuest[];
}

export interface IState {
  tables: ITable[];
}
