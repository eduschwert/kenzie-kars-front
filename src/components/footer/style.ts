import styled from "styled-components";

export const Footer = styled.footer`
  background: var(--color-grey0);
  width: 100%;
  min-height: 80px;
  @media (min-width: 700px) {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const DivFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 34px;
  padding-bottom: 34px;
  gap: 38px;

  & > img {
    width: 153px;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px 5vw 32px 5vw;
  }
`;

export const LinkFooter = styled.a`
  border: 0px;
  width: 39px;
  height: 38px;
  background-color: var(--color-grey1);
  border-radius: var(--radius-2);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-grey2);
  }
`;
