import styled from "styled-components";

export const StyledDivFullPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > .headerHeight {
    height: 8rem;
  }

  & > .loading {
    min-height: 50rem;
    width: 95%;
    max-width: 135rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
