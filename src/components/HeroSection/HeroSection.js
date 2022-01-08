import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroButton,
  BtnPath1,
  BtnPath2,
  BtnPath3,
  Icon
} from "./HeroElements";
import video from "./finalVideo.mp4";
import { BtnWrapper } from "../Footer/FooterElements";
import { Button } from "@mui/material";
import discord from "./discord.png"

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroP>Welcome to</HeroP>
          <HeroH1>Matrix'22</HeroH1>
          <BtnWrapper href="https://discord.gg/dfJMFGwsXQ" target="_blank">
            <Button
              variant="contained"
              sx={{
                fontFamily: "'Montserrat', sans serif",
                fontWeight: "600",
                background: "#fafafd",
                color: "#020910",
                borderRadius: "10px",
                fontSize: "15px",
                marginTop: "30px",
                padding: "5px",
                "&:hover": { background: "white" },
              }}
            >
              <Icon src={discord}/>
              Join our Discord Server
            </Button>
          </BtnWrapper>
        </HeroContent>
        <HeroBtnWrapper to="events">
          <HeroButton>
            <BtnPath1 d="M0 0 L30 32 L60 0" />
            <BtnPath2 d="M0 20 L30 52 L60 20" />
            <BtnPath3 d="M0 40 L30 72 L60 40" />
          </HeroButton>
        </HeroBtnWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
