import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: #ebd8ff;
  color: inherit;

  /* .btn.isSelected {
  background-color: #1976d2;
  color: #fff;
} */

  :hover {
    background-color: #1976d2;
    color: #fff;
  }

  /* :active {
    background-color: #1565c0;
    color: #fff;
  } */
`;
