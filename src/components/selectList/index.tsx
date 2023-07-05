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
import { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";

export const SelectList = ({
  open,
  setActionOverCarBrand,
  setActionOverCarModel,
  setActionOverCarColor,
  setActionOverCarYear,
  setActionOverCarFuel,
  arrayMap,
  primary,
  onClickButton,
}: ISelectProps) => {
  const { filterConditions, setFilterConditions } = useContext(ProductContext);

  const filterItemSelect = (primary: string, element: string) => {
    switch (primary) {
      case "Marca": {
        const newFilterConditions = { ...filterConditions, brand: element };
        setFilterConditions(newFilterConditions);
        setActionOverCarBrand(false);
        setActionOverCarModel(true);
        break;
      }
      case "Modelo": {
        const newFilterConditions = { ...filterConditions, model: element };
        setFilterConditions(newFilterConditions);
        setActionOverCarModel(false);
        setActionOverCarColor(true);
        break;
      }
      case "Cor": {
        const newFilterConditions = {
          ...filterConditions,
          color: element.toLowerCase(),
        };
        setFilterConditions(newFilterConditions);
        setActionOverCarColor(false);
        setActionOverCarYear(true);
        console.log("FILTER", filterConditions);
        break;
      }
      case "Ano": {
        const newFilterConditions = { ...filterConditions, year: element };
        setFilterConditions(newFilterConditions);
        setActionOverCarYear(false);
        setActionOverCarFuel(true);
        break;
      }
      case "Combustível": {
        const fuelsOptions = ["flex", "híbrido", "elétrico"];
        const fuelCode = fuelsOptions.indexOf(element.toLowerCase()) + 1;
        const newFilterConditions = {
          ...filterConditions,
          fuel: fuelCode.toString(),
        };

        setFilterConditions(newFilterConditions);
        setActionOverCarFuel(false);
        break;
      }

      default: {
        const newFilterConditions = { ...filterConditions, brand: element };
        setFilterConditions(newFilterConditions);
        break;
      }
    }
  };

  return (
    <Box sx={{ fontSize: 3 }}>
      <ListItemButton onClick={onClickButton}>
        <ListItemText primary={primary} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {arrayMap.map((element, index) => (
            <ListItemButton
              key={index}
              defaultValue={element}
              sx={{ pl: 4 }}
              onClick={() => filterItemSelect(primary, element)}
            >
              <ListItemText
                primary={element}
                sx={{ color: "#868E96", fontFamily: "Lexend, sans-serif" }}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};
