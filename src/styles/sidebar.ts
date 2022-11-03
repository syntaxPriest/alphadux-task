import styled from "styled-components";

export const MainSideWrap = styled.div`
    width:20%;
    background:#000000;
    color: #D9D9D9;
    position:sticky;
    top:0;
    left:0;
    height:100vh;
    
    @media (max-width:728px){
        display:none;
    }
`

export const UserContainer = styled.div`
    display:flex;
    align-items:Center;
    background: #0F0F0F;
    color: #fff;
    gap:15px;
    padding:1rem 1.5rem;

    > img {
        width:5rem;
        height:5rem;
        object-fit:cover;
        border-radius:50%;
    }
`

export const MainNavigation = styled.div`
    background: url('image/bg.svg');
    padding:1rem 1.5rem 0 1.5rem;
    line-height:5px;
`

export const NavigationItem = styled.div`
    display:flex;
    align-items:Center;
    gap:15px;

    h4 {
        font-weight: 600;
        font-size: 16px;
    }

    p {
        font-weight: 500;
        font-size: 16px;
    }
`

export const ThinLine = styled.hr`
    border-top:none;
    border-bottom: 0.2px solid #282828;
`