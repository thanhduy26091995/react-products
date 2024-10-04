import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3563E9",
      dark: "#0A196F",
      light: "#658DF1",
      900: "#0A196F",
      800: "#102587",
      700: "#1A37A7",
      600: "#264BC8",
      500: "#3563E9",
      400: "#658DF1",
      300: "#85A8F8",
      200: "#AEC8FC",
      100: "#D6E4FD",
      0: "#FFFFFF",
    },
    secondary: {
      main: "#1A202C",
      dark: "#040815",
      light: "#596780",
      900: "#040815",
      800: "#080C19",
      700: "#0D121F",
      600: "#131825",
      500: "#1A202C",
      400: "#596780",
      300: "#90A3BF",
      200: "#C3D4E9",
      100: "#E0E9F4",
    },
    error: {
      main: "#FF4423",
      dark: "#7A0619",
      light: "#FF7F59",
      900: "#7A0619",
      800: "#930B16",
      700: "#B71112",
      600: "#DB2719",
      500: "#FF4423",
      400: "#FF7F59",
      300: "#FFA37A",
      200: "#FFC8A6",
      100: "#FFE7D3",
    },
    success: {
      main: "#9CD323",
      dark: "#3B6506",
      light: "#BCE455",
      900: "#3B6506",
      800: "#4C7A0B",
      700: "#659711",
      600: "#7FB519",
      500: "#9CD323",
      400: "#BCE455",
      300: "#D3F178",
      200: "#E8FAA6",
      100: "#F5FCD2",
    },
    warning: {
      main: "#FFC73A",
      dark: "#7A4D0B",
      light: "#FFD96B",
      900: "#7A4D0B",
      800: "#936312",
      700: "#B7821D",
      600: "#DBA32A",
      500: "#FFC73A",
      400: "#FFD96B",
      300: "#FFE488",
      200: "#FFEFB0",
      100: "#FFF8D7",
    },
    info: {
      main: "#54A6FF",
      dark: "#102E7A",
      light: "#7EC2FF",
      900: "#102E7A",
      800: "#1A4393",
      700: "#2A60B7",
      600: "#3D81DB",
      500: "#54A6FF",
      400: "#7EC2FF",
      300: "#98D3FF",
      200: "#BAE5FF",
      100: "#DCF3FF",
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans"',
    h1: {
      fontFamily: '"Plus Jakarta Sans"',
      fontWeight: 700, // Bold (Semibold)
    },
    h2: {
      fontFamily: '"Plus Jakarta Sans"',
      fontWeight: 600, // Semibold
    },
    h3: {
      fontFamily: '"Plus Jakarta Sans"',
      fontWeight: 500, // Medium
    },
    body1: {
      fontFamily: '"Plus Jakarta Sans"',
      fontWeight: 400, // Regular
    },
    button: {
      fontFamily: '"Plus Jakarta Sans"',
      fontWeight: 600, // Semibold for buttons
      textTransform: "none", // Disable automatic uppercase for buttons
    },
    caption: {
      fontFamily: '"Plus Jakarta Sans"',
      fontWeight: 400, // Regular for captions
    },
    subtitle1: {
      fontFamily: '"Plus Jakarta Sans"',
      fontWeight: 500, // Medium for subtitles
    },
    buttonText: {
      fontFamily: '"Plus Jakarta Sans"',
      fontSize: 12,
      fontWeight: 600,
      color: "#1A202C",
    },
  },
});

export default theme;
