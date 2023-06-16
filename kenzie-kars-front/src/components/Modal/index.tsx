import { createPortal } from "react-dom";
import { ReactNode, useEffect, useRef } from "react";
import { Container } from "./styles";

interface ModalProps {
  toggleModal: () => void;
  blockClosing?: boolean;
  children: ReactNode;
}

export const Modal = ({ toggleModal, children, blockClosing }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggleModal();
      }
    };

    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    window.addEventListener("keydown", handleEscKey);
    disableScroll();

    return () => {
      window.removeEventListener("keydown", handleEscKey);
      enableScroll();
    };
  }, [toggleModal]);

  useEffect(() => {
    if (!blockClosing) {
      const handleClick = (event: MouseEvent) => {
        if (!ref.current) {
          return;
        }

        if (!event.target) {
          return;
        }

        if (
          !ref.current.contains(event.target as HTMLElement) &&
          !(
            event.target instanceof HTMLElement &&
            event.target.className.includes("Mui")
          )
        ) {
          toggleModal();
        }
      };

      window.addEventListener("mousedown", handleClick);

      return () => {
        window.removeEventListener("mousedown", handleClick);
      };
    }
  }, [toggleModal, blockClosing]);

  return createPortal(
    <Container>
      <div ref={blockClosing ? null : ref}>{children}</div>
    </Container>,
    document.body
  );
};
