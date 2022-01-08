import styled from "styled-components"
import Card from "@mui/material/Card";
import { CardMedia, CardContent, CardActions } from "@mui/material";

export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    font-size: 24px;
    font-weight: 400;
    color: #FAFAFD;
`

export const EventsContainer = styled.div`
    width: 80%;
    margin: 0;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const CardContainer = styled.div`
    height: 350px;
    width: 300px;
    margin: 20px;
    border-radius: 20px;
    transition: 0.4s ease;

    &:hover{
        transform: scale(1.05);
        transition: 0.4s ease;
    }
`

export const GameCard = styled(Card)`
    height: 100%;
    width: 300px;
`

export const GameCardMedia = styled(CardMedia)`
    height: 60%;
    width: 100%;
    border-radius: 20px 20px 0 0 ;
`

export const GameCardContent = styled(CardContent)`
    font-size: 30px;
    font-weight: 500;
    font-family: 'Keania One', cursive;
`

export const GameCardActions = styled(CardActions)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: 'Montserrat', sans-serif;
    
`