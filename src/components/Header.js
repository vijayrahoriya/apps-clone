import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import VideCallIcon from '@mui/icons-material/VideoCall'
import VoiceIcon from '@mui/icons-material/KeyboardVoice'
import NottificationIcon from '@mui/icons-material/Notifications'
import Avtar from '@mui/icons-material/AccountCircle'
import YoutubeIcon from '@mui/icons-material/YouTube'

function Header() {
    const [inputSearch, setInputSearch] = useState("")
    return (
        <div className='header'>
            <div className="header__left">
                <MenuIcon />
                <Link to={'/'}>
                    <h2 className='header__logo'>
                        <YoutubeIcon className='icon' style={{color:'red'}}/>
                        YouTube
                        <span className='batch'>IN</span>
                    </h2>
                </Link>
            </div>
            <div className="header__input">
                <input onChange={(e)=> setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder='Search' />
                <Link to={`/search/${inputSearch}`}><SearchIcon className='header__inputButton' /></Link>
                <VoiceIcon className='voice'/>
            </div>
            <div className="header__icons">
                <VideCallIcon className='header__icon' />
                <NottificationIcon  className='header__icon' />
                <span className='batch batch2'>9+</span>
                <Avtar />
            </div>

        </div>
    )
}

export default Header
