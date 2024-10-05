import { FieldError } from "react-hook-form";
import styled from "styled-components";

export const StyledDivInput = styled.div<{
  $error?: FieldError | undefined;
}>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > label {
    font-size: 1.4rem;
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.inter};
    color: ${({ theme }) => theme.colors.grey1};
  }

  input,
  textarea {
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: 0.15rem solid
      ${({ theme, $error }) =>
        $error ? theme.colors.alert1 : theme.colors.grey7};
    padding: 1.5rem;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grey1};
    font-family: ${({ theme }) => theme.fonts.inter};

    appearance: none;

    &:disabled {
      cursor: not-allowed;
    }

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey3};
    }
  }

  input {
    height: 4.8rem;
  }

  textarea {
    height: 8rem;
    resize: none;
  }
`;

export const StyledDivInputPassword = styled.div`
  position: relative;

  > button {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
`;
