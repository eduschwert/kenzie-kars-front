import styled from "styled-components";

export const Container = styled.div`
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  > div {
    margin: 78px 0;
    background: var(--white-fixed);
    border-radius: var(--radius-1);
    width: 520px;
    max-width: 100%;
    padding: 0 1.5rem 2rem 1.5rem;
    overflow-y: auto;
    max-height: calc(100vh - 156px);

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--color-grey6);
      border-radius: var(--radius-2);
    }

    ::-webkit-scrollbar-track {
      background-color: var(--white-fixed);
    }
  }
`;
