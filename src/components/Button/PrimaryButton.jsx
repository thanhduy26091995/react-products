import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import React from "react";

const PrimaryButton = ({
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
      disabled={isDisabled}
      variant="contained"
      onClick={onButtonClick}
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        ...theme.typography.buttonText,
        "&:hover": {
          backgroundColor: "primary.main",
        },
        "&:active": {
          backgroundColor: "primary.dark",
        },
        "$:focus": {
          backgroundColor: "primary.main",
        },
        "&.Mui-disabled": {
          backgroundColor: "primary.main",
          color: "white",
          opacity: 0.4,
        },
      }}
    >
      {title}
    </Button>
  );
};

export default React.memo(PrimaryButton);
