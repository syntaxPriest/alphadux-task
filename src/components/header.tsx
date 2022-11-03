import React from 'react'
import { IconHolder, MainHeader, SearchWrap, IconMainWrap, BannerSection } from '../styles/header';
import * as Icon from 'react-feather'

const Header = () => {
    return(
        <>
            <MainHeader>
                <IconMainWrap>
                    <IconHolder>
                        <Icon.ChevronLeft />
                    </IconHolder>
                    <IconHolder>
                        <Icon.ChevronRight />
                    </IconHolder>
                </IconMainWrap>
                <SearchWrap>
                    <i><Icon.Search /></i>
                    <input type='text' />
                </SearchWrap>
            </MainHeader>
            <BannerSection>
                <img 
                    src='image/banner.svg'
                    alt='Banner'
                />
            </BannerSection>
        </>
    )
}

export default Header;