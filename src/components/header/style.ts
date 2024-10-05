import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  position: fixed;
  inset: 0;
  z-index: 1000;
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;

  & > div {
    width: 95%;
    max-width: 148rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .headerLogo {
      width: 15rem;
      max-width: 150px;
    }
  }
`;

export const StyledButtonMenu = styled.button`
  background-color: transparent;
  border: none;
  transition: 150ms ease-in-out;
  :hover {
    background-color: ${({ theme }) => theme.colors.grey8};
  }

  height: 4.6rem;
  width: 4.6rem;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media screen and (min-width: 576px) {
    display: none;
  }
`;
