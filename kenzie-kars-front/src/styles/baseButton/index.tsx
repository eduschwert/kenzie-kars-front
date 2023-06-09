import { ReactNode } from "react";

interface iBaseButtonProps {
  tag: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export const BaseButton = ({
  children,
  tag,
  className,
  onClick,
}: iBaseButtonProps) => {
  return (
    <div>
      {tag !== "button" && tag !== "a" && (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      )}
      {tag === "button" && (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      )}
      {tag === "a" && <a className={className}>{children} </a>}
    </div>
  );
};
