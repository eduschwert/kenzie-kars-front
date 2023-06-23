import { iProductItem } from "../../contexts/productContext/types";
import { iVehicle } from "../../pages/profileViewAdmin/types";

export interface iCarListProfileViewProps {
  // vehicles: Array<iProductItem> | null;
  vehicles: Array<iProductItem> | null;
}

export interface iImageBoxProps {
  is_active: boolean;
}
