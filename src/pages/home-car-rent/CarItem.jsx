import {
  HeartBroken,
  LocalGasStation,
  Person2,
  PersonOffOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { memo } from "react";
import Car2 from "../../assets/iv_car_2.png";

const CarItem = () => {
  return (
    <Card
      sx={{
        minWidth: "304px",
        minHeight: "388px",
        backgroundColor: "primary.0",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        padding: "24px",
        boxShadow: 0,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1, // Allows the CardContent to grow and push the inner content down
        }}
      >
        <Stack direction="row" justifyContent="space-between" mb={1}>
          <Typography
            variant="h1"
            sx={{
              fontSize: 20,
              color: "secondary.500",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              flexGrow: 1,
            }}
          >
            Koenigsdsaedsadlksanmdlkasnddlkasndlksanmdlldmklsamlkgg
          </Typography>

          <HeartBroken />
        </Stack>

        <Typography
          variant="h1"
          sx={{
            fontSize: 14,
            color: "secondary.300",
            mb: 2,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Sportdlkjsanmd;klasndlkasndklsandklsandklasndklasnndlsaknlksandl
        </Typography>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            height="232"
            image={Car2}
            alt="Koenigsegg"
            sx={{
              objectFit: "contain",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              bottom: "10%",
              width: "100%",
              height: "50px", // Height of the shadow
              background:
                "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
              filter: "blur(6px)",
            }}
          ></Box>
        </Box>

        {/* Spacer to push the price and button to the bottom */}
        <Box sx={{ flexGrow: 1 }} />
      </CardContent>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Car Information */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          mb={2}
        >
          <Box display="flex" alignItems="center">
            <LocalGasStation sx={{ color: "secondary.300" }} />
            <Typography variant="body2" color="secondary.300">
              90L
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <LocalGasStation sx={{ color: "secondary.300" }} />
            <Typography variant="body2" color="secondary.300">
              Manual
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Person2 sx={{ color: "secondary.300" }} />
            <Typography variant="body2" color="secondary.300">
              2 People
            </Typography>
          </Box>
        </Stack>

        {/* Price and Rent Now Button */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{}}
        >
          <Typography variant="h1" sx={{ color: "text.primary", fontSize: 30 }}>
            $99.00
            <Typography
              component="span"
              variant="body1"
              sx={{ color: "text.secondary", fontSize: 17 }}
            >
              /day
            </Typography>
          </Typography>

          <Button variant="contained" color="primary" size="large">
            Rent Now
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default memo(CarItem);
