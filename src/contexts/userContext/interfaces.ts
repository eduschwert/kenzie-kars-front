export interface iUserLoginRequest {
  email: string;
  password: string;
}

export interface iUserUpdatePassword {
  password: string;
  newPassword: string;
}

export interface iUserLoginResponse {
  accessToken: string;
}

export interface iUserAddressRequest {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string | null;
}

export interface iUserAddressResponse extends iUserAddressRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface iUserRequestWithoutAddress {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
  birthdate: string;
  description?: string | null | undefined;
  isSeller?: boolean;
}

export type iUserRequestUpdate = Omit<iUserRequestWithoutAddress, "password">;

export interface iUserRequest extends iUserRequestWithoutAddress {
  address: iUserAddressRequest;
}

export interface iUserResponseWithoutAddress
  extends Omit<iUserRequest, "password"> {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface iUserResponse extends iUserResponseWithoutAddress {
  address: iUserAddressResponse;
}

export interface iUserResponsePublic {
  name: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string | null | undefined;
}

export interface iUserResponseWithColor extends iUserResponsePublic {
  color: string;
}

export interface iUserProviderProps {
  user: iUserResponse | null;
  globalLoading: boolean;
  loading: boolean;
  signInUser: (formData: iUserLoginRequest) => void;
  signUpUser: (formData: iUserRequest) => void;
  updateUser: (formData: iUserRequestUpdate) => void;
  updateUserAddress: (formData: iUserAddressRequest) => void;
  updatePassword: (formData: iUserUpdatePassword) => void;
  deleteUser: () => void;
  logoutUser: () => void;
}
