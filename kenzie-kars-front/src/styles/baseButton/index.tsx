import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface iBaseButtonProps {
  tag: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  to?: string;
}

export const BaseButton = ({
  children,
  tag,
  className,
  type,
  disabled,
  onClick,
  href,
  to,
}: iBaseButtonProps) => {
  return (
    <div>
      {tag !== "button" && tag !== "a" && (
        <button
          type={type}
          className={className}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {tag === "button" && (
        <button
          type={type}
          className={className}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {tag === "a" && (
        <a href={href} className={className}>
          {children}{" "}
        </a>
      )}
    </div>
  );
};
