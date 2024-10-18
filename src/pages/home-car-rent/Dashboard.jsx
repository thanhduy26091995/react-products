import { Box, Container, Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import Car2 from "../../assets/iv_car_2.png";
import Swap from "../../assets/ic_swap.svg";
import PrimaryButton from "../../components/Button/PrimaryButton";
import FilterComponent from "./FilterComponent";
import { Filter, Image } from "@mui/icons-material";

const Dashboard = ({}) => {
  const filterComponents = [
    {
      key: "locations",
      title: "Locations",
      subTitle: "Select your city",
    },
    {
      key: "date",
      title: "Date",
      subTitle: "Select your date",
    },
    {
      key: "time",
      title: "Time",
      subTitle: "Select your time",
    },
  ];

  return (
    <Container
      maxWidth={false}
      sx={{
        flex: 1,
        overflowY: "auto",
        backgroundColor: "#F6F7F9",
        paddingX: "32px",
        marginTop: "24px",
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
            <BannerDetailCard
              title={
                <>
                  {" "}
                  The Best Platform
                  <br />
                  for Car Rental
                </>
              }
              subTitle={
                <>
                  {" "}
                  Ease of doing a car rental safely and<br></br>reliably. Of
                  course at a low price.
                </>
              }
              button={
                <PrimaryButton
                  sx={{ color: "primary.100", marginTop: "16px" }}
                  title={"Rental Car"}
                  size="medium"
                  onButtonClick={() => console.log("Button clicked")}
                />
              }
              car1={
                <img
                  src={Car2}
                  style={{
                    width: "420px",
                    aspectRatio: "340/106",
                    position: "absolute",
                    bottom: 10,
                    left: "30%",
                  }}
                />
              }
              background={<BackgroundCar1 />}
            />
          </Container>

          <Container
            sx={{
              width: "50%",
              aspectRatio: "640/320",
              backgroundColor: "primary.500",
              borderRadius: "10px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <BannerDetailCard
              title={
                <>
                  {" "}
                  Easy way to rent a
                  <br />
                  car at a low price
                </>
              }
              subTitle={
                <>
                  {" "}
                  Providing cheap car rental services<br></br>and safe and
                  comfortable facilities.
                </>
              }
              button={
                <PrimaryButton
                  sx={{
                    color: "primary.0",
                    marginTop: "16px",
                    backgroundColor: "info.500",
                  }}
                  title={"Rental Car"}
                  size="medium"
                  onButtonClick={() => console.log("Button clicked")}
                />
              }
              car1={
                <img
                  src={Car2}
                  style={{
                    width: "420px",
                    aspectRatio: "340/106",
                    position: "absolute",
                    bottom: 10,
                    left: "30%",
                  }}
                />
              }
              background={<BackgroundCar1 />}
            />
          </Container>
        </Stack>

        <Stack
          direction="row"
          spacing="44px"
          sx={{ alignItems: "center", marginTop: "32px" }}
        >
          <FilterComponent
            filterKey={"pick-up"}
            radioTitle={"Pick-Up"}
            filterComponents={filterComponents}
            onFilterComponentClick={(key) => {
              console.log(key);
            }}
          />

          <Container
            sx={{
              width: "60px",
              height: "60px",
              backgroundColor: "primary.500",
              borderRadius: "10px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img
              src={Swap}
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          </Container>

          <FilterComponent
            filt={"drop-off"}
            radioTitle={"Drop-Off"}
            filterComponents={filterComponents}
            onFilterComponentClick={(key) => {
              console.log(key);
            }}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

const BackgroundCar1 = ({}) => {
  const circles = Array(9).fill(0);

  return (
    <>
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
    </>
  );
};

const BannerDetailCard = ({ title, subTitle, button, car1, background }) => {
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
          {title}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontSize: "16px",
            color: "primary.0",
            marginTop: "16px",
          }}
        >
          {subTitle}
        </Typography>

        {button}
      </Box>

      {car1}

      {background}
    </div>
  );
};

export default memo(Dashboard);
