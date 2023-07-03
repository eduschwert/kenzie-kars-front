import styled from "styled-components";

export const CommentItem = styled.li`
  width: 100%;
`;

export const TitleComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
export const NameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
export const DateComment = styled.div`
  height: 100%;
  display: flex;
  width: max-content;
  align-items: center;
`;
export const BodyComment = styled.div`
  margin-top: 10px;
`;

export const DivBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  gap: 7px;

  @media (min-width: 500px) {
    justify-content: flex-start;
  }
`;
