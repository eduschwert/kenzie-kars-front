import styled from "styled-components";

export const StyledDivVehicles = styled.div`
  min-height: 55rem;
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  & .cards {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
  }
`;

export const StyledUlCarList = styled.ul`
  width: 100%;
  overflow: hidden auto;
  display: grid;
  grid-gap: 2rem;
  max-height: 70vh;
  flex: 1;
  grid-template-columns: repeat(auto-fit, minmax(29.8rem, 1fr));
  align-items: stretch;
  justify-items: center;
  padding: 1rem;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  @media screen and (min-width: 768px) {
    max-height: none;
  }

  > li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 500px;
    width: 100%;
    transition: box-shadow 0.25s ease;
    background-color: ${({ theme }) => theme.colors.whiteFixed};

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }
`;
