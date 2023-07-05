import styled from "styled-components";

export const StyledCarImage = styled.div`
  width: 3rem;
  height: 20rem;
  padding: 1rem;
  & > img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
`;

export const ModalInnerContainer = styled.div`
  overflow: hidden;
  border-radius: var(--radius-1);
  padding: 1rem;

  > div {
    background: var(--white-fixed);
    border-radius: var(--radius-1);
    width: 520px;
    max-width: 100%;
    padding: 0 0.6 2rem 0.6;
    overflow-y: none;
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
