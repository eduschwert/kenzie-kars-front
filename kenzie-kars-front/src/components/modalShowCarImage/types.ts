import { Dispatch, SetStateAction } from "react";
import { iVehicle } from "../../pages/profileViewAdmin/types";
import { iProductItem } from "../../contexts/productContext/types";

export interface iModalShowCarImage {
  toggleImageModal: () => void;
  carImage: string;
}

export interface iVehicleFipeApi {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}
