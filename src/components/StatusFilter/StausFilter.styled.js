import { keyframes } from "styled-components";
import styled from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DropdownContainer = styled.div`
  /* left: 0; */

  display: inline-block;

  @media screen and (min-width: 768px) {
    transform: translate(300px);
    position: absolute;
    z-index: 2;
    right: 50%;
  }
`;

export const DropdownButton = styled.button`
  width: 160px;
  background-color: #1b7ac8;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 200ms linear;

  :hover,
  :focus {
    background-color: #7107d9;
  }
`;

export const DropdownContent = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  background-color: #5ec9f8;
  width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  animation: ${fadeIn} 0.3s ease-in;
  border-radius: 10px;
`;

export const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #4ab3e9;
  }
`;
