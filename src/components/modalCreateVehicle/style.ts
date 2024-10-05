import styled from "styled-components";

export const StyledFormFlexCol = styled.form`
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

  .flexEnd {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 350px) {
      flex-direction: row;
      justify-content: flex-end;
    }
  }
`;

export const StyledDivFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
