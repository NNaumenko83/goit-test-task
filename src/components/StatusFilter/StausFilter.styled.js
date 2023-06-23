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
  position: absolute;
  top: 80px;
  right: 50%;
  transform: translate(400px);

  display: inline-block;
`;

export const DropdownButton = styled.button`
  width: 200px;
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
  width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  animation: ${fadeIn} 0.3s ease-in;
  border-radius: 10px;
`;

export const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: #4ab3e9;
  }
`;
