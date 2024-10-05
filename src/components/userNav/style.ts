import styled, { css } from "styled-components";
import { menuAnimation } from "../../styles/animations";

export const StyledNavUser = styled.nav<{ $menu: boolean }>`
  display: flex;
  height: 100%;
  min-width: 16rem;
  padding-left: clamp(1rem, 4vw, 4.4rem);
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  border-left: 0.2rem solid ${({ theme }) => theme.colors.grey6};

  @media screen and (max-width: 576px) {
    display: none;
    ${({ $menu }) =>
      $menu &&
      css`
        display: flex;
        width: 100%;
        height: max-content;
        flex-direction: column;
        justify-content: flex-start;
        align-items: normal;
        padding: 1rem 1rem;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        position: fixed;
        top: 7.5rem;
        left: 0;
        z-index: 1000;
        border: none;
        animation: ${menuAnimation} 0.3s ease-out forwards;
      `}
  }

  & > .navUserDiv {
    display: flex;
    position: relative;

    @media screen and (min-width: 576px) {
      &:hover > .navUserMenu {
        display: flex;
        align-items: center;
        width: max-content;
        height: max-content;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;
        padding: 2rem;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        position: absolute;
        top: 5.5rem;
        left: -2rem;
        z-index: 1000;
        background-color: ${({ theme }) => theme.colors.whiteFixed};
      }
    }

    @media screen and (max-width: 576px) {
      ${({ $menu }) =>
        $menu &&
        css`
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
        `}
    }

    & > .navUserInformation {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    & > .navUserMenu {
      display: none;
      animation: ${menuAnimation} 0.3s ease-out forwards;

      @media screen and (max-width: 576px) {
        ${({ $menu }) =>
          $menu &&
          css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          `}
      }

      & > li > .navUserMenuButton {
        width: fit-content;
        font-size: 1.6rem;
        font-weight: 400;
        font-family: ${({ theme }) => theme.fonts.inter};
        color: ${({ theme }) => theme.colors.grey2};
        background: none;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
