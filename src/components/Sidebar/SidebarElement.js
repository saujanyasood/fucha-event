import styled from "styled-components";
import { Link } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #020910;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
    transition: 0.2s ease-in-out;
  }
`;

export const BtnWrapper = styled.a`
  text-decoration: none;
  color: black;
  margin-top: 30px;
`;
