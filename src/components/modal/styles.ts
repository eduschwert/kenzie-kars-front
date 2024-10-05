import styled from "styled-components";

import { animateModalClose, animateModalOpen } from "../../styles/animations";

export const StyledDivModal = styled.div<{ $isClosing: boolean }>`
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5vh;

  > div {
    background: ${({ theme }) => theme.colors.whiteFixed};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    max-width: 54rem;
    width: 100%;
    animation-name: ${({ $isClosing }) =>
      $isClosing ? animateModalClose : animateModalOpen};
    animation-iteration-count: 1;
    animation-duration: 0.5s;
    padding: 0px 1.5rem 2rem 1.5rem;
    overflow: hidden auto;
    max-height: 90vh;

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    & > .modalHeader {
      width: 100%;
      height: 5.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
  }
`;

export const StyledButtonCloseModal = styled.button`
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

  background-color: transparent;
  border: none;
  transition: 150ms ease-in-out;
  :hover {
    background-color: ${({ theme }) => theme.colors.grey8};
  }
`;
