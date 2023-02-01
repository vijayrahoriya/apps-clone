import React from 'react'
import './videorow.css';

function VideoRow({views,subs,description,timestamp,channel,title,image}) {
  return (
    <div className='videoRow'>
      <img src={image}></img>
      <div className='videoRow__text'>
        <h3>{title}</h3>
        <p className='video__headline'>{channel} * <span className='videorow-subs'><span className='subs'>{subs}</span> Subscribers</span>  {views} views * {timestamp}</p>
        <p className='video__desc'>{description}</p>
      </div>
    </div>
  )
}

export default VideoRow
