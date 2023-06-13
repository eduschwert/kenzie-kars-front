export interface iAddress {
  cep: string;
  state: string;
  city: string;
  street_name: string;
  street_number: string;
  complement: string;
}
export interface iUserRegisterValues {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  address: iAddress;
  is_seller?: boolean;
  password: string;
}

export interface iRegisterFormValues extends iUserRegisterValues {
  confirmPassword?: string;
}
