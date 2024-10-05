import styled from "styled-components";

export const StyledDivUserCircle = styled.div<{
  color: string;
  size: "big" | "small";
}>`
  height: ${({ size }) => (size === "big" ? "10.4rem" : "3.2rem")};
  width: ${({ size }) => (size === "big" ? "10.4rem" : "3.2rem")};
  border-radius: 50%;
  background-color: ${({ color }) => color};
  font-size: ${({ size }) => (size === "big" ? "3.6rem" : "1.4rem")};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.whiteFixed};
  font-family: ${({ theme }) => theme.fonts.inter};
  display: flex;
  align-items: center;
  justify-content: center;
`;
