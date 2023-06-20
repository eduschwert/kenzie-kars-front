import styled from "styled-components";

export const StyledCarList = styled.ul`
  width: 100%;
  display: grid;
  margin-top: 2rem;
  justify-content: center;
  /* grid-template-columns: repeat(1, 1fr);
  gap: 1rem; */

  @media (min-width: 820px) {
    display: grid;
    grid-template-columns: repeat(2, 300px);
    gap: 1rem;
  }

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    gap: 1rem;
  }

  @media (min-width: 1660px) {
    display: grid;
    grid-template-columns: repeat(5, 300px);
    gap: 1rem;
  }
`;

export const StyledNoCarsFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
