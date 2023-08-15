import { observer } from "mobx-react"
import { Table } from "../Table"

const TableList = observer( ({ tables }) => tables.map(table => <Table key={table.id} id={table.id} />));

export default TableList;