import styled from "styled-components";

export const StyledCarList = styled.ul`
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  gap: 1.5rem;
  margin: 0 auto;
  margin-top: 2rem;
  padding-bottom: 1rem;
  overflow-x: scroll;
  flex-wrap: wrap;

  @media (min-width: 760px) {
    & {
      grid-template-columns: 285px 285px;
      grid-row-gap: 24px;
      gap: 24px;
      overflow-x: hidden;
      flex-wrap: wrap;
    }
  }

  @media (min-width: 900px) {
    & {
      grid-template-columns: 285px 285px 285px;
      gap: 24px;
      grid-row-gap: 24px;
      overflow-x: hidden;
      flex-wrap: wrap;
    }
  }

  /* @media (min-width: 700px) {
    max-width: 600px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
    overflow-x: hidden;
    flex-wrap: wrap;
  }

  @media (min-width: 900px) {
    max-width: 800px;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1rem;
    flex-wrap: wrap;
    overflow-x: hidden; */

  /* @media (min-width: 1200px) {
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    overflow-x: none;
    flex-wrap: wrap; */
`;

export const StyledNoCarsFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
