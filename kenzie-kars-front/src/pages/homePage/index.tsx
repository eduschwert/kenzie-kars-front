// import { useEffect, useState } from "react";
import { useContext, useState } from "react";
import { SelectList } from "../../components/SelectList";
import { StyledText } from "../../styles/tipography";
import {
  HomePageContainer,
  HomePageNav,
  MaskImageDiv,
  SectionHomePageHeader,
  SectionHomePageMain,
  SectionHomePageMainMenu,
  SectionHomePageMainProductGallery,
} from "./style";
import { ProductContext } from "../../contexts/productContext";
import { List } from "@mui/material";
import { red } from "@mui/material/colors";

export const HomePage = () => {
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
  const [actionOverCarMileage, setActionOverCarMileage] =
    useState<boolean>(false);
  const [actionOverCarPrice, setActionOverCarPrice] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

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

  const handleClickMileage = () => {
    setActionOverCarMileage((actionOverCarMileage) => !actionOverCarMileage);
    setSelectedOption("fuel");
  };

  const handleClickPrice = () => {
    setActionOverCarPrice((actionOverCarPrice) => !actionOverCarPrice);
    setSelectedOption("fuel");
  };

  const categoryChange = (e: any) => {
    console.log("%%%%%%%%%%%%%%%", e);
    // setSelectedOption("brand");
  };

  return (
    <>
      <HomePageContainer>
        <SectionHomePageHeader>
          <MaskImageDiv>
            <div>
              <StyledText
                tag="h3"
                textStyle={"heading-3-500"}
                textColor="white"
              >
                {`Motors Shop`}
              </StyledText>
              <StyledText tag="p" textStyle={"heading-5-500"} textColor="white">
                {`A melhor plataforma de anúncios de carros do país`}
              </StyledText>
            </div>
          </MaskImageDiv>
        </SectionHomePageHeader>
        <SectionHomePageMain>
          <SectionHomePageMainMenu>
            <HomePageNav>
              <List
                component="ul"
                disablePadding
                className="NavNestedListTitle"
              >
                <SelectList
                  open={actionOverCarBrand}
                  arrayMap={carBrands}
                  primary="Marca"
                  onClickButton={handleClickBrand}
                  onClickItem={categoryChange}
                />
              </List>
              <List component="ul" disablePadding sx={stylesItems}>
                <SelectList
                  open={actionOverCarModel}
                  arrayMap={carModels}
                  primary="Modelo"
                  onClickButton={handleClickModel}
                  onClickItem={categoryChange}
                />
              </List>
              <List component="ul" disablePadding sx={stylesItems}>
                <SelectList
                  open={actionOverCarColor}
                  arrayMap={carColors}
                  primary="Cor"
                  onClickButton={handleClickColor}
                  onClickItem={categoryChange}
                />
              </List>
              <List component="ul" disablePadding sx={stylesItems}>
                <SelectList
                  open={actionOverCarYear}
                  arrayMap={carYears}
                  primary="Ano"
                  onClickButton={handleClickYear}
                  onClickItem={categoryChange}
                />
              </List>
              <List component="ul" disablePadding sx={stylesItems}>
                <SelectList
                  open={actionOverCarFuel}
                  arrayMap={carFuels}
                  primary="Combustível"
                  onClickButton={handleClickFuel}
                  onClickItem={categoryChange}
                />
              </List>
            </HomePageNav>
          </SectionHomePageMainMenu>
          <SectionHomePageMainProductGallery>
            GALLERY
          </SectionHomePageMainProductGallery>
        </SectionHomePageMain>
      </HomePageContainer>
    </>
  );
};
