import TuneOutlined  from '@mui/icons-material/TuneOutlined'
import React from 'react'
import ChannerRow from './ChannerRow'
import './searchpage.css'
import VideoRow from './VideoRow'

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_filter'>
        <TuneOutlined/>
        <h2>Filter</h2>
      </div>
      <hr/>
      <ChannerRow 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZzsyDFxHXikxfDIv9CrIn3cQ77SIA1or8g&usqp=CAU"
      channel="Cooking"
      verified
      subs="500k"
      noOfVideos={120}
      description="You can find awesome videos on this channel about cooking"
      />

      <hr></hr>

      <VideoRow
      views="1.9M"
      subs="500k"
      description="Do you want to learn about cooking"
      timestamp="1mins ago"
      channel="Cooking"
      title="let's cooked something"
      image="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNvb2tpbmd8ZW58MHx8MHx8&w=1000&q=80"
      />
      <VideoRow
      views="2M"
      subs="500k"
      description="Do you want to learn about cooking"
      timestamp="10mins ago"
      channel="Cooking"
      title="Make food"
      image="https://i.ytimg.com/vi/pgMUHEIBNMs/maxresdefault.jpg"
      />
      <VideoRow
      views="1.9M"
      subs="500k"
      description="Do you want to learn about cooking"
      timestamp="1hour ago"
      channel="Cooking"
      title="Make noodles in 10 minutes"
      image="https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29va2luZyUyMGluJTIwa2l0Y2hlbnxlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <VideoRow
      views="4M"
      subs="500k"
      description="Do you want to learn about cooking"
      timestamp="40mins ago"
      channel="Cooking"
      title="Make pasta in a new way"
      image="https://www.helpguide.org/wp-content/uploads/cooking-hotpot.jpg"
      />
      <VideoRow
      views="1.9M"
      subs="500k"
      description="Do you want to learn about cooking"
      timestamp="1hour ago"
      channel="Cooking"
      title="24 hours cooking challenge"
      image="https://i.ytimg.com/vi/pgMUHEIBNMs/maxresdefault.jpg"
      />
      <VideoRow
      views="1.9M"
      subs="500k"
      description="Do you want to learn about cooking"
      timestamp="2hours ago"
      channel="Cooking"
      title="Do you know about some cooking methods"
      image="https://img.jakpost.net/c/2018/06/27/2018_06_27_48298_1530062479._large.jpg"
      />

    </div>
  )
}

export default SearchPage
