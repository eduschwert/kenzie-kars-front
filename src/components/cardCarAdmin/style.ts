import styled from "styled-components";
import { iImageBoxProps } from "./types";

export const StyledCar = styled.li`
  width: 312px;
  max-width: 100%;
  /* background-color: var(--color-grey8); */
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
    top: 7px;
    left: 7px;
    position: absolute;
    background-color: ${({ is_active }) =>
      is_active ? " var(--color-brand1)" : " var(--color-grey4)"};
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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextBox = styled.div`
  padding: 1rem 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    min-height: 48px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: none;

    & > div {
      background-color: var(--color-brand4);
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
