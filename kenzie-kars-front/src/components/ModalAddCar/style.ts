import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const StyledHeaderModal = styled.div`
  width: 100%;
  min-height: 52px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 150ms ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const StyledBodyModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;

  > div {
    width: 50%;
  }
`;

export const FlexEnd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 400px) {
    justify-content: flex-end;
  }
`;
