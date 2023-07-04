import styled from "styled-components";

export const StyledTitle = styled.div`
  width: 100%;
  margin-top: 0%.2rem;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;

  & > a {
    text-decoration: underline;

    :hover {
      color: var(--color-grey100);
    }
  }
`;
export const DivTitle = styled.div`
  display: flex;
  min-width: 100%;
  align-items: center;
  justify-content: space-between;
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

export const DivModalBody = styled.div`
  width: 100%;
  margin-top: 0%.2rem;
  padding: 15px;
`;

export const DivBtns = styled.div`
  margin-top: 15px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;
