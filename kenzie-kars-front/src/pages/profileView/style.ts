import styled from "styled-components";

export const Container = styled.div`
  background: var(--color-grey8);
  min-width: 100%;
  min-height: 100vh;
`;

export const BlueBox = styled.div`
  width: 100%;
  height: 357px;
  background: var(--color-brand1);
`;

export const PerfilBox = styled.div`
  width: 1240px;
  max-width: 100%;
  padding: 0 16px;
  margin: -215px auto 0 auto;

  > div {
    padding: 29px 40px 22px 40px;
    background: var(--color-grey10);
    border-radius: var(--radius-2);
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 700px) {
      padding: 41px 44px 70px 44px;
      margin: -215px auto 76px auto;
    }
  }
  p {
    line-height: 28px;
  }
`;

export const Circle = styled.div`
  background: var(--color-brand1);
  width: 104px;
  height: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-50);

  font-family: "Inter";
  font-weight: 500;
  font-size: 36px;
  color: var(--white-fixed);
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

export const StyledDiv = styled.div`
  background: var(--color-brand4);
  border: none;
  color: var(--color-brand1);
  height: 32px;
  padding: 0 8px;
  border-radius: var(--radius-2);

  font-family: var(--font-family-inter);
  font-weight: 500;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
