import styled from "styled-components";

export const StyledForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  & > .commentInputUserInformation {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  & > .commentInput {
    position: relative;
    width: 100%;

    > textarea {
      width: 100%;
      min-height: 12.8rem;
      border: 0.15rem solid ${({ theme }) => theme.colors.grey5};
      border-radius: ${({ theme }) => theme.borderRadius.small};
      resize: none;
      padding: 2rem 1.5rem;
      @media screen and (min-width: 550px) {
        padding: 2rem 17rem 1.5rem 2rem;
      }

      font-size: 1.6rem;
      font-weight: 400;
      font-family: ${({ theme }) => theme.fonts.inter};
      color: ${({ theme }) => theme.colors.grey1};

      & ::placeholder {
        color: ${({ theme }) => theme.colors.grey3};
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
    }

    & > button {
      margin-top: 2rem;

      @media screen and (min-width: 550px) {
        position: absolute;
        bottom: 1.5rem;
        right: 1.5rem;
        margin-top: 0;
      }
    }
  }

  & > .inputSuggestions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    > button {
      background-color: ${({ theme }) => theme.colors.grey7};
      border: none;
      border-radius: 2.4rem;
      font-size: 1.2rem;
      font-weight: 500;
      font-family: ${({ theme }) => theme.fonts.inter};
      color: ${({ theme }) => theme.colors.grey3};
      transition: 150ms ease-in-out;
      white-space: nowrap;
      padding: 0.5rem 1.2rem;

      &:disabled {
        background-color: ${({ theme }) => theme.colors.grey5};
        color: ${({ theme }) => theme.colors.whiteFixed};
        border: solid 0.15rem ${({ theme }) => theme.colors.grey5};
        cursor: not-allowed;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.grey6};
      }
    }
  }
`;
