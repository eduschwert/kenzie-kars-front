import { Link } from "react-router-dom";

import brokenImage from "../../assets/imageBroken.svg";
import { StyledText } from "../../styles/tipography";
import { formatNumberBRWithPrefix } from "../../utils";
import { DetailBox } from "../detailBox";
import { UserAvatar } from "../userAvatar";
import {
  StyledLiCar,
  StyledDivGoodBuy,
  StyledDivUserAvatar,
  StyledDivVehicleDetails,
} from "./style";
import { iVehicleResponse } from "../../interfaces";
import { iUserResponsePublic } from "../../contexts/userContext/interfaces";

export const VehicleSeller = ({
  vehicle,
  user,
}: {
  vehicle: iVehicleResponse;
  user: iUserResponsePublic;
}) => {
  return (
    <StyledLiCar>
      <Link
        to={`/vehicle/${vehicle.id}`}
        state={{
          vehicle: {
            ...vehicle,
            user: user,
          },
        }}
      >
        <div className="cardImage">
          <StyledDivGoodBuy $isGoodBuy={vehicle.isGoodBuy}>$</StyledDivGoodBuy>
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
            <UserAvatar size="small" color="#4529e6" username={user.name} />
            <StyledText tag="h5" $textStyle="body-2-500" $textColor="grey2">
              {user.name}
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
        </div>
      </Link>
    </StyledLiCar>
  );
};
