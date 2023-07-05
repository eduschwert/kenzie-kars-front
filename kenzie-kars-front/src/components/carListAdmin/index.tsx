import { StyledCarList } from "./style";

import { CardCarAdmin } from "../cardCarAdmin";
import { useProduct } from "../../hooks/useProduct";

export const CarListAdmin = () => {
  const { vehiclesProfileViewAdmin } = useProduct();
  return (
    <StyledCarList>
      {vehiclesProfileViewAdmin?.map((car) => (
        <CardCarAdmin key={car.id} car={car} />
      ))}
    </StyledCarList>
  );
};
