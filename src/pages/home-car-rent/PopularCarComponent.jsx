import { colors, Grid, Grid2, Stack, Typography } from "@mui/material";
import { memo } from "react";
import CarItem from "./CarItem";

const PopularCarComponent = ({}) => {
  return (
    <Stack
      direction={"column"}
      sx={{
        mt: "32px",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          variant="buttonText"
          sx={{
            fontSize: 16,
            color: "secondary.300",
          }}
        >
          Popular Car
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: 16,
            color: "primary.500",
          }}
        >
          View All
        </Typography>
      </Stack>
      <Grid2
        container
        spacing={"32px"}
        sx={{
          mt: "20px",
        }}
      >
        <Grid2 size={3}>
          <CarItem />
        </Grid2>
        <Grid2 size={3}>
          <CarItem />
        </Grid2>
        <Grid2 size={3}>
          <CarItem />
        </Grid2>
        <Grid2 size={3}>
          <CarItem />
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default memo(PopularCarComponent);
