import { ReactNode } from "react";

interface iBaseButtonProps {
  tag: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

export const BaseButton = ({
  children,
  tag,
  className,
  type,
  disabled,
  onClick,
  href,
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
