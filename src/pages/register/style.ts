import styled from "styled-components";

export const StyledDivFullPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: space-between;
  align-items: center;

  > .headerHeight {
    height: 8rem;
  }

  > .form {
    background-color: ${({ theme }) => theme.colors.whiteFixed};
    width: 95%;
    max-width: 42rem;
    display: flex;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    padding: 4.4rem 0px;
    display: flex;
    justify-content: center;
  }
`;
