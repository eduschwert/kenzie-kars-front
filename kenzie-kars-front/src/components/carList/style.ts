import styled from "styled-components";

export const StyledCarList = styled.ul`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(298px, 1fr));
  justify-items: center;
  animation: animateCardHome 1s ease 0s 1 normal forwards;
`;

export const StyledNoCarsFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
