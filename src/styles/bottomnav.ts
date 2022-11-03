import styled from "styled-components";

export const BottomNavWrap = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    display:none;
    align-items:center;
    width:86%;
    padding:1rem 7%;
    justify-content:space-between;
    background: #000000;

    > img {
        width:1rem;
    }

    @media (max-width:728px){
        display:flex;
    }
`