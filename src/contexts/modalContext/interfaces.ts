export type ModalTypes =
  | ""
  | "filter"
  | "image"
  | "editUser"
  | "editUserAddress"
  | "editUserPassword"
  | "deleteUser"
  | "createVehicle"
  | "editVehicle"
  | "deleteVehicle"
  | "editComment"
  | "deleteComment";

export interface iModalProviderProps {
  isClosing: boolean;
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalType: ModalTypes;
  setModalType: React.Dispatch<React.SetStateAction<ModalTypes>>;
}
