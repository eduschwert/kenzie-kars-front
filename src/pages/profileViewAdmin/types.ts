import { iSeller } from "../../contexts/productContext/types";
// import { iUserRegisterInformation } from "../../contexts/userContext/types";

interface iImage {
  id: string;
  image_number: number;
  image_url: string;
  createdAt: Date;
}

export interface iVehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  fuel: number;
  mileage: number;
  color: string;
  fipe_price: number;
  price: number;
  is_good_buy: boolean;
  is_active: boolean;
  description: string;
  cover_image: string;
  images: Array<iImage>;
  createdAt: Date;
  updatedAt: Date;
  // seller: iUserRegisterInformation;
  seller: iSeller;
}
