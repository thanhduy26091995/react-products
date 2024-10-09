import { Container, Radio, Stack } from "@mui/material";
import { memo } from "react";

const FilterComponent = ({ title }) => {
  return (
    <Container
      sx={{ backgroundColor: "primary.0", mt: "32px", borderRadius: "10px" }}
    >
      <Stack
        sx={{
          mx: "48px",
          my: "24px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
        direction="column"
        maxWidth={true}
      >
        <Radio>Pick-up</Radio>
      </Stack>
    </Container>
  );
};

export default memo(FilterComponent);
