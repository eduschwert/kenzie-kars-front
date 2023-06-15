import { List, Box, Typography, Slider } from "@mui/material";
import {
  AdvertisingButton,
  CancelFilters,
  CancelFiltersNarrow,
  HomePageNav,
} from "./style";
import { useState } from "react";
import { SelectList } from "../selectList";
import { iAdvertising } from "./types";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { start } from "@popperjs/core";

export const FilterMenu = ({ advertising, setAdvertising }: iAdvertising) => {
  const carBrands = ["Porsche", "Ford", "Fiat", "Honda", "Toyota"];
  const carModels = [
    "Civic",
    "Corolla",
    "Cruize",
    "Fit",
    "Gol",
    "Ka",
    "Onix",
    "Porsche",
  ];
  const carColors = ["azul", "Branco", "Vermelho", "Preto", "Cinza", "Prata"];
  const carYears = ["2000", "2001", "2002"];
  const carFuels = ["Gasolina", "Alcool", "Flex", "Híbrido"];
  const stylesItems = {
    textAlign: "left",
    fontSize: 20,
    fontFamily: "Lexend",
    fontWeight: 600,
    color: "#000000",
  };
  const [actionOverCarBrand, setActionOverCarBrand] = useState<boolean>(false);
  const [actionOverCarModel, setActionOverCarModel] = useState<boolean>(false);
  const [actionOverCarColor, setActionOverCarColor] = useState<boolean>(false);
  const [actionOverCarYear, setActionOverCarYear] = useState<boolean>(false);
  const [actionOverCarFuel, setActionOverCarFuel] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [kmValue, setKmValue] = useState<number[]>([0, 100]);
  const [priceValue, setPriceValue] = useState<number[]>([10, 1000]);
  console.log(`${priceValue[0]}`);
  console.log(`${priceValue[1]}`);
  const maxPrice = 1000.0;
  const minPrice = 10.0;
  const minKm = 0;
  const maxKm = 100;

  const kmMarks = [
    { value: minKm, label: `${minKm}` },
    { value: maxKm, label: `${maxKm}` },
  ];

  const priceMarks = [
    { value: minPrice, label: `${minPrice}` },
    { value: maxPrice, label: `${maxPrice}` },
  ];

  const handleClickBrand = () => {
    setActionOverCarBrand((actionOverCarBrand) => !actionOverCarBrand);
    setSelectedOption("brand");
    // setCategory("");
  };

  const handleClickModel = () => {
    setActionOverCarModel((actionOverCarModel) => !actionOverCarModel);
    setSelectedOption("model");
  };

  const handleClickColor = () => {
    setActionOverCarColor((actionOverCarColor) => !actionOverCarColor);
    setSelectedOption("color");
  };

  const handleClickYear = () => {
    setActionOverCarYear((actionOverCarYear) => !actionOverCarYear);
    setSelectedOption("year");
  };

  const handleClickFuel = () => {
    setActionOverCarFuel((actionOverCarFuel) => !actionOverCarFuel);
    setSelectedOption("fuel");
  };

  const handleSliderKmChange = (e: any, newKmValue: number[] | number) => {
    Array.isArray(newKmValue) && setKmValue(newKmValue);
  };

  const handleSliderPriceChange = (
    e: any,
    newPriceValue: number[] | number
  ) => {
    Array.isArray(newPriceValue) && setPriceValue(newPriceValue);
  };

  return (
    <>
      <HomePageNav>
        <CancelFiltersNarrow>
          <StyledText tag="p" textStyle={"heading-7-500"}>
            {`Filtros`}
          </StyledText>
          <StyledButton tag="button" buttonColor={"link"}>
            {`X`}
          </StyledButton>
        </CancelFiltersNarrow>
        <List component="ul" disablePadding className="NavNestedListTitle">
          <SelectList
            open={actionOverCarBrand}
            arrayMap={carBrands}
            primary="Marca"
            onClickButton={handleClickBrand}
            // onClickItem={() => categoryChange("", "")}
          />
        </List>
        <List component="ul" disablePadding sx={stylesItems}>
          <SelectList
            open={actionOverCarModel}
            arrayMap={carModels}
            primary="Modelo"
            onClickButton={handleClickModel}
          />
        </List>
        <List component="ul" disablePadding sx={stylesItems}>
          <SelectList
            open={actionOverCarColor}
            arrayMap={carColors}
            primary="Cor"
            onClickButton={handleClickColor}
          />
        </List>
        <List component="ul" disablePadding sx={stylesItems}>
          <SelectList
            open={actionOverCarYear}
            arrayMap={carYears}
            primary="Ano"
            onClickButton={handleClickYear}
          />
        </List>
        <List component="ul" disablePadding sx={stylesItems}>
          <SelectList
            open={actionOverCarFuel}
            arrayMap={carFuels}
            primary="Combustível"
            onClickButton={handleClickFuel}
          />
        </List>
        <Box width="100%" mx="auto" mt={3} ml={2}>
          <Typography textAlign={start} mb={3}>
            Km
          </Typography>
        </Box>
        <Box width="80%" mx="auto" mt={3} ml={4}>
          <Slider
            value={kmValue}
            onChange={handleSliderKmChange}
            valueLabelDisplay="on"
            color="secondary"
            marks={kmMarks}
            size="small"
            min={0}
            max={maxKm}
          />
        </Box>
        <Box width="100%" mx="auto" mt={3} ml={2}>
          <Typography textAlign={start} mb={5}>
            Price
          </Typography>
        </Box>
        <Box width="80%" mx="auto" mt={3} ml={4}>
          <Slider
            value={priceValue}
            onChange={handleSliderPriceChange}
            valueLabelDisplay="on"
            color="secondary"
            marks={priceMarks}
            size="small"
            min={minPrice}
            max={maxPrice}
          />
        </Box>
        <AdvertisingButton>
          {!advertising && (
            <StyledButton
              tag="button"
              onClick={() => setAdvertising((advertising) => !advertising)}
              // buttonStyle={window.screen.width < 700 ? "sm" : "bg"}
              buttonStyle="sm"
              buttonColor="brand1"
            >{`Ver anúncio`}</StyledButton>
          )}
        </AdvertisingButton>
        <CancelFilters>
          {
            <StyledButton
              tag="button"
              onClick={() => setAdvertising((advertising) => !advertising)}
              buttonStyle={window.screen.width < 700 ? "sm" : "bg"}
              buttonColor="brand1"
            >{`Limpar Filtros`}</StyledButton>
          }
        </CancelFilters>
      </HomePageNav>
    </>
  );
};
