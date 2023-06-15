import styled from "styled-components";
import { iImageBoxProps } from "./types";

export const StyledCarList = styled.div`
  width: 1392px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  > ul {
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    gap: 24px;

    @media (min-width: 700px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

export const StyledCar = styled.li`
  width: 312px;
  max-width: 100%;
`;

export const ImageBox = styled.div<iImageBoxProps>`
  background: var(--color-grey7);
  border: 2px solid var(--color-grey7);
  position: relative;
  height: 152px;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    top: 14px;
    left: 14px;
    position: absolute;
    ${({ is_active }) =>
      is_active
        ? "background: var(--color-brand1);"
        : "background: var(--color-grey4);"}
    width: 51px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-family-inter);
    font-weight: 500;
    font-size: 14px;
    color: var(--white-fixed);
  }

  > img {
    max-width: 65%;
    max-height: 65%;
    object-fit: cover;
  }
`;

export const TextBox = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    > div {
      background: var(--color-brand4);
      border-radius: var(--radius-2);
      padding: 4px 8px;
      font-family: var(--font-family-inter);
      font-weight: 500;
      font-size: 14px;
      height: 32px;
      color: var(--color-brand1);
    }
  }
`;

export const Flex2 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
