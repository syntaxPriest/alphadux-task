import styled from 'styled-components';

export const MainWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    color: #d9d9d9;
`

export const MainBody = styled.div`
    width:76%;
    padding: 1rem 2%;
    background: #000000;

    @media (max-width:728px){
        width: 96%;
    }
`