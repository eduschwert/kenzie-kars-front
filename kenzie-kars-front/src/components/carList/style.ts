import styled from "styled-components";

export const StyledCarList = styled.ul`
  width: 100%;
  display: grid;
  margin-top: 2rem;
  justify-content: center;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media (min-width: 1460px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const StyledNoCarsFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
