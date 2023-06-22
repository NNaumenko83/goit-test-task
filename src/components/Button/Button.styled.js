import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: inline-flex;

  margin: 0 auto;
  width: 196px;
  /* padding: 14px 28px; */
  justify-content: center;
  padding: 8px 12px;

  border: none;
  font: inherit;
  cursor: pointer;
  background-color: ${(props) => (props.following ? "#5CD3A8 " : "#EBD8FF")};
  color: inherit;

  border-radius: 10.311px;

  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  /* .btn.isSelected {
  background-color: #1976d2;
  color: #fff;
} */

  transition: background-color 300ms linear;

  :hover {
    background-color: #7b2ec6;
    color: #fff;
  }

  /* :active {
    background-color: #1565c0;
    color: #fff;
  } */

  color: #373737;
  font-size: 18px;

  font-weight: 600;
`;
