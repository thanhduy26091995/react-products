import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

const SecondaryButton = ({
  title,
  onButtonClick,
  size = "small",
  isDisabled = false,
  startIcon = null,
  endIcon = null,
}) => {
  const theme = useTheme();

  return (
    <Button
      variant="outlined"
      onClick={onButtonClick}
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      disabled={isDisabled}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        ...theme.typography.buttonText,
        backgroundColor: "white",
        borderColor: "secondary.300",
        color: "secondary.400",
        "&:hover": {
          borderColor: "secondary.400",
          backgroundColor: "primary.100",
          color: "secondary.500",
        },
        "&:active": {
          borderColor: "secondary.300",
          backgroundColor: "primary.100",
          color: "secondary.500",
        },
        "&:focus": {
          borderColor: "secondary.400",
          backgroundColor: "primary.100",
        },
        "&.Mui-disabled": {
          backgroundColor: "primary.0",
          borderColor: "primary.100",
          color: "secondary.400",
        },
      }}
    >
      {title}
    </Button>
  );
};

export default React.memo(SecondaryButton);
