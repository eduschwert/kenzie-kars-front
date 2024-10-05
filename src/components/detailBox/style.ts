import styled from "styled-components";

export const StyledDivDetail = styled.div`
  background-color: ${({ theme }) => theme.colors.brand4};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > strong {
    font-size: 1.4rem;
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.inter};
    color: ${({ theme }) => theme.colors.brand1};
    white-space: nowrap;
  }
`;
