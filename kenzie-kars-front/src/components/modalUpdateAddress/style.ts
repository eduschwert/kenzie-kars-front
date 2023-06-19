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


export const StyledRegForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-white);
  border: 1px solid var(--color-grey20);
  border-radius: var(--radius-1);

  @media (min-width: 400px) {
    min-width: 420px;
  }
`;
export const HelperTextDiv = styled.div`
  width: 100%;
  max-width: 320px;
  gap: 0.5rem;
  min-height: 1.5rem;
  text-align: start;
  padding: 0 0.5rem;

  @media (min-width: 370px) {
    max-width: 370px;
  }
`;

export const StyledRegisterTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 2rem;
  padding: 0.5rem 0;
  margin: 1rem 0;
  margin-left: 2.5rem;

  & > a {
    text-decoration: underline;

    :hover {
      color: var(--color-grey100);
    }
  }
`;

export const SellerOrBuyerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  & > button {
    gap: 3rem;
    padding: 0;
    gap: 0.5rem;
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
