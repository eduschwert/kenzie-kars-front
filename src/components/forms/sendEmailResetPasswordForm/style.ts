import styled from "styled-components";

export const FormReset = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 92%;
`;

export const ContainerFormReset = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    -webkit-animation: slide-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  button {
    -webkit-animation: slide-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;
