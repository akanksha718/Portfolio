import styled from 'styled-components';
export const Div = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .BgAnimation__svg {
        width: 100%;
        height: auto;
        max-width: 600px;
    }
    
    @media (max-width: 960px) {
        .BgAnimation__svg {
            max-width: 500px;
        }
    }
    
    @media (max-width: 640px) {
        .BgAnimation__svg {
            max-width: 100%;
        }
    }
`