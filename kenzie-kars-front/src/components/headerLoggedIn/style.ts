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
  width: 100%;
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

export const DivInfoHeader = styled.div`
  display: none;
  position: relative;

  @media (min-width: 600px) {
    display: flex;
    min-height: 80px;
    align-items: center;
    justify-content: center;
    border-left: 2px solid var(--color-grey6);
    gap: 10px;
    padding-left: 37px;
  }
  & > section {
    display: none;
    position: absolute;
    background-color: var(--color-grey9);
    border-radius: var(--radius-2);
    top: 58px;
    color: green;
    width: 170px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  }

  &:hover {
    cursor: pointer;
  }

  &:hover > section {
    display: flex;
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

  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

  & > div {
    padding: 25px 15px 25px 15px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  & > div > div > a {
    position: relative;
    overflow: hidden;
    background: linear-gradient(
      to right,
      var(--color-brand1),
      var(--color-brand1) 50%,
      var(--color-grey2) 50%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 450ms ease;
  }
  & > div > div > a:hover {
    color: var(--color-brand1);
    background-position: 0 100%;
  }
`;

export const MenuList = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  min-width: 100%;

  & > li {
    min-width: 100%;
  }
  & > li > button {
    min-width: 100%;
    border: 0px;
    background-color: transparent;
    border-radius: var(--radius-2);
    padding: 8px;
  }

  & > li > button:hover {
    cursor: pointer;
    background-color: var(--color-grey8);
  }
`;

export const MenuUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MenuUserItems = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  min-width: 100vw;

  & > li {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    min-width: 100%;
  }
  & > li > button {
    min-width: 50%;
    border: 0px;
    background-color: transparent;
    border-radius: var(--radius-2);
    padding: 8px;
  }

  & > li > button:hover {
    cursor: pointer;
    border-bottom: 2px solid var(--color-grey8);
  }
`;
