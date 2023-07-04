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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivBtns = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 13px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const SubmitButton = styled.div`
  width: 100%;
`;

export const SelectContainer = styled.div`
  min-width: 100%;
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
