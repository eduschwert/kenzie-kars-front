import { ClipLoader } from "react-spinners";

import { useModal, useSeller } from "../../hooks/useContexts";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import { Modal } from "../modal";
import { StyledDivFlexEnd, StyledDivModalBody } from "./style";

export const ModalDeleteVehicle = () => {
  const { selectedVehicle, deleteVehicle, loading } = useSeller();
  const { closeModal } = useModal();

  const vehicleId = selectedVehicle ? selectedVehicle.id : "";

  return (
    <Modal title="Excluir anúncio">
      <StyledDivModalBody>
        <StyledText tag="h2" $textStyle="heading-7-500" $textColor="grey1">
          Tem certeza que deseja excluir seu anúncio?
        </StyledText>
        <StyledText tag="p" $textStyle="body-1-400" $textColor="grey2">
          Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
          anúncio.
        </StyledText>
        <StyledDivFlexEnd>
          <div>
            <StyledButton
              onClick={closeModal}
              type="button"
              $buttonStyle="big"
              $buttonColor="negative"
            >
              Cancelar
            </StyledButton>
            <StyledButton
              onClick={() => deleteVehicle(vehicleId)}
              type="button"
              $buttonStyle="big"
              $buttonColor="alert"
              $minWidth="24rem"
            >
              {loading ? (
                <ClipLoader color="#F8F9FA" size={"3rem"} />
              ) : (
                "Sim, excluir meu anúncio"
              )}
            </StyledButton>
          </div>
        </StyledDivFlexEnd>
      </StyledDivModalBody>
    </Modal>
  );
};
