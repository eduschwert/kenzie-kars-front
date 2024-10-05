import { TextField, Autocomplete } from "@mui/material";
import styled from "styled-components";

export const CssTextField = styled(TextField)({
  "& label": {
    fontSize: "1.6rem",
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
    color: "#212529",
  },
  "& input": {
    fontSize: "1.6rem",
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
    color: "#212529",
  },
  "& .MuiFormHelperText-root.Mui-error": {
    fontSize: "1.4rem",
    fontWeight: 500,
    fontFamily: "'Inter', sans-serif",
    color: "#cd2b31",
    letterSpacing: "0",
  },
});

export const CssAutoComplete = styled(Autocomplete)({
  "& .MuiInputBase-root": {
    fontSize: "1.6rem",
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
    color: "#212529",
  },

  "& + .MuiAutocomplete-popper .MuiAutocomplete-option": {
    fontSize: "1.6rem",
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
    color: "#212529",
  },

  "& .MuiTyography-root": {
    fontSize: "1.6rem",
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
    color: "#212529",
  },

  "& .MuiAutocomplete-endAdornment svg": {
    fontSize: "2.5rem",
  },
});
