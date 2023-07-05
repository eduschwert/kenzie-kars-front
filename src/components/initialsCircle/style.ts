import styled from "styled-components";

interface iDiv {
  color: string;
}

export const CircleDiv = styled.div<iDiv>`
  background-color: #${({ color }) => color};
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
`;
