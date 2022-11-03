import React from 'react';
import { NavigationBarItem } from 'typescript';
import { MainNavigation, MainSideWrap, UserContainer, NavigationItem, ThinLine } from '../styles/sidebar';

const SideNavigation = () => {
    return(
        <>
            <MainSideWrap>
                <UserContainer>
                    <img 
                        src='image/user.svg'
                        alt='user'
                    />
                    <h3>Hey Aleem!</h3>
                </UserContainer>
                <MainNavigation>
                    {
                        mainNavData.map((item, index) => (
                            <NavigationItem key={index}>
                                <img 
                                    src={`/icon/${item.icon}`}
                                    alt='icon'
                                />
                                <h4>{item.name}</h4>
                            </NavigationItem>
                        ))
                    }
                </MainNavigation>
                <ThinLine />
                <MainNavigation>
                    {
                        secondaryNavData.map((item, index) => (
                            <NavigationItem key={index}>
                                <img 
                                    src={`/icon/${item.icon}`}
                                    alt='icon'
                                />
                                <h4>{item.name}</h4>
                            </NavigationItem>
                        ))
                    }
                </MainNavigation>
                <MainNavigation>
                    <NavigationItem>
                        <img 
                            src={`/icon/playlist.svg`}
                            alt='icon'
                        />
                        <h4>My Playlists</h4>
                    </NavigationItem>
                </MainNavigation>
                <ThinLine />
                <MainNavigation>
                        {
                            otherData.map((item, index) => (
                                <NavigationItem key={index}>
                                    <p>{item}</p>
                                </NavigationItem>
                            ))
                        }
                </MainNavigation>
            </MainSideWrap>
        </>
    )
}

export default SideNavigation;

const mainNavData = [
    {
        name: 'Home',
        icon: 'home.svg',
        active: false
    },
    {
        name: 'Discover',
        icon: 'eyes.svg',
        active: false
    },
]

const secondaryNavData = [
    {
        name: 'Your Library',
        icon: 'album.svg',
        active: false
    },
    {
        name: 'Liked songs',
        icon: 'heart.svg',
        active: false
    },
    {
        name: 'Recently Played',
        icon: 'audio.svg',
        active: false
    },
    {
        name: 'Create Playlist',
        icon: 'playlist.svg',
        active: false
    },
]

const otherData = [
    'Riffs and Runs',
    'African Heat',
    'Gidi Nights',
    'Running out of Playlist na....',
    'Saturday was a Good Day',
    'African Heat'
]