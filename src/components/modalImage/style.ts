import styled from "styled-components";

export const StyledDivImage = styled.div`
  background-color: ${({ theme }) => theme.colors.grey7};
  width: 100%;
  min-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    object-fit: cover;
    width: 90%;
    overflow: hidden;
  }
`;
