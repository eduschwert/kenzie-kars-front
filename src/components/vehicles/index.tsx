import { ClipLoader } from "react-spinners";

import { StyledDivVehicles, StyledUlCarList } from "./style";
import { StyledText } from "../../styles/tipography";

export const Vehicles = ({
  loadingVehicle,
  length,
  children,
  emptyMessage,
}: {
  loadingVehicle: boolean;
  length: number;
  children: React.ReactNode;
  emptyMessage: string;
}) => {
  return (
    <StyledDivVehicles>
      {loadingVehicle ? (
        <ClipLoader color="#212529" size={"5rem"} className="emptyMessage" />
      ) : length > 0 ? (
        <div className="cards">
          <StyledUlCarList>{children}</StyledUlCarList>
        </div>
      ) : (
        <StyledText
          tag="p"
          $textStyle="body-1-600"
          $textColor="grey1"
          className="emptyMessage"
        >
          {emptyMessage}
        </StyledText>
      )}
    </StyledDivVehicles>
  );
};
