import styled from "styled-components";

export const StyledCarList = styled.ul`
  padding-bottom: 2rem;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(298px, 1fr));
  justify-items: start;
`;
