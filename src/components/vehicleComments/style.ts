import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
  justify-content: space-between;

  & > .comment {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    & > .commentUserInformation {
      display: flex;
      gap: 1rem;
      align-items: center;
      flex-wrap: wrap;

      & > .circle {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.grey4};
      }

      > span {
        font-family: ${({ theme }) => theme.fonts.inter};
        font-size: 1.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.grey3};
      }

      > button {
        font-family: ${({ theme }) => theme.fonts.inter};
        font-size: 1.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.brand1};
        background: none;
        border: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
