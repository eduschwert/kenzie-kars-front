import styled from "styled-components";

export const RegisterSection = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--color-grey6);
`;
export const RegisterFormDiv = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  /* width: 100%; */
  min-width: 343px;
  /* border: 1px solid var(--color-grey2); */
  background-color: var(--color-grey10);
  border-radius: var(--radius-2);
  padding: 1rem;

  @media (min-width: 400px) {
    min-width: 411px;
  }
`;
