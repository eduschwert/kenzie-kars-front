import styled from "styled-components";

export const FormContainer = styled.div`
  width: 90%;
  max-width: 450px;
  background-color: var(--color-white);
  border-radius: 10px;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > p {
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
      color: var(--color-primary);
    }
    & > button {
      background-color: transparent;
      border: solid transparent;
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
    }
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      & > img {
        width: 30px;
      }
    }
  }
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;

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
