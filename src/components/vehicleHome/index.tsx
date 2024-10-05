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
import { iVehicleResponseWithUserAndColor } from "../../interfaces";

export const VehicleHome = ({
  vehicle,
}: {
  vehicle: iVehicleResponseWithUserAndColor;
}) => {
  return (
    <StyledLiCar>
      <Link to={`/vehicle/${vehicle.id}`} state={{ vehicle: vehicle }}>
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
          <StyledText tag="p" $textStyle="body-1-600" $textColor="grey2">
            {vehicle.color}
          </StyledText>
          <StyledText tag="p" $textStyle="body-2-400" $textColor="grey2">
            {vehicle.description}
          </StyledText>
          <StyledDivUserAvatar>
            <UserAvatar
              size="small"
              color={vehicle.user.color || "#4529e6"}
              username={vehicle.user.name}
            />
            <StyledText tag="h5" $textStyle="body-2-500" $textColor="grey2">
              {vehicle.user.name}
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
