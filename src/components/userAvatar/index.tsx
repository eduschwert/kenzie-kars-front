import { StyledDivUserCircle } from "./style";

export const UserAvatar = ({
  username,
  color,
  size,
}: {
  username: string | undefined;
  color: string;
  size: "small" | "big";
}) => {
  const initials = username
    ? username
        .split(" ")
        .map((name) => name[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "";

  return (
    <StyledDivUserCircle size={size} color={color}>
      <p>{initials}</p>
    </StyledDivUserCircle>
  );
};
