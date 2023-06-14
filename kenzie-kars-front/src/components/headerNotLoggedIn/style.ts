import styled, { keyframes } from "styled-components";
interface iDiv {
  display: boolean;
}

const menuAnimation = keyframes`
    0% {
       transform: translateY(-50%);
       opacity: 0;
     }

     100% {
       transform: translateY(0);
       opacity: 1;
     }

`;
export const Header = styled.header`
  width: 100vw;
  height: 80px;
  border-bottom: 2px solid var(--color-grey6);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey10);
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 80;
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 5vw;
  padding-right: 5vw;
  min-height: 100%;

  & > img {
    width: 150px;
  }
`;

export const DivLinkHeader = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: flex;
    min-height: 80px;
    align-items: center;
    justify-content: center;
    border-left: 2px solid var(--color-grey6);
    gap: 32px;
    padding-left: 37px;
  }
`;

export const BtnMenuHeader = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  padding: 5px;
  border-radius: var(--radius-2);
  &:hover {
    background-color: var(--color-grey8);
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

export const DivMenu = styled.div<iDiv>`
  animation-name: ${menuAnimation};
  animation-iteration-count: 1;
  animation-duration: 0.2s;
  left: 0px;
  top: 80px;
  width: 100vw;
  position: absolute;
  display: ${({ display }) => (display === true ? "flex" : " none")};
  background-color: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

  & > div {
    padding: 25px 15px 25px 15px;
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
  & > div {
    width: 100%;
  }
`;
