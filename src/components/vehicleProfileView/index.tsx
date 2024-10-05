import { StyledText } from "../../styles/tipography";
import { formatNumberBRWithPrefix } from "../../utils";
import { DetailBox } from "../detailBox";
import { UserAvatar } from "../userAvatar";
import {
  StyledLiCar,
  StyledDivIsActive,
  StyledDivUserAvatar,
  StyledDivVehicleDetails,
  StyledDivButtons,
} from "./style";
import { StyledButton, StyledLink } from "../../styles/buttons";
import { iVehicleResponseWithImages } from "../../interfaces";
import { useModal, useSeller, useUser } from "../../hooks/useContexts";
import brokenImage from "../../assets/imageBroken.svg";

export const VehicleProfileView = ({
  vehicle,
}: {
  vehicle: iVehicleResponseWithImages;
}) => {
  const { user } = useUser();
  const { setSelectedVehicle } = useSeller();
  const { openModal, setModalType } = useModal();
  return (
    <StyledLiCar>
      <div className="cardImage">
        <StyledDivIsActive $isActive={vehicle.isActive}>
          {vehicle.isActive ? "Ativo" : "Inativo"}
        </StyledDivIsActive>
        <img
          src={vehicle.coverImage}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.width = "5rem";
            target.src = brokenImage;
          }}
          alt="Imagem de capa do veículo"
        />
      </div>
      <div className="cardUserInformations">
        <StyledText tag="h4" $textStyle="heading-7-600" $textColor="grey1">
          {`${vehicle.brand} - ${vehicle.model}`}
        </StyledText>
        <StyledText tag="p" $textStyle="body-2-400" $textColor="grey2">
          {vehicle.color}
        </StyledText>
        <StyledText tag="p" $textStyle="body-2-400" $textColor="grey2">
          {vehicle.description}
        </StyledText>
        <StyledDivUserAvatar>
          <UserAvatar size="small" color="#4529e6" username={user?.name} />
          <StyledText tag="h5" $textStyle="body-2-500" $textColor="grey2">
            {user?.name}
          </StyledText>
        </StyledDivUserAvatar>
        <StyledDivVehicleDetails>
          <div className="cardVehicleYearPrice">
            <DetailBox value={`${vehicle.mileage} KM`} />
            <DetailBox value={vehicle.year} />
          </div>
          <StyledText
            tag="strong"
            $textStyle="heading-7-500"
            $textColor="grey1"
          >
            {formatNumberBRWithPrefix(vehicle.price)}
          </StyledText>
        </StyledDivVehicleDetails>
        <StyledDivButtons>
          <StyledButton
            onClick={() => {
              setSelectedVehicle(vehicle);
              openModal();
              setModalType("editVehicle");
            }}
            $buttonStyle="big"
            $buttonColor="outline2"
          >
            Editar
          </StyledButton>
          <StyledLink
            to={`/vehicle/${vehicle.id}`}
            $buttonStyle="big"
            $buttonColor="outline2"
            state={{
              vehicle: {
                ...vehicle,
                user: user,
              },
            }}
          >
            Ver detalhes
          </StyledLink>
        </StyledDivButtons>
      </div>
    </StyledLiCar>
  );
};
