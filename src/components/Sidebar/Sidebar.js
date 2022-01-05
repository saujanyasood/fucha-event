import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { SidebarContainer, Icon } from "./SidebarElement";

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
