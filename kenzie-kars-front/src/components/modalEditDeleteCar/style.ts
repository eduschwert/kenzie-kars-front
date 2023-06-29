import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const StyledHeaderModal = styled.div`
  width: 100%;
  min-height: 52px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    background-color: transparent;
    border: none;
    padding: 5px;
    border-radius: var(--radius-2);
  }
  & > button:hover {
    background-color: var(--color-grey6);
    transition: 0.2s ease;
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

export const StyledDivButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const StyledDeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  > div:nth-child(2) > p {
    margin-bottom: 16px;
  }

  > div:nth-child(3) > p {
    margin-bottom: 36px;
  }
`;
