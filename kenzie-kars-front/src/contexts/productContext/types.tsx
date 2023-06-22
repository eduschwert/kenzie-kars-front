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
  sellerId: string;
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
  filterConditions: iFilterConditions;
  setFilterConditions: React.Dispatch<React.SetStateAction<iFilterConditions>>;
}