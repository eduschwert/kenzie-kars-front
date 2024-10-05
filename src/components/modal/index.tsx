import { createPortal } from "react-dom";
import { ReactNode, useEffect, useRef } from "react";

import { StyledButtonCloseModal, StyledDivModal } from "./styles";
import { StyledText } from "../../styles/tipography";
import x from "../../assets/xmark.svg";
import { useModal } from "../../hooks/useContexts";

export const Modal = ({
  children,
  blockClosing,
  title,
}: {
  blockClosing?: boolean;
  children: ReactNode;
  title: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { closeModal, isClosing } = useModal();

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const handleClick = (event: MouseEvent) => {
      if (!ref.current || blockClosing) {
        return;
      }

      if (
        !ref.current.contains(event.target as HTMLElement) &&
        !(
          event.target instanceof HTMLElement &&
          event.target.className.includes("Mui")
        )
      ) {
        closeModal();
      }
    };

    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    window.addEventListener("keydown", handleEscKey);
    window.addEventListener("mousedown", handleClick);
    disableScroll();

    return () => {
      window.removeEventListener("keydown", handleEscKey);
      window.removeEventListener("mousedown", handleClick);
      enableScroll();
    };
  }, [closeModal, blockClosing]);

  return createPortal(
    <StyledDivModal $isClosing={isClosing}>
      <div ref={blockClosing ? null : ref}>
        <div className="modalHeader">
          <StyledText tag="h4" $textStyle="heading-7-500" $textColor="grey1">
            {title}
          </StyledText>
          <StyledButtonCloseModal onClick={closeModal}>
            <img src={x} alt="" />
          </StyledButtonCloseModal>
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </StyledDivModal>,
    document.body
  );
};
