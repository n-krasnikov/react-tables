import { FC } from "react"

import { removeGuest } from "../../mobx-store"

import { IProps } from "./GuestItem.props"

const GuestItem: FC<IProps> = ({ guest }) => {
  return (
    <div key={guest.id}>
      <span>{guest.name}</span>
      <span onClick={()=>{removeGuest(guest.tableId, guest.id)}}>X</span>
    </div>
  )
}

export default GuestItem;