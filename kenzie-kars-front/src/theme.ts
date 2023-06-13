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

// palette: {
//   primary: {
//     light: '#757ce8',
//     main: '#3f50b5',
//     dark: '#002884',
//     contrastText: '#fff',
//   },
//   secondary: {
//     light: '#ff7961',
//     main: '#f44336',
//     dark: '#ba000d',
//     contrastText: '#000',
//   },
// },
