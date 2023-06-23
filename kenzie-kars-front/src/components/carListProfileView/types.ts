import { iProductItem } from "../../contexts/productContext/types";

export interface iCarListProfileViewProps {
  vehicles: Array<iProductItem> | null;
}

export interface iImageBoxProps {
  is_active: boolean;
}
