import { Label, ScreenSearchDesktopOutlined } from "@mui/icons-material";
import { Grid2, IconButton, InputBase, Paper, Typography } from "@mui/material";
import SearchIcon from "../../assets/ic_search_normal.svg";
import FilterIcon from "../../assets/ic_filter.svg";

export default function Header() {
  return (
    <Grid2
      container
      sx={{
        paddingTop: {
          md: "40px",
          xs: "32px",
        },
        paddingBottom: {
          md: "40px",
          xs: "32px",
        },
      }}
    >
      <Grid2 size={2} sx={{}}>
        <Typography
          variant="h1"
          sx={{ fontSize: "32px", color: "primary.500" }}
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
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
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

      <Grid2 size={4} sx={{ height: "50px" }}></Grid2>
    </Grid2>
  );
}
