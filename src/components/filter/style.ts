import styled from "styled-components";

export const StyledDivFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > .filterField {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > .filterFieldButtons {
      padding-left: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.1rem;
      max-height: 35vh;
      overflow: auto;
    }

    & > .filterFieldRange {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      align-items: center;
      padding-left: 1rem;

      > input {
        width: 50%;
        font-size: 1.6rem;
        font-weight: 600;
        font-family: ${({ theme }) => theme.fonts.lexend};
        color: ${({ theme }) => theme.colors.grey3};
        height: 3.5rem;
        padding-left: 1rem;
      }
      > button {
        height: 3.5rem;
        width: 3.5rem;
        margin-left: -1rem;
        font-size: 1.5rem;
        transition: 150ms ease-in-out;
        background-color: transparent;
        border: none;

        &:hover {
          font-size: 1.7rem;
        }
      }
    }
  }

  & > .filterButton {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const StyledButtonFilter = styled.button<{ $clicked?: boolean }>`
  font-size: 2rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.lexend};
  color: ${({ theme, $clicked }) =>
    $clicked ? theme.colors.brand1 : theme.colors.grey3};
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledDivGoodBuy = styled.div<{ $isGoodBuy: boolean }>`
  display: flex;
  width: 3rem;
  height: 3rem;
  background-color: ${({ $isGoodBuy, theme }) =>
    $isGoodBuy ? "#349974" : theme.colors.grey2};
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.inter};
  color: ${({ theme }) => theme.colors.whiteFixed};
`;
