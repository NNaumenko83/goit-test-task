import * as React from "react";

import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/joy/Button";

// import { ButtonStyled } from "./Button.styled";

export const ButtonStyled = ({
  selected = false,
  loading = false,
  type = "button",
  following = false,
  children,
  ...otherProps
}) => {
  console.log(otherProps);
  return (
    <Button
      type={type}
      loading={loading}
      loadingPosition="end"
      endDecorator={loading ? <SendIcon /> : null}
      variant="solid"
      sx={{ backgroundColor: following ? "#5CD3A8 " : "#EBD8FF" }}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
