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
  mileage: boolean;
  price: boolean;
}

export interface iProductProviderValue {
  products: iProductItem[];
  filteredProducts: iProductItem[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<iProductItem[]>>;
  loadingProducts: boolean;
  setCarSeller: React.Dispatch<React.SetStateAction<iSeller | undefined>>;
  filterConditions: iFilterConditions;
  setFilterConditions: React.Dispatch<React.SetStateAction<iFilterConditions>>;
  //   actionOverCarBrand: boolean;
  //   setActionOverCarBrand: React.Dispatch<React.SetStateAction<boolean>>;
  //   actionOverCarModel: boolean;
  //   setActionOverCarModel: React.Dispatch<React.SetStateAction<boolean>>;
  //   actionOverCarColor: boolean;
  //   setActionOverCarColor: React.Dispatch<React.SetStateAction<boolean>>;
  //   actionOverCarYear: boolean;
  //   setActionOverCarYear: React.Dispatch<React.SetStateAction<boolean>>;
  //   actionOverCarFuel: boolean;
  //   setActionOverCarFuel: React.Dispatch<React.SetStateAction<boolean>>;
  //   actionOverCarMileage: boolean;
  //   setActionOverCarMileage: React.Dispatch<React.SetStateAction<boolean>>;
  //   actionOverCarPrice: boolean;
  //   setActionOverCarPrice: React.Dispatch<React.SetStateAction<boolean>>;
}
