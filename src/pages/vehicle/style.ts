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
    max-width: 135rem;
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
    height: 500px;
    background-color: ${({ theme }) => theme.colors.brand1};
  }

  & > .toTop {
    margin-top: -460px;

    & > .container {
      width: 95%;
      max-width: 135rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 4rem;

      @media (min-width: 850px) {
        flex-direction: row;
        gap: 2rem;
      }
    }
  }
`;

export const StyledDivLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 850px) {
    width: 60%;
  }
`;

export const StyledDivRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 850px) {
    width: 40%;
    max-width: 44rem;
  }
`;

export const StyledDivCoverImage = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 1.5rem;
  overflow: hidden;

  & > img {
    min-width: 55%;
    max-width: 80%;
    max-height: 80%;
    object-fit: cover;
    object-position: center;
  }
`;

export const StyledDivVehicleDetais = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  width: 100%;
  padding: 2.8rem 0px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  > div {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;

    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: ${({ theme }) => theme.borderRadius.small};
      font-weight: 600;
      font-family: ${({ theme }) => theme.fonts.inter};
      transition: 150ms ease-in-out;
      white-space: nowrap;
      background-color: ${({ theme }) => theme.colors.brand1};
      border: solid 0.15rem ${({ theme }) => theme.colors.brand1};
      color: ${({ theme }) => theme.colors.whiteFixed};
      height: 4.8rem;
      padding: 0 2.8rem;
      font-size: 1.6rem;

      :hover {
        background-color: ${({ theme }) => theme.colors.brand2};
        border: solid 0.15rem ${({ theme }) => theme.colors.brand2};
      }
    }
  }
`;

export const StyledDivVehicleDetailsPriceKm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  & > div {
    display: flex;
    gap: 1rem;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledDivVehicleDescription = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  width: 100%;
  padding: 3.6rem 0px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  > div {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
`;

export const StyledDivVehiclePhotos = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  width: 100%;
  padding: 3.6rem 0px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  > div {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
`;

export const StyledDivUserDetails = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  width: 100%;
  padding: 3.6rem 0px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  justify-content: center;

  & > div {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    & > p {
      text-align: center;
    }
  }
`;

export const StyledDivComments = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  width: 100%;
  padding: 3.6rem 0px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  & > div {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`;

export const StyledDivCommentInput = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  width: 100%;
  padding: 3.6rem 0px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  justify-content: center;
`;
