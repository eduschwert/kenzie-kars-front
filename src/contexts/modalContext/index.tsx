import { createContext, useState } from "react";

import { iModalProviderProps, ModalTypes } from "./interfaces";

export const ModalContext = createContext({} as iModalProviderProps);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState<ModalTypes>("");
  const [isClosing, setClosing] = useState(false);

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setIsOpenModal(false);
    }, 200);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <ModalContext.Provider
      value={{
        isClosing,
        isOpenModal,
        closeModal,
        openModal,
        modalType,
        setModalType,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
