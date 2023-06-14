import styled from "styled-components";

export const Container = styled.div`
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow-y: auto;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  > div {
    margin-top: 78px;
    background: var(--white-fixed);
    border-radius: var(--radius-1);
    width: 520px;
    max-width: 100%;
    padding: 0 1.5rem 2rem 1.5rem;
  }
`;
