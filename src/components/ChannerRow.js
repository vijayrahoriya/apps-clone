import { Avatar } from '@mui/material'
import React from 'react'
import './channelrow.css'
import VerifiedCircleOutlineIcon from '@mui/icons-material/VerifiedOutlined'

function ChannerRow({image,channel,verified,subs,noOfVideos,description}) {
  return (
    <div className='channelrow'>
      <Avatar className='channelrow__logo' src={image}></Avatar>
      <div className='channelrow__text'>
        <h4>{channel} {verified && <VerifiedCircleOutlineIcon/>}</h4>
        <p>{subs} subscribers * {noOfVideos} videos</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannerRow
