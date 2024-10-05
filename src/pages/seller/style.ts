import styled from "styled-components";

export const StyledDivFullPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > .headerHeight {
    height: 8rem;
  }

  & > .loading {
    min-height: 50rem;
    width: 95%;
    max-width: 148rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledMain = styled.main`
  width: 100%;
  margin-top: 8rem;

  & > .background {
    height: 32.5rem;
    background-color: ${({ theme }) => theme.colors.brand1};
  }

  & > .toTop {
    margin-top: -27.5rem;

    & > .container {
      width: 95%;
      max-width: 148rem;
      margin: 0 auto 4rem auto;
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
  }
`;

export const StyledDivUserInformations = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 95%;
  max-width: 124rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 4rem 0px;
  margin-bottom: 5rem;

  > div {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    & > .userInformationName {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;
