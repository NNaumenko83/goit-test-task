import * as React from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/joy/Button";

export const ButtonStyled = ({
  selected = false,
  loading = false,
  type = "button",
  following = false,
  children,
  onClick,
  ...otherProps
}) => {
  const handleClick = (event) => {
    if (!loading && onClick) {
      onClick(event);
    }
  };

  return (
    <Button
      type={type}
      loading={loading}
      loadingPosition="end"
      endDecorator={loading ? <SendIcon /> : null}
      variant="solid"
      sx={{
        backgroundColor: following ? "#5CD3A8 " : "#EBD8FF",
        color: "#373737",
        transition: "background-color 250ms linear",
        ":hover": {
          bgcolor: "#7b2ec6",
          color: "#fff",
        },
      }}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default ButtonStyled;
