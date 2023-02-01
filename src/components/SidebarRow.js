import Avatar from '@mui/material/Avatar'
import React from 'react'
import './sidebarrow.css'

function SidebarRow({Icon,title,selected,image}) {
  return (
    <div className={`sidebarrow ${selected && "selected"}`}>
       {!image ? <Icon className="sidebarRow__icon"/> : 
       <Avatar src={image}></Avatar>}
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  )
}

export default SidebarRow
