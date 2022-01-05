import styled from "styled-components"

export const FooterContainer = styled.div`
    width: 100%auto;
    height: 300px;
    background-color: yellow;
    display: flex;
    position: relative;
`

export const FooterLeft = styled.div`
    flex: 1;
    display: flex;
    background: green;
    justify-content: space-around;
    align-items: center;
`

export const FooterRight = styled.div`
    flex: 1;
    display: flex;
    background: blue;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img`
    height: 250px;
    object-fit: contain;
`