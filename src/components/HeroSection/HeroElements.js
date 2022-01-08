import styled from "styled-components";
import { Link } from "react-scroll";

export const HeroContainer = styled.div`
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: calc(100vh - 80px);
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0, 0, 0, 0.2);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: black;
`;

export const HeroContent = styled.div`
  z-index: 3;
  width: 100%;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroP = styled.p`
  color: #fafafd;
  font-size: 50px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const HeroH1 = styled.h1`
  color: #fafafd;
  font-size: 110px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 90px;
  }

  @media screen and (max-width: 600px) {
    font-size: 60px;
  }
`;

export const Icon = styled.img`
    height: 25px;
    margin: 6px;

    @media screen and (max-width: 550px){
        margin-left: 0;
        padding: 4px;
    }
`

export const HeroBtnWrapper = styled(Link)`
  z-index: 3;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroButton = styled.svg`
  width: 60px;
  height: 72px;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  bottom: 80px;

  * {
    stroke: #fafafd;
    fill: transparent;
    stroke-width: 2px;
    animation: arrow 2s infinite;
    -webkit-animation: arrow 2s infinite;
  }

  @keyframes arrow {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const BtnPath1 = styled.path`
  animation-delay: -1s;
`;

export const BtnPath2 = styled.path`
  animation-delay: -0.5s;
`;

export const BtnPath3 = styled.path`
  animation-delay: -0s;
`;
