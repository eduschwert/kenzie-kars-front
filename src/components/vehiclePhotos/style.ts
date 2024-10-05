import styled from "styled-components";

export const StyledUl = styled.ul`
  display: grid;
  flex: 1;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;
  justify-items: center;
  grid-auto-flow: dense;
  align-items: stretch;
  justify-items: center;
  min-height: 4.8rem;

  & > li {
    max-width: 150px;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.grey7};

    & > button {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: none;
      transition: box-shadow 0.25s ease;
      overflow: hidden;

      & > img {
        width: 80%;
        height: 80%;
        object-fit: cover;
        transition: 250ms ease-in-out;
      }

      &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

        & > img {
          transform: scale(1.07);
        }
      }
    }
  }
`;
