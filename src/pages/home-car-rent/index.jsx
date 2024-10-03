import { memo } from "react";
import Header from "./Header";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { Container } from "@mui/material";

const HomeCarRent = ({}) => {
  return (
    <Container
      maxWidth
      sx={{
        paddingLeft: {
          xs: "24px",
          md: "60px",
        },
        paddingRight: {
          xs: "24px",
          md: "60px",
        },
      }}
    >
      <Header />
    </Container>
  );
};

export default memo(HomeCarRent);
