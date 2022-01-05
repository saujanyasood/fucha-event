import React from "react";
import {
  FooterContainer,
  FooterLeft,
  FooterRight,
  Logo,
} from "./FooterElements";
import logo from "./logo.png";

const Footer = () => {
  return (
    <div className="contact">
      <FooterContainer>
        <FooterLeft>
          <Logo src={logo}></Logo>
        </FooterLeft>
        <FooterRight></FooterRight>
      </FooterContainer>
    </div>
  );
};

export default Footer;
