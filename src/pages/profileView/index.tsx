import { StyledText } from "../../styles/tipography";
import {
  StyledDivFullPage,
  StyledMain,
  StyledDivUserInformations,
} from "./style";
import { UserAvatar } from "../../components/userAvatar";
import { DetailBox } from "../../components/detailBox";
import { Footer } from "../../components/footer";
import { Vehicles } from "../../components/vehicles";
import { Pagination } from "../../components/pagination";
import { useModal, useSeller, useUser } from "../../hooks/useContexts";
import { VehicleProfileView } from "../../components/vehicleProfileView";
import { StyledButton } from "../../styles/buttons";
import { ModalCreateVehicle } from "../../components/modalCreateVehicle";
import { ModalEditVehicle } from "../../components/modalEditVehicle";
import { ModalDeleteVehicle } from "../../components/modalDeleteVehicle";

export const ProfileViewPage = () => {
  const { user } = useUser();
  const { loading, sellerVehicles, page, setPage } = useSeller();
  const { isOpenModal, modalType, setModalType, openModal } = useModal();

  return (
    <>
      {isOpenModal && (
        <>
          {(() => {
            switch (modalType) {
              case "createVehicle":
                return <ModalCreateVehicle />;
              case "editVehicle":
                return <ModalEditVehicle />;
              case "deleteVehicle":
                return <ModalDeleteVehicle />;
            }
          })()}
        </>
      )}
      <StyledDivFullPage>
        <StyledMain>
          <div className="background"></div>
          <div className="toTop">
            <StyledDivUserInformations>
              <div>
                <UserAvatar username={user?.name} size="big" color="#4529E6" />
                <div className="userInformationName">
                  <StyledText
                    tag="h2"
                    $textStyle="heading-6-600"
                    $textColor="grey1"
                  >
                    {user?.name}
                  </StyledText>
                  <DetailBox value="Anunciante" />
                </div>
                <StyledText tag="p" $textStyle="body-1-400" $textColor="grey2">
                  {user?.description}
                </StyledText>
                <StyledButton
                  onClick={() => {
                    openModal();
                    setModalType("createVehicle");
                  }}
                  $buttonStyle="big"
                  $buttonColor="outlineBrand1"
                >
                  Criar Anúncio
                </StyledButton>
              </div>
            </StyledDivUserInformations>
            <div className="container">
              <StyledText
                tag="h1"
                $textStyle="heading-5-600"
                $textColor="grey1"
              >
                Anúncios
              </StyledText>
              <Vehicles
                loadingVehicle={loading}
                length={sellerVehicles ? sellerVehicles.data.length : 0}
                emptyMessage="Você ainda não possui nenhum anúncio"
              >
                {sellerVehicles &&
                  sellerVehicles.data.length > 0 &&
                  sellerVehicles.data.map((vehicle, i) => (
                    <VehicleProfileView key={i} vehicle={vehicle} />
                  ))}
              </Vehicles>
              <Pagination
                page={page}
                setPage={setPage}
                totalPages={sellerVehicles ? sellerVehicles.totalPages : 0}
              />
            </div>
          </div>
        </StyledMain>
        <Footer />
      </StyledDivFullPage>
    </>
  );
};
