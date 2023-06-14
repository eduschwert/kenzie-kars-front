import styled from "styled-components";

export const StyledCarList = styled.div`
  width: 1392px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 700px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
