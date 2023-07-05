/* eslint-disable @typescript-eslint/no-explicit-any */
import { List, Box, Typography, Slider } from "@mui/material";
import {
  AdvertisingButton,
  CancelFilters,
  CancelFiltersNarrow,
  HomePageNav,
  stylesItems,
} from "./style";
import { useContext, useEffect, useState } from "react";
import { SelectList } from "../selectList";
import { iAdvertising } from "./types";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { start } from "@popperjs/core";
import { fipeApi } from "../../services/fipeApi";
import {
  handleFilterConditions,
  handleFilterElements,
  handleFilterOptionsYearAndFuel,
  handleSelectedOption,
} from "./functions";
import { ProductContext } from "../../contexts/productContext";
import { api } from "../../services/api";

export const FilterMenu = ({ advertising, setAdvertising }: iAdvertising) => {
  const { filterConditions, setFilterConditions } = useContext(ProductContext);
  const [brands, setBrands] = useState([] as Array<string>);
  const [models, setModels] = useState([] as Array<string>);
  const [year, setYear] = useState([] as Array<string>);
  const [fuel, setFuel] = useState([] as Array<string>);
  const [maxValueOfPrice, setMaxValueOfPrice] = useState<number>(300000);
  const [maxValueOfMileage, setMaxValueOfMileage] = useState<number>(200000);
  const [actionOverCarBrand, setActionOverCarBrand] = useState<boolean>(false);
  const [actionOverCarModel, setActionOverCarModel] = useState<boolean>(false);
  const [actionOverCarColor, setActionOverCarColor] = useState<boolean>(false);
  const [actionOverCarYear, setActionOverCarYear] = useState<boolean>(false);
  const [actionOverCarFuel, setActionOverCarFuel] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const minPrice = 0;
  const maxPrice = maxValueOfPrice;
  const minMileage = 0;
  const maxMileage = maxValueOfMileage;

  const carColors = [
    "Amarelo",
    "Azul",
    "Branco",
    "Cinza",
    "Dourado",
    "Prata",
    "Preto",
    "Rosa",
    "Verde",
    "Vermelho",
    "Vinho",
  ];

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fipeApi.get("/cars");
        console.log("FIPE", response.data);
        const brandsRes = Object.keys(response.data);
        const brands = brandsRes.map(
          (str) => str.charAt(0).toUpperCase() + str.slice(1)
        );
        setBrands(brands);
      } catch (error) {
        console.error("Error fetching car database", error);
      }
    };

    const fetchMaxMileagePrice = async () => {
      try {
        const response = await api.get("vehicles/max");
        setMaxValueOfMileage(response.data.maxMileage);
        setMaxValueOfPrice(response.data.maxPrice);
      } catch (error) {
        console.error("Error fetching max mileage and price", error);
      }
    };
    fetchMaxMileagePrice();
    fetchBrands();
  }, []);

  useEffect(() => {
    const callbackHandleFilterElements = async () => {
      const filteredCars: Array<string> | void = await handleFilterElements(
        filterConditions
      );
      filteredCars &&
        setModels(
          filteredCars.map(
            (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
          )
        );
    };
    callbackHandleFilterElements();
  }, [filterConditions]);

  useEffect(() => {
    const possibleCarFuel = ["Flex", "Híbrido", "Elétrico"];

    const callbackHandleFilterOptionsYearAndFuel = async () => {
      const yearAndFuel = await handleFilterOptionsYearAndFuel(
        filterConditions
      );
      if (yearAndFuel) {
        setYear(yearAndFuel.availableYears);
        const fuelNames = yearAndFuel.availableFuel.map(
          (eachFuel: string) => possibleCarFuel[Number(eachFuel) - 1]
        );
        setFuel(fuelNames);
      }
    };
    callbackHandleFilterOptionsYearAndFuel();
  }, [filterConditions]);

  useEffect(() => {
    handleFilterConditions(filterConditions);
  }, [filterConditions]);

  const [mileageRange, setMileageRange] = useState<number[]>([
    minMileage,
    maxMileage,
  ]);
  const [priceRange, setPriceRange] = useState<number[]>([minPrice, maxPrice]);

  const mileageMarks = [
    { value: minMileage, label: `${minMileage}` },
    { value: maxMileage, label: `${maxMileage}` },
  ];

  const priceMarks = [
    { value: minPrice, label: `${minPrice}` },
    { value: maxPrice, label: `${maxPrice}` },
  ];

  const handleClickBrand = () => {
    setActionOverCarBrand((actionOverCarBrand) => !actionOverCarBrand);
    setSelectedOption("brand");
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

  const handleSliderMileageChange = (
    _e: any,
    newMileageRange: number[] | number
  ) => {
    if (Array.isArray(newMileageRange)) {
      setMileageRange(newMileageRange);
      const newFilterConditions = {
        ...filterConditions,
        minMileage: newMileageRange[0],
        maxMileage: newMileageRange[1],
      };
      setFilterConditions(newFilterConditions);
    }
  };

  const handleSliderPriceChange = (
    _e: any,
    newPriceRange: number[] | number
  ) => {
    if (Array.isArray(newPriceRange)) {
      setPriceRange(newPriceRange);
      const newFilterConditions = {
        ...filterConditions,
        minPrice: newPriceRange[0],
        maxPrice: newPriceRange[1],
      };
      setFilterConditions(newFilterConditions);
    }
  };

  useEffect(() => {
    handleSelectedOption({
      selectedOption,
      setActionOverCarBrand,
      setActionOverCarModel,
      setActionOverCarColor,
      setActionOverCarYear,
      setActionOverCarFuel,
    });
  }, [selectedOption]);

  const clearFilters = () => {
    setFilterConditions({ brand: "" });
    setMileageRange([minMileage, maxMileage]);
    setPriceRange([minPrice, maxPrice]);
  };

  return (
    <>
      <HomePageNav>
        <CancelFiltersNarrow>
          <StyledText tag="p" textStyle={"heading-7-500"}>
            {`Filtros`}
          </StyledText>
          <StyledButton buttonColor={"link"} buttonStyle="sm">
            {`X`}
          </StyledButton>
        </CancelFiltersNarrow>
        <List component="ul" disablePadding className="NavNestedListTitle">
          <SelectList
            open={actionOverCarBrand}
            setActionOverCarBrand={setActionOverCarBrand}
            setActionOverCarModel={setActionOverCarModel}
            setActionOverCarColor={setActionOverCarColor}
            setActionOverCarYear={setActionOverCarYear}
            setActionOverCarFuel={setActionOverCarFuel}
            arrayMap={brands}
            primary="Marca"
            onClickButton={handleClickBrand}
          />
        </List>
        <List component="ul" disablePadding sx={stylesItems}>
          <SelectList
            open={actionOverCarModel}
            setActionOverCarBrand={setActionOverCarBrand}
            setActionOverCarModel={setActionOverCarModel}
            setActionOverCarColor={setActionOverCarColor}
            setActionOverCarYear={setActionOverCarYear}
            setActionOverCarFuel={setActionOverCarFuel}
            arrayMap={models}
            primary="Modelo"
            onClickButton={handleClickModel}
          />
        </List>
        <List component="ul" disablePadding sx={stylesItems}>
          <SelectList
            open={actionOverCarColor}
            setActionOverCarBrand={setActionOverCarBrand}
            setActionOverCarModel={setActionOverCarModel}
            setActionOverCarColor={setActionOverCarColor}
            setActionOverCarYear={setActionOverCarYear}
            setActionOverCarFuel={setActionOverCarFuel}
            arrayMap={carColors}
            primary="Cor"
            onClickButton={handleClickColor}
          />
        </List>
        <List component="ul" disablePadding sx={stylesItems}>
          <SelectList
            open={actionOverCarYear}
            setActionOverCarBrand={setActionOverCarBrand}
            setActionOverCarModel={setActionOverCarModel}
            setActionOverCarColor={setActionOverCarColor}
            setActionOverCarYear={setActionOverCarYear}
            setActionOverCarFuel={setActionOverCarFuel}
            arrayMap={year}
            primary="Ano"
            onClickButton={handleClickYear}
          />
        </List>
        <List component="ul" disablePadding sx={stylesItems}>
          <SelectList
            open={actionOverCarFuel}
            setActionOverCarBrand={setActionOverCarBrand}
            setActionOverCarModel={setActionOverCarModel}
            setActionOverCarColor={setActionOverCarColor}
            setActionOverCarYear={setActionOverCarYear}
            setActionOverCarFuel={setActionOverCarFuel}
            arrayMap={fuel}
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
            value={mileageRange}
            onChange={handleSliderMileageChange}
            valueLabelDisplay="on"
            color="secondary"
            marks={mileageMarks}
            size="small"
            min={minMileage}
            max={maxMileage}
          />
        </Box>
        <Box width="100%" mx="auto" mt={3} ml={2}>
          <Typography textAlign={start} mb={5}>
            Price
          </Typography>
        </Box>
        <Box width="80%" mx="auto" mt={3} ml={4}>
          <Slider
            value={priceRange}
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
              onClick={() => setAdvertising((advertising) => !advertising)}
              buttonStyle="sm"
              buttonColor="brand1"
            >{`Ver anúncio`}</StyledButton>
          )}
        </AdvertisingButton>
        <CancelFilters>
          {
            <StyledButton
              onClick={() => clearFilters()}
              buttonStyle={window.screen.width < 700 ? "sm" : "bg"}
              buttonColor="brand1"
            >{`Limpar Filtros`}</StyledButton>
          }
        </CancelFilters>
      </HomePageNav>
    </>
  );
};
