import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: black;
    
`