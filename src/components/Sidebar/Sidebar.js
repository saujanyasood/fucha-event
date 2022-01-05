import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
} from "./SidebarElement";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon fontSize="large" />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="events" onClick={toggle}>Events</SidebarLink>
            <SidebarLink to="timeline" onClick={toggle}>Timeline</SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>Contact Us</SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
