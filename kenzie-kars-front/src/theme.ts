import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FF6600",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FF6600",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },
  },
  typography: {
    fontFamily: "Lexand, sans-serif",
    fontSize: 16,
  },
  palette: {
    primary: {
      light: "#FF6600",
      main: "#B33F00",
      dark: "#662400",
      contrastText: "#fff",
    },
    secondary: {
      light: "#00B3AD",
      main: "#006663",
      contrastText: "#000",
    },
  },
});
