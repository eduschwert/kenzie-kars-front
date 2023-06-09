import styled, { css } from "styled-components";
import { iIsActive } from "./types";

export const StyledInput = styled.input`
  width: 100%;
  height: 2.5rem;
  color: var(--color-grey50);
  background-color: var(--color-white);
  border-radius: var(--radius-1);
  border: 1px solid var(--color-grey50);
  padding: 0 1rem;
  display: block;
  font-size: var(--font-size-14);

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;

  @media (min-width: 370px) {
    max-width: 370px;
  }
`;

export const StyledLabel = styled.label`
  background-color: var(--color-white);
  color: var(--color-grey100);
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 10px;
  padding: 0 0.25rem;
  transition: 0.2s ease all;
`;

export const StyledInputDiv = styled.fieldset<iIsActive>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
  position: relative;

  label {
    font-size: var(--font-size-12);
    ${({ isActive, error }) => {
      if (isActive && error) {
        return css`
          top: -10px;
          font-size: var(--font-size-12);
          color: var(--color-negative);
        `;
      } else if (isActive && !error) {
        return css`
          top: -10px;
          font-size: var(--font-size-12);
          color: var(--color-success);
        `;
      } else {
        return css`
          font-size: var(--font-size-12);
        `;
      }
    }}
  }

  input:focus {
    border: 1px solid var(--color-grey100);
    background-color: var(--color-white);
    color: var(--color-grey100);
  }

  :focus-within label {
    font-size: var(--font-size-12);
    transform: translate(0, 12px) scale(0.75);
    top: -20px;
  }

  input {
    ${({ isActive, error }) => {
      console.log("isActive", isActive);
      console.log("error", error);
      if (isActive && error) {
        return css`
          /* outline: 1px solid var(--color-negative); */
          border: 1px solid var(--color-negative);
          :focus {
            border: 1px solid var(--color-negative);
            background-color: var(--color-white);
            color: var(--color-grey100);
          }
        `;
      } else if (isActive && !error) {
        return css`
          /* outline: 1px solid var(--color-success); */
          border: 1px solid var(--color-success);
          :focus {
            border: 1px solid var(--color-success);
            background-color: var(--color-white);
            color: var(--color-grey100);
          }
        `;
      }
    }}
  }
`;

export const HelperTextDiv = styled.div`
  width: 100%;
  max-width: 320px;
  gap: 0.5rem;
  min-height: 1.5rem;
  text-align: start;
  padding: 0 0.5rem;
`;
