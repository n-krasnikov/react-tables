import { observer } from 'mobx-react';

import { IProps } from './TableList.props';

import { Table } from '../Table';

const TableList = observer( ({ tables }: IProps) => tables.map(table => <Table key={table.id} id={table.id} />));

export default TableList;
