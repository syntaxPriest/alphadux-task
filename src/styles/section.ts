import styled from "styled-components";

interface PropsArgs {
    bg?: string;
}

export const SectionCard = styled.div`
    padding: 1rem 0;
    border: 1px solid #707070;
    margin:1rem 1rem 0 0;
`

export const InnerCard = styled.div`
    // width:100%;
    position:relative;
    // background: linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%);
`;

export const InnerImage = styled.img<PropsArgs>`
    width: 90%;
    margin: 0 auto;
    padding: 0 5%;
    background: ${p => p.bg || 'linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%)'};
`;

export const TextCard = styled.div<PropsArgs>`
    padding: 0.4rem 5%;
    background: ${p => p.bg || 'linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%)'};

    > p {
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.04em;
        color: rgba(255, 255, 255, 0.9);
    }

`