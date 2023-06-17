// import { useEffect, useState } from "react";
// s
import { useState } from "react";
import { CarList } from "../../components/carList";

import { FilterMenu } from "../../components/filterMenu";

import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { StyledText } from "../../styles/tipography";
import {
  ContainerHomePage,
  HomePageContainer,
  MaskImageDiv,
  SectionHomePageHeader,
  SectionHomePageMain,
  SectionHomePageMainMenu,
  SectionHomePageMainProductGallery,
} from "./style";
import { AdvertisingButton } from "../../components/filterMenu/style";
import { StyledButton } from "../../styles/buttons";
import { FooterComponent } from "../../components/footer";

export const HomePage = () => {
  const [advertising, setAdvertising] = useState<boolean>(false);
  console.log(advertising);
  return (
    <ContainerHomePage>
      <HeaderNotLoggedIn />
      <HomePageContainer>
        <SectionHomePageHeader id="advertising" display={advertising}>
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
          <SectionHomePageMainMenu display={advertising}>
            <FilterMenu
              advertising={advertising}
              setAdvertising={setAdvertising}
            />
          </SectionHomePageMainMenu>
          <SectionHomePageMainProductGallery display={advertising}>
            <CarList />
            <AdvertisingButton>
              {advertising && (
                <StyledButton
                  onClick={() => setAdvertising((advertising) => !advertising)}
                  buttonStyle={window.screen.width < 700 ? "sm" : "bg"}
                  buttonColor="brand1"
                >{`Filtros`}</StyledButton>
              )}
            </AdvertisingButton>
          </SectionHomePageMainProductGallery>
        </SectionHomePageMain>
      </HomePageContainer>
      <FooterComponent />
    </ContainerHomePage>
  );
};
