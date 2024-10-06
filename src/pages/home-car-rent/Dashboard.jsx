import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import Car1 from "../../assets/iv_car_1.png";
import PrimaryButton from "../../components/Button/PrimaryButton";

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
    >
      <Stack direction="column">
        <Stack direction="row" spacing="32px">
          <Container
            sx={{
              width: "50%",
              aspectRatio: "640/320",
              backgroundColor: "info.500",
              borderRadius: "10px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <CircleBackgroundList />
          </Container>

          <Container
            sx={{
              width: "50%",
              aspectRatio: "640/320",
              backgroundColor: "primary.500",
              borderRadius: "10px",
            }}
          ></Container>
        </Stack>
      </Stack>
    </Container>
  );
};

const CaroSquare = ({}) => {
  const squareSize = 4;
  const gridSize = 1000;
  console.log(gridSize);
  const squares = Array.from({ length: gridSize * gridSize }, (_, index) => {
    return (
      <div
        key={index}
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: "transparent",
          borderColor: "red",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      />
    );
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridSize}, 8px)`, // Create grid with equal-sized columns of 4px width
        gridTemplateRows: `repeat(${gridSize}, 8px)`, // Create grid with equal-sized rows
        width: "100%", // Full width of parent container
        height: "100%", // Full height of parent container
      }}
    >
      {squares}
    </div>
  );
};

const CircleBackgroundList = ({}) => {
  const circles = Array(9).fill(0);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          top: "24px",
          left: "24px",
          position: "absolute",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "32px",
            color: "primary.0",
          }}
        >
          The Best Platform
          <br />
          for Car Rental
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontSize: "16px",
            color: "primary.0",
            marginTop: "16px",
          }}
        >
          The Best Platform
          <br />
          for Car Rental
        </Typography>

        <PrimaryButton
          sx={{ color: "primary.100", marginTop: "16px" }}
          title={"Rental Car"}
          onButtonClick={() => console.log("Button clicked")}
        />
      </Box>

      <img
        src={Car1}
        style={{
          width: "406px",
          height: "106px",
          position: "absolute",
          bottom: 10,
          left: "30%",
        }}
      />

      {circles.map((_, index) => {
        const size = index == 0 ? 50 : 100 * (index + 1);
        const offset = -(size / 2);
        const borderStrokeSize = index == 0 ? 25 : 25;

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              width: `${size}px`,
              height: `${size}px`,
              border: `${borderStrokeSize}px solid rgba(255, 255, 255, 0.06)`, // Stroke with color
              borderRadius: "50%", // Makes it a circle
              margin: "50px", // Space between circles
              top: "70%",
              left: "30%",
              transform: `translate(${offset}px, ${offset}px)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default memo(Dashboard);
