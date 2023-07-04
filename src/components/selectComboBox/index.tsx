import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { iComboBox } from "./types";

export const SelectComboBox = ({
  optionsArray,
  label,
  onChange,
}: iComboBox) => {
  return (
    <Autocomplete
      disablePortal
      id={`combo-box-${label}`}
      options={optionsArray}
      sx={{ width: 300 }}
      onChange={(event, value) => onChange(event, value)}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
