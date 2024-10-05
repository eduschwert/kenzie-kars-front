import styled, { css } from "styled-components";
import { menuAnimation } from "../../styles/animations";

export const StyledNav = styled.nav<{ $menu: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(1rem, 4vw, 4.4rem);
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  height: 100%;
  padding-left: clamp(1rem, 4vw, 4.4rem);
  border-left: 0.2rem solid var(--color-grey6);

  @media screen and (max-width: 576px) {
    display: none;
    ${({ $menu }) =>
      $menu &&
      css`
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: normal;
        padding: 1rem 1rem;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        position: fixed;
        top: 8rem;
        left: 0;
        z-index: 1000;
        border: none;
        animation: ${menuAnimation} 0.3s ease-out forwards;
      `}
  }
`;
