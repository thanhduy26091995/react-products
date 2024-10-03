import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { memo } from "react";

const MinimalButton = ({
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
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      onClick={onButtonClick}
      disabled={isDisabled}
      sx={{
        ...theme.typography.buttonText,
        backgroundColor: "transparent",
        color: "secondary.200",
        "&:hover": {
          backgroundColor: "primary.0",
          color: "secondary.500",
        },
        "&:active": {
          backgroundColor: "primary.100",
          color: "secondary.500",
        },
        "&:focus": {
          backgroundColor: "transparent",
          color: "secondary.500",
          borderColor: "secondary.200",
        },
        "&.Mui-disabled": {
          backgroundColor: "transparent",
          color: "secondary.400",
        },
      }}
    >
      {" "}
      {title}
    </Button>
  );
};

export default memo(MinimalButton);
