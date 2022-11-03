import React from 'react'
import { BottomNavWrap } from '../styles/bottomnav';

const BottomNav = () => {
    return(
        <>
            <BottomNavWrap>
                <img 
                    src='icon/home.svg'
                    alt='Home'
                />
                <img 
                    src='icon/eyes.svg'
                    alt='eyes'
                />
                <img 
                    src='icon/album.svg'
                    alt='album'
                />
                <img 
                    src='icon/record.svg'
                    alt='playlist'
                />
            </BottomNavWrap>
        </>
    )
}

export default BottomNav;