import styled from "styled-components";

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

export const StyledTitle = styled.div`
  width: 85%;
  margin-top: 0%.2rem;
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

export const Form = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 18px;

  & > button {
    margin-top: 5px;
    width: 100%;
    height: 52px;
    font-size: 18px;
    border-radius: 4px;
    background-color: var(--color-primary);
    opacity: 0.9;
    border: solid transparent;
    color: var(--color-white);

    &:hover {
      opacity: 1;
      border: solid transparent;
    }
  }
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
