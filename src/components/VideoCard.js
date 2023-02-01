import { Avatar } from '@mui/material'
import React from 'react'
import './videocard.css'

function VideoCard({image,title,channel,views,timestamp,channelImage}) {
  return (
    <div className='videocard'>
      <img className='thumbnail' src={image} alt="" />
      <div className="video__info">
        <Avatar className='videoCard__avatar' src={channelImage}></Avatar>
        <div className="video__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
                {views} * {timestamp}
            </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
