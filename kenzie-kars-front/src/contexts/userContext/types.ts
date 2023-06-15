export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserLoginInformation {
  email: string;
  password: string;
}

export interface iUserInformation {
  name: string;
  email: string;
  id: string;
}

export interface iUserAddress {
  cep: string;
  state: string;
  city: string;
  street_name: string;
  street_number: string;
  complement?: string;
}

export interface iUserAddressResponse extends iUserAddress {
  id: string;
  createdAt: string;
}

export interface iUserRegisterInformation {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  address: iUserAddress;
  is_seller: boolean;
  password: string;
}

export interface iUserResponse {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  address: iUserAddressResponse;
  is_seller: boolean;
  id: string;
  createdAt: string;
}

export interface iUserProviderProps {
  user: iUserResponse;

  signInUser: (formData: iUserLoginInformation) => void;
  // loading: boolean;
  // setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadingProfileView: boolean;
  registerUser: (formData: iUserRegisterInformation, reset: () => void) => void;
  logoutUser: () => void;
  spinner: boolean;
  setSpinner: React.Dispatch<React.SetStateAction<boolean>>;
  errorApi: boolean;
  setErrorApi: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface iDefaultErrorResponse {
  error: string;
}
