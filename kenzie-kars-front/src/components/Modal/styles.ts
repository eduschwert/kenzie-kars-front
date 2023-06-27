import styled, { keyframes } from "styled-components";
const animateModal = keyframes`
    0% {
       transform: translateY(-50%);
       opacity: 0;
     }

     100% {
       transform: translateY(0);
       opacity: 1;
     }

`;

export const Container = styled.div`
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background: var(--white-fixed);
    border-radius: var(--radius-1);
    width: 520px;
    max-width: 90%;
    overflow: hidden;
    animation-name: ${animateModal};
    animation-iteration-count: 1;
    animation-duration: 1s;
    padding: 5px;

    > div {
      overflow-y: auto;
      max-height: calc(100vh - 30px);

      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: var(--color-grey6);
        border-radius: var(--radius-2);
      }

      ::-webkit-scrollbar-track {
        background-color: var(--white-fixed);
      }

      ::-webkit-scrollbar-thumb:hover {
        background-color: var(--color-grey4);
      }
    }
  }
`;
