import styled from "styled-components";

export const StyledLiCar = styled.li`
  & .cardImage {
    position: relative;
    transition: 150ms ease-in-out;
    width: 100%;
    height: 15.2rem;
    max-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.grey7};
    overflow: hidden;

    & > img {
      transition: 250ms ease-in-out;
      width: 80%;
      object-fit: cover;
    }

    &:hover > img {
      transform: scale(1.07);
    }
  }

  & .cardUserInformations {
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    & h4,
    & p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      white-space: normal;
    }
  }
`;

export const StyledDivIsActive = styled.div<{ $isActive: boolean }>`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.brand1 : theme.colors.grey4};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0 0.8rem;
  height: 2.4rem;
  font-family: ${({ theme }) => theme.fonts.inter};
  color: ${({ theme }) => theme.colors.whiteFixed};
`;

export const StyledDivUserAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & h5 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const StyledDivVehicleDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  & > .cardVehicleYearPrice {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const StyledDivButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
