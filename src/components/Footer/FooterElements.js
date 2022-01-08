import styled from "styled-components"

export const FooterContainer = styled.footer`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: black;
    border-top: 5px solid #fafafd;

    @media screen and (max-width: 1000px){
        height: 700px;
    }
`

export const FooterFirst = styled.div`
    flex: 1.3;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`

export const Logo1 = styled.img`
    height: 17vw;
    padding: 10px;

    @media screen and (max-width: 1400px){
        height: 21vw;
        padding: 10px
    }

    @media screen and (max-width: 900px){
        height: 28vw;
        padding: 10px;
    }

    @media screen and (max-width: 800px){
        height: 24vw;
        padding: 10px;
    }
    @media screen and (max-width: 552px){
        height:35vw;
    }
`

export const Logo2 = styled.img`
    width: 23vw;
    padding: 0 10px;

    @media screen and (max-width: 1000px){
        width: 32vw;
        padding: 0 10px;
    }

    @media screen and (max-width: 552px){
        width: 45vw;
    }
`

export const FooterSecond = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
`

export const ContactBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    padding: 10px;
`

export const ContactName = styled.h2`
    font-size: 22px;
    font-weight: 600;
`

export const ContactNumber = styled.a`
    font-size: 18px;
    text-decoration: none;
    color: inherit;
`

export const IconContainer = styled.a`

`

export const Icon = styled.img`
    height: 30px;
    margin: 6px;

    @media screen and (max-width: 550px){
        margin-left: 0;
        padding: 4px;
    }
`

export const FooterThird = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 340px;
    width: 400px;
    flex-direction: column;

    @media screen and (max-width: 1000px){
        justify-content: flex-start;
        padding: 30px;
    }
`

export const UpperLine = styled.hr`
    width: 70%;
    margin-bottom: 40px;
    color: white;
    visibility: hidden;

    @media screen and (max-width: 1000px){
        visibility: visible;
    }
`

export const Prompt = styled.p`
    color: white;
    font-size: 20px;
    font-weight: 600;
`

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

export const IconLink = styled.a`
    
    padding: 10px;
`

export const IconImg = styled.img`
    height: 50px;
    margin: 6px;

    @media screen and (max-width: 550px){
        margin-left: 0;
    }
`

export const BtnWrapper = styled.a`
    text-decoration: none;
    color: black;
`