import { TextField, styled } from "@mui/material";

export const CssTextField = styled(TextField)({
  "& input[type=number]": {
    "-moz-appearance": "textfield",
  },
  "& input[type=number]::-webkit-outer-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "& input[type=number]::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "& label.Mui-focused": {
    color: "var(--color-brand1)",
  },
  "& .MuiFormLabel-root": {
    color: "var(--color-grey3)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid var(--color-grey4)",
    },
    "&:hover fieldset": {
      border: "2px solid var(--color-brand3)",
    },
  },
  "& .MuiAutocomplete-input-root": {
    "& fieldset": {
      border: "2px solid var(--color-grey4)",
    },
    "&:hover fieldset": {
      border: "2px solid var(--color-brand3)",
    },
  },
});
