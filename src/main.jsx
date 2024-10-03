import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme.js";
import HomeCarRent from "./pages/home-car-rent/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <HomeCarRent />
    </ThemeProvider>
  </StrictMode>
);
