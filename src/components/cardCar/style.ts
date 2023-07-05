import styled from "styled-components";

export const CardLi = styled.li`
  width: 285px;
  min-height: 340px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  }
  & > a {
    width: 100%;
  }
  & > a:hover > div {
    border: 2px solid var(--color-brand1);
  }
  & > a > div {
    width: 100%;
    min-height: 30%;
    background-color: var(--color-grey7);
    border: 2px solid transparent;
    position: relative;
  }

  & > a > div > img {
    max-width: 260px;
    min-height: 150px;
    max-height: 150px;
  }
  @media (min-width: 800px) {
    width: 300px;
  }
`;

export const CardSection = styled.section`
  padding-top: 15px;
  padding-right: 12px;
  padding-left: 12px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > div > p {
    min-height: 48px;
    line-height: 24px;
  }
`;

export const DivUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DivCarDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const DivCarItems = styled.div`
  display: flex;

  align-items: center;
  & > div {
    padding: 5px;
    background-color: var(--color-brand4);
    border-radius: var(--radius-2);
  }
`;

export const CarTagActive = styled.div`
  background-color: var(--color-brand1);
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 4px 9px 4px 9px;
`;

export const CarTagInactive = styled.div`
  background-color: var(--color-grey4);
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 4px 9px 4px 9px;
`;

export const CarTagGoodDeal = styled.div`
  background-color: var(--color-success1);
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 4px 4px 4px 4px;
  border: 1px solid var(--color-success2);
`;

export const DivBtnsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
`;

export const DivCardText = styled.div`
  & > div > p {
    min-height: 48px;
    display: -webkit-box;
    text-align: justify;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
export const DivCardTitle = styled.div`
  & > div > p {
    min-height: 48px;
    display: -webkit-box;
    text-align: justify;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
