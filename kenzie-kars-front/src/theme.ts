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
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#868e96",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#868e96",
          },
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
            borderColor: "#868e96",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#868e96",
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
      light: "#b0a6f0",
      main: "#5126ea",
      dark: "#4529e6",
      contrastText: "#fff",
    },
    secondary: {
      light: "#868e96",
      main: "#495057",
      contrastText: "#000",
    },
  },
});
