import { createTheme } from "@mui/material/styles";

// A custom theme for this app
export const theme = createTheme({
  palette: {
    primary: {
      main: "#da1011",
    },
    secondary: {
      main: "#2E5BFF",
    },
    tertiary: {
      main: "#023c29",
    },
    error: {
      main: "#da1011",
    },
    background: {
      default: "#FFF",
    },
    success: {
      main: "#26A4FF",
    },
    info: {
      main: "#4640DE",
    },
    // mode: "dark",
  },

  typography: {
    fontFamily: ["Inter", "Public Sans", "sans-serif", "Arial", "Roboto"].join(
      ","
    ),

    big: {
      overflowWrap: "break-word",
      fontSize: 72,
      fontWeight: 700,
    },
    h1: {
      overflowWrap: "break-word",
      fontSize: 48,
      fontWeight: 700,
    },
    h2: {
      overflowWrap: "break-word",
      fontSize: 32,
      fontWeight: 700,
    },
    h3: {
      overflowWrap: "break-word",
      fontSize: 26,
      fontWeight: 700,
    },
    h4: {
      overflowWrap: "break-word",
      fontSize: 22,
      fontWeight: 500,
    },
    h5: {
      overflowWrap: "break-word",
      fontSize: 18,
      fontWeight: 500,
    },
    h6: {
      overflowWrap: "break-word",
      fontSize: 16,
      fontWeight: 500,
    },

    p: {
      overflowWrap: "break-word",
      fontSize: 14,
      fontWeight: 500,
    },
    p2: {
      overflowWrap: "break-word",
      fontSize: 12,
      fontWeight: 500,
    },
    p3: {
      overflowWrap: "break-word",
      fontSize: 10,
      fontWeight: 500,
    },

    // Buttons
    button1: {
      fontSize: 18,
      fontWeight: 700,
    },
    button2: {
      fontSize: 16,
      fontWeight: 600,
    },
    button3: {
      fontSize: 14,
      fontWeight: 600,
    },
  },
  // spacing: 1,
  // shape: {
  //   borderRadius: 1,
  // },
});
