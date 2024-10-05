import styled from "styled-components";

export const StyledDivFullPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledDivLogo = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 500px;
  margin-top: 8rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5rem;
  margin-bottom: 4rem;

  @media screen and (min-width: 768px) {
    align-items: center;
    padding-top: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.29),
      rgba(0, 0, 0, 1)
    );
    z-index: 1;
  }

  & > img {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
  }

  & > .logoText {
    width: 85%;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    text-align: center;

    @media screen and (max-width: 768px) {
      gap: 3rem;

      & > h1 {
        font-size: 3.2rem;
        font-weight: 500;
      }

      & > h2 {
        font-size: 2.4rem;
        font-weight: 500;
      }
    }
  }
`;

export const StyledDivContainer = styled.div`
  width: 95%;
  max-width: 148rem;
  gap: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;

  & > .filterButton {
    width: 100%;
    max-width: 28rem;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  & > .filterCards {
    display: flex;
    justify-content: space-between;
    align-items: normal;
    gap: 2rem;
    width: 100%;
  }
`;

export const StyledDivFilter = styled.div`
  display: none;
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  @media screen and (min-width: 768px) {
    display: flex;
    position: sticky;
    width: 30rem;
    top: 8rem;
    min-height: 45rem;
    max-height: 70vh;
    padding: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: solid 0.2rem ${({ theme }) => theme.colors.grey5};
    z-index: 999;
    overflow: hidden auto;

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
  }
`;
