import { Container } from "@mui/material";
import { memo } from "react";

const Dashboard = ({}) => {
  return (
    <Container
      maxWidth
      sx={{
        flex: 1,
        overflowY: "auto",
        backgroundColor: "#F6F7F9",
        paddingX: "32px",
      }}
    />
  );
};

export default memo(Dashboard);
