import styled from "styled-components";
import homeheader from "./../../assets/homeheader.svg";
import { iDisplayMenu } from "./types";

interface iGallery {
  display: boolean;
}

export const HomePageContainer = styled.main`
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  margin-top: 80px;
`;

export const MaskImageDiv = styled.div`
  margin-top: 0;
  height: 500px;

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.29),
      rgba(0, 0, 0, 1)
    ),
    url(${homeheader});

  object-fit: cover;
  background-repeat: no-repeat;
  /* -webkit-mask-image: linear-gradient(var(--color-grey0), transparent);
  mask-image: linear-gradient(var(--color-grey0), transparent);
  */

  & > div {
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem;
    margin: 0 auto;
  }
`;

export const SectionHomePageHeader = styled.div`
  margin-top: 80px;
  scroll-margin-top: 88px;
  width: 100%;
  height: 500px;
  font-size: clamp(24px, 10vw, 36px);
`;

export const SectionHomePageMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  margin: 0 auto;
`;

export const SectionHomePageMainMenu = styled.div<iDisplayMenu>`
  width: 30%;
  display: flex;
  display: ${({ display }) => (display === false ? "flex" : " none")};
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  text-align: center;
  gap: 2rem;
  padding: 2rem;

  @media (min-width: 700px) {
    display: flex;
  }
`;

export const SectionHomePageMainProductGallery = styled.div<iGallery>`
  width: 100%;
  display: ${({ display }) => (display === true ? "flex" : " none")};
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 2rem;

  @media (min-width: 700) {
    width: 70%;
    display: flex;
    align-items: space-between;
    justify-content: center;
  }
`;

export const HomePageNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 20%;
  padding: 2rem;
  min-height: 10rem;
  min-width: 15rem;

  .NavSubItem {
    text-align: left;
  }
  .NavNestedListTitle {
    font-size: 1rem;
    text-align: left;
    font-weight: 600;
    font-family: "Lexend", "sans-serif";
  }

  @media (min-width: 280px) {
    padding: 1rem;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    flex-wrap: wrap;
    gap: 0.25rem;
    & > ul {
      width: 100%;
    }
    & .NavSubItem {
      text-align: left;
    }
  }
  @media (min-width: 500px) {
    & > nav {
      display: flex;
      flex-direction: row;
      width: 100%;
      flex-wrap: wrap;
      gap: 0.25rem;
    }
  }
  @media (min-width: 630px) {
    flex-direction: column;
    justify-content: start;
    width: 30%;

    & > nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const HomePageMenuItem = styled.li`
  margin-bottom: 1.5rem;
  font-size: 24px;
  @media (min-width: 280px) {
    font-size: 10px;
  }
`;
