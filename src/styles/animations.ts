import { keyframes } from "styled-components";

export const menuAnimation = keyframes`
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const animateModalOpen = keyframes`
    0% {
       transform: translateY(-50%);
       opacity: 0;
     }

     100% {
       transform: translateY(0);
       opacity: 1;
     }

`;

export const animateModalClose = keyframes`
    0% {
      transform: translateY(0);
      opacity: 1;
     }

     100% {
      transform: translateY(-50%);
      opacity: 0;
     }

`;
