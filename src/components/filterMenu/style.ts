import styled from "styled-components";

export const HomePageNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 20%;
  min-width: 300px;
  padding: 2rem;
  min-height: 10rem;
  min-width: 15rem;

  .NavSubItem {
    text-align: left;
  }
  .NavNestedListTitle {
    width: 100%;
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
    width: 100%;

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

export const MenuButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;

export const AdvertisingButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  /* margin-left: 1rem; */
  margin-top: 1rem;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const CancelFilters = styled.div`
  display: none;
  width: 100%;

  @media (min-width: 700px) {
    display: flex;
    justify-content: center;
    padding: 0 1rem;
    gap: 7rem;
    margin-top: 2rem;
    margin-left: 1rem;
  }
`;

export const CancelFiltersNarrow = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const stylesItems = {
  textAlign: 'left',
  fontSize: 20,
  fontFamily: 'Lexend',
  fontWeight: 600,
  color: '#000000',
};