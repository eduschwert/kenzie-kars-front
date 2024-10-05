import { StyledDivDetail } from "./style";

export const DetailBox = ({
  value,
}: {
  value: string | number | undefined;
}) => {
  return (
    <StyledDivDetail>
      <strong>{value}</strong>
    </StyledDivDetail>
  );
};
