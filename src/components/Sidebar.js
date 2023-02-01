import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import SubscriptionIcon from '@mui/icons-material/Subscriptions'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import HistoryIcon from '@mui/icons-material/History'
import OnedemandVideoIcon from '@mui/icons-material/Slideshow'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import ThumbsUpAltOutIcon from '@mui/icons-material/ThumbUpAltOutlined'
import DownloadIcon from '@mui/icons-material/Download'
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined'
import MusicIcon from '@mui/icons-material/MusicNote'
import MoviesIcon from '@mui/icons-material/MovieCreation'
import LiveIcon from '@mui/icons-material/LiveTv'
import GameingIcon from '@mui/icons-material/SportsEsports'
import NewsIcon from '@mui/icons-material/Newspaper'
import SportsIcon from '@mui/icons-material/EmojiEvents'
import LearningIcon from '@mui/icons-material/Lightbulb'
import FashionIcon from '@mui/icons-material/Diamond'
import YoutubeIcon from '@mui/icons-material/YouTube'
import YoutubeCreationIcon from '@mui/icons-material/AddCircle'
import YoutubeMusicIcon from '@mui/icons-material/PlayCircle'
import YoutubeTvIcon from '@mui/icons-material/Tv'
import YoutubeSettingIcon from '@mui/icons-material/Settings'
import YoutubeReportIcon from '@mui/icons-material/EmojiFlags'
import YoutubeHelpIcon from '@mui/icons-material/HelpOutline'
import YoutubeFeedIcon from '@mui/icons-material/Announcement'

import SidebarRow from './SidebarRow'

function Sidebar() {
    return (
        <div className='sidebar-box'>
            <div className='sidebar'>
                <SidebarRow selected Icon={HomeIcon} title="Home" />
                <SidebarRow Icon={WhatshotIcon} title="Trending" />
                <SidebarRow Icon={SubscriptionIcon} title="Subscription" />
                <hr />
                <SidebarRow Icon={VideoLibraryIcon} title="Library" />
                <SidebarRow Icon={HistoryIcon} title="History" />
                <SidebarRow Icon={OnedemandVideoIcon} title="Your Videos" />
                <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
                <SidebarRow Icon={DownloadIcon} title="Dowloads" />
                <SidebarRow Icon={ThumbsUpAltOutIcon} title="Liked Videos" />
                <SidebarRow Icon={ExpandMoreIcon} title="Show more" />
                <hr />
                <h5>Subscriptions</h5>
                <SidebarRow image={"https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz"} title="KnowledgabelVideos" />
                <SidebarRow image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiaYlh8O9GE3ODuJLszHwOpfcIf_n1hpHK7w&usqp=CAU"} title="GymLover" />
                <SidebarRow image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2uG4s0mTtrysPTL4ptI-IZ60axBzEuLiNA&usqp=CAU"} title="CricketNews" />
                <SidebarRow image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZzsyDFxHXikxfDIv9CrIn3cQ77SIA1or8g&usqp=CAU"} title="Cooking" />
                <SidebarRow Icon={ExpandMoreIcon} title="Show more" />

                <hr></hr>

                <h5>Explore</h5>

                <SidebarRow Icon={WhatshotIcon} title="Trending" />
                <SidebarRow Icon={MusicIcon} title="Music" />
                <SidebarRow Icon={MoviesIcon} title="Movies" />
                <SidebarRow Icon={LiveIcon} title="Live" />
                <SidebarRow Icon={GameingIcon} title="Gaming" />
                <SidebarRow Icon={NewsIcon} title="News" />
                <SidebarRow Icon={SportsIcon} title="Sports" />
                <SidebarRow Icon={LearningIcon} title="Learning" />
                <SidebarRow Icon={FashionIcon} title="Fashion & Beauty" />

                <hr />

                <h5>More from Youtube</h5>

                <SidebarRow Icon={YoutubeIcon} title="YouTube Premium" />
                <SidebarRow Icon={YoutubeCreationIcon} title="Creator Studio" />
                <SidebarRow Icon={YoutubeMusicIcon} title="YouTube Music" />
                <SidebarRow Icon={YoutubeTvIcon} title="YouTube Tv" />

                <hr />

                <SidebarRow Icon={YoutubeSettingIcon} title="Setting" />
                <SidebarRow Icon={YoutubeReportIcon} title="Report History" />
                <SidebarRow Icon={YoutubeHelpIcon} title="Help" />
                <SidebarRow Icon={YoutubeFeedIcon} title="Send Feedback" />

                <hr />

                <p>About Press Copyright Contactus Creators Advertise Developers</p>
                <p>Terms Privacy Policy & Safety How YouTube works Test new features</p>
                <p className='copyright'>&copy; 2023 Google LLC</p>

            </div>
        </div>
    )
}

export default Sidebar
