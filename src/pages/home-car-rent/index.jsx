import { memo } from "react";
import Header from "./Header";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { Container } from "@mui/material";
import CommonFooter from "../common/CommonFooter";
import Dashboard from "./Dashboard";

const HomeCarRent = ({}) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Dashboard />

      <CommonFooter />
    </Container>
  );
};

export default memo(HomeCarRent);
