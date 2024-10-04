import {
  alpha,
  Avatar,
  Grid2,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "../../assets/ic_search_normal.svg";
import FilterIcon from "../../assets/ic_filter.svg";
import HeartIcon from "../../assets/ic_heart.svg";
import NotificationIcon from "../../assets/ic_notification.svg";
import SettingIcon from "../../assets/ic_setting.svg";
import AvatarIcon from "../../assets/ic_avatar.png";

export default function Header() {
  return (
    <Grid2
      container
      sx={{
        paddingY: {
          md: "40px",
          xs: "32px",
        },
        paddingX: "32px",
        backgroundColor: "primary.0",
      }}
    >
      <Grid2
        size={2}
        container
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "32px",
            color: "primary.500",
          }}
        >
          MORENT
        </Typography>
      </Grid2>

      <Grid2 size={6} sx={{}}>
        <Paper
          component="form"
          sx={{
            display: "flex",
            width: "492px",
            borderRadius: "70px",
            paddingY: "10px",
            paddingX: "20px",
            borderStyle: "solid",
            borderColor: (theme) => alpha(theme.palette.secondary[200], 0.4),
            borderWidth: "1px",
          }}
        >
          <img src={SearchIcon} />

          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search something here"
          ></InputBase>

          <img src={FilterIcon} />
        </Paper>
      </Grid2>

      <Grid2 size={4} sx={{}}>
        <Stack
          direction="row"
          spacing={"20px"}
          sx={{
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              borderRadius: "50%",
              borderWidth: "1px",
              borderColor: (theme) => alpha(theme.palette.secondary[200], 0.4),
              borderStyle: "solid",
            }}
          >
            <img src={HeartIcon} />
          </IconButton>

          <IconButton
            sx={{
              position: "relative",
              borderRadius: "50%",
              borderWidth: "1px",
              borderColor: (theme) => alpha(theme.palette.secondary[200], 0.4),
              borderStyle: "solid",
              "&:after": {
                content: '""',
                position: "absolute",
                top: "0px",
                left: "50%",
                width: "11px",
                height: "11px",
                backgroundColor: "red",
                borderRadius: "50%",
                transform: "translateX(75%)",
              },
            }}
          >
            <img src={NotificationIcon} />
          </IconButton>

          <IconButton
            sx={{
              borderRadius: "50%",
              borderWidth: "1px",
              borderColor: (theme) => alpha(theme.palette.secondary[200], 0.4),
              borderStyle: "solid",
            }}
          >
            <img src={SettingIcon} />
          </IconButton>

          <Avatar src={AvatarIcon}></Avatar>
        </Stack>
      </Grid2>
    </Grid2>
  );
}
