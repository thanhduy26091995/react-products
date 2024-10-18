import { memo } from "react";
import Header from "./Header";
import { Box, Container } from "@mui/material";
import CommonFooter from "../common/CommonFooter";
import Dashboard from "./Dashboard";
import { SpaceBar } from "@mui/icons-material";

const HomeCarRent = ({}) => {
  return (
    <Container
      maxWidth={true}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Header />

      <Dashboard />

      <Box sx={{ height: 100 }}></Box>

      <CommonFooter />
    </Container>
  );
};

export default memo(HomeCarRent);
