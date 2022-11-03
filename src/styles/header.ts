import styled from "styled-components";

export const MainHeader = styled.div`
    display:flex;
    align-items:Center;
    padding:1rem 2%;
    gap: 20px;
    z-index:1000;

    @media (max-width:728px){
        display:none;
    }
`

export const IconMainWrap = styled.div`
    display:flex;
    gap: 5px;
`

export const IconHolder = styled.div`
    padding:0.7rem;
    background: #0f0f0f;
    color: #d9d9d9;
`

export const SearchWrap = styled.div`
    position:relative;
    color: #d9d9d9;

    > i {
        position:absolute;
        top:50%;
        left:2rem;
        transform: translate(0,-50%);
    }

    > input {
        width:25rem;
        border: 1px solid #0F0F0F;
        padding: 1rem 1rem;
        outline:none;
        background:transparent;
    }
`

export const BannerSection = styled.div`
    width:100%;

    > img {
        width:100%;
        object-fit:contain;
    }
`