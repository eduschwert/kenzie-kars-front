import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.grey0};
  width: 100%;
  min-height: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .footerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 97%;
    max-width: 148rem;
    height: 100%;
    padding: 3rem 0px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 5rem;
    }
  }
`;

export const StyledButtonFooter = styled.button`
  border: none;
  width: 4.5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.grey1};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 150ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey2};
  }
`;
