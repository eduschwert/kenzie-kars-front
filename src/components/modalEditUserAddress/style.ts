import styled from "styled-components";

export const StyledFormFlexCol = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .flexRow {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .flexRowEnd {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 400px) {
      flex-direction: row;
      justify-content: flex-end;
    }
  }
`;
