import styled from "styled-components";

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
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
//   top: 0;
`;

export const Icon = styled.div`
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
`;
