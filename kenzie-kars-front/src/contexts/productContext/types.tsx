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
  year: number;
  fuel: string;
  mileage: number;
  price: number;
  fipePrice: number;
  coverImage: string;
  description: string;
  is_good_buy: boolean;
  seller: iSeller;
}

export interface iFilterConditions {
  brand?: string;
  model?: string;
  color?: string;
  year?: string;
  fuel?: string;
  minMileage?: number,
  maxMileage?: number,
  minPrice?: number,
  maxPrice?: number,
}

export interface iProductProviderValue {
  products: iProductItem[];
  filteredProducts: iProductItem[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<iProductItem[]>>;
  loadingProducts: boolean;
  setCarSeller: React.Dispatch<React.SetStateAction<iSeller | undefined>>;
  filterConditions: iFilterConditions;
  setFilterConditions: React.Dispatch<React.SetStateAction<iFilterConditions>>;
}