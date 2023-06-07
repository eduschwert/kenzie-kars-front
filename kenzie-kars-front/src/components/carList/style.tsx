import styled from "styled-components";

export const StyledCarList = styled.ul`
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  overflow-x: scroll;

  @media (min-width: 700px) {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    overflow-x: hidden;
  }

  @media (min-width: 900px) {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    overflow-x: hidden;
  }

  @media (min-width: 1200px) {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    overflow-x: hidden;
  }
`;

export const StyledNoCarsFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
