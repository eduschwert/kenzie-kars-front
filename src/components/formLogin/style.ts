import styled from "styled-components";

export const StyledFormContainer = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  .flexCol {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .flexEndPassword {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    a {
      color: ${({ theme }) => theme.colors.grey2};
      font-size: 1.4rem;
      font-weight: 500;
      font-family: ${({ theme }) => theme.fonts.inter};

      :hover {
        text-decoration: underline;
      }
    }
  }

  .center {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0.5rem 0px;
  }
`;
