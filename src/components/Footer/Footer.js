import React from "react";
import {
  FooterContainer,
  FooterFirst,
  FooterSecond,
  Logo1,
  Logo2,
  Contacts,
  ContactBlock,
  ContactContainer,
  ContactName,
  ContactNumber,
  IconContainer,
  Icon,
  FooterThird,
  UpperLine,
  Prompt,
  LinksWrapper,
  IconLink,
  IconImg,
  BtnWrapper,
} from "./FooterElements";
import logo from "./logo.png";
import matrix from "./matrix.png";
import linkedin from "./linkedinlogo.png";
import { data, socials } from "./FooterData";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <div className="contact">
      <FooterContainer>
        <FooterFirst>
          <Logo1 src={logo}></Logo1>
          <Logo2 src={matrix}></Logo2>
        </FooterFirst>
        <FooterSecond>
          <Contacts>
            {data.map((c) => {
              return (
                <ContactBlock>
                  <ContactContainer>
                    <ContactName>{c.name}</ContactName>
                    <ContactNumber href={c.link}>{c.number}</ContactNumber>
                  </ContactContainer>
                  <IconContainer href={c.linkedin} target="_blank">
                    <Icon src={linkedin} />
                  </IconContainer>
                </ContactBlock>
              );
            })}
          </Contacts>
        </FooterSecond>
        <FooterThird>
          <UpperLine/>
          <Prompt>Follow us on</Prompt>
          <LinksWrapper>
            {socials.map((social) => {
              return (
                <IconLink href={social.link} target="_blank">
                  <IconImg src={social.img}></IconImg>
                </IconLink>
              );
            })}
          </LinksWrapper>
          <BtnWrapper href="https://bit.ly/join_ieeedtu" target="_blank">
            <Button
              variant="contained"
              sx={{
                fontFamily: "'Montserrat', sans serif",
                fontWeight: "600",
                background: "white",
                color: "black",
                borderRadius: "10px",
                "&:hover": { background: "white" },
              }}
            >
              Join IEEE DTU
            </Button>
          </BtnWrapper>
        </FooterThird>
      </FooterContainer>
    </div>
  );
};

export default Footer;
