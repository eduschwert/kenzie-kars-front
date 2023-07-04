// import { date, number } from "yup";

import { iCardCarProps } from "../../components/carList/types";

export interface iSeller {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  is_seller: string;
  id: string;
  createdAt: string;
}

export interface iProductItem {
  id: string;
  brand: string;
  model: string;
  color: string;
  year: string;
  fuel: number;
  mileage: number;
  price: number;
  is_active: boolean;
  fipe_price: number;
  cover_image: string;
  images?: Array<iImage>;
  description: string;
  is_good_buy: boolean;
  seller: iSeller;
}

export interface iImage {
  id: number;
  image_number: number;
  image_url: string;
  createdAt: Date;
}
export interface iFilterConditions {
  brand?: string;
  model?: string;
  color?: string;
  year?: string;
  fuel?: string;
  minMileage?: number;
  maxMileage?: number;
  minPrice?: number;
  maxPrice?: number;
}

export interface iComment {
  content: string;
  id: string;
  createdAt: string;
  owner: {
    name: string;
    id: string;
  };
  vehicle: {
    id: string;
  };
}

export interface iProductProviderValue {
  products: iProductItem[];
  filteredProducts: iProductItem[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<iProductItem[]>>;
  vehiclesProfileViewAdmin: iProductItem[] | null;
  setVehiclesProfileViewAdmin: React.Dispatch<
    React.SetStateAction<iProductItem[] | null>
  >;
  loadingProducts: boolean;
  carSeller: iProductItem | null;
  setCarSeller: React.Dispatch<React.SetStateAction<iProductItem | null>>;
  filterConditions: iFilterConditions;
  setFilterConditions: React.Dispatch<React.SetStateAction<iFilterConditions>>;
  getProductsPagination: (perPage: number, page: number) => void;
  totalPages: number;
  comments: iComment[];
  setComments: React.Dispatch<React.SetStateAction<iComment[]>>;
  getVehicleId: (vehicleId: string) => void;
  getComments: () => void;
}
