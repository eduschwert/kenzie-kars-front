import {
  ListItemButton,
  ListItemText,
  Collapse,
  List,
  Box,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ISelectProps } from "./types";

export const SelectList = ({
  open,
  arrayMap,
  primary,
  onClickButton,
  onClickItem,
}: ISelectProps) => {
  const stylesSubItems = {
    textAlign: "left",
    fontSize: 20,
    fontFamily: "Lexend",
    fontWeight: 500,
  };
  return (
    <Box sx={{ fontSize: 3 }}>
      <ListItemButton onClick={onClickButton}>
        <ListItemText primary={primary} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        style={{ maxInlineSize: 0.2 }}
      >
        <List component="ul" disablePadding>
          {arrayMap.map((e, index) => {
            return (
              <ListItemButton
                key={index}
                defaultValue={e}
                sx={{ pl: 4 }}
                onClick={() => onClickItem(e)}
              >
                <ListItemText
                  primary={e}
                  sx={{
                    color: "#868E96",
                    fontFamily: "Lexend, sans-serif",
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </Box>
  );
};
