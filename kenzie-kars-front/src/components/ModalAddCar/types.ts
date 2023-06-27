import { Dispatch, SetStateAction } from "react";
import { iProductItem } from "../../contexts/productContext/types";

export interface iModalAddCarProps {
  toggleModal: () => void;
  setVehicles: Dispatch<SetStateAction<Array<iProductItem> | null>>;
}

export interface iVehicleFipeApi {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}

export interface iFormData {
  brand: string;
  model: string;
  mileage: string;
  color: string;
  price: string;
  description: string;
  cover_image: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  [key: string]: string | undefined;
}
