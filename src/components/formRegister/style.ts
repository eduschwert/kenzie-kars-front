import styled from "styled-components";

export const StyledFormContainer = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const StyledDivForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .flexRow {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 350px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
