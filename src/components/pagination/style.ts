import styled from "styled-components";

export const StyledDivPagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;

  > strong > span {
    font-size: 2.4rem;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.lexend};
  }

  > strong > span:first-child {
    color: ${({ theme }) => theme.colors.grey3};
  }

  > strong > span:last-child {
    color: rgba(134, 142, 150, 0.5);
  }
`;

export const StyledButtonPagination = styled.button`
  font-size: 2.4rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.lexend};
  color: ${({ theme }) => theme.colors.brand2};
  background: none;
  border: none;

  & > :hover {
    text-decoration: underline;
  }

  &:disabled {
    color: rgba(134, 142, 150, 0.5);
    cursor: not-allowed;
  }
`;
