import { StyledCarList } from "./style";

import { CardCarAdmin } from "../cardCarAdmin";
import { iCarListAdminProps } from "./types";

export const CarListAdmin = ({ cars }: iCarListAdminProps) => {
  return (
    <StyledCarList>
      {cars?.map((car) => (
        <CardCarAdmin key={car.id} car={car} />
      ))}
    </StyledCarList>
  );
};
