import styled from "styled-components";

export const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  .border {
    width: 100%;
    height: 1.5px;
    background-color: ${({ theme }) => theme.colors.grey5};
  }
`;

export const StyledDivForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
