import { ButtonStyled } from "./Button.styled";

export const Button = ({
  selected = false,
  // following = true,
  type = "button",
  children,
  ...otherProps
}) => {
  console.log(otherProps);
  return (
    <ButtonStyled
      type={type}
      // color={following ? "#5CD3A8 " : "#EBD8FF"}
     
      {...otherProps}
    >
      {children}
    </ButtonStyled>
  );
};
