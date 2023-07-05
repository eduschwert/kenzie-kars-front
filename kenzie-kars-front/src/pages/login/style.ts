import styled from "styled-components";

export const ContainerWrapper = styled.div`
  @media (min-width: 700px) {
    min-height: 100%;
    position: relative;
  }
`;

export const LoginSection = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--color-grey6);
  min-height: 100vh;

  @media (min-width: 700px) {
    padding-bottom: 6rem;
  }
`;
export const LoginFormDiv = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  /* width: 100%; */
  min-width: 343px;
  /* border: 1px solid var(--color-grey2); */
  background-color: var(--color-grey10);
  border-radius: var(--radius-2);
  height: 100%;
  padding: 2rem 1rem;

  @media (min-width: 400px) {
    min-width: 411px;
  }
`;
