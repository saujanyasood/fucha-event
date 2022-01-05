import styled from "styled-components";
import { Link } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  //   top: 0;
`;

export const Icon = styled.div`
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
  padding: 2rem;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  padding: 2rem;
  font-weight: bold;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
