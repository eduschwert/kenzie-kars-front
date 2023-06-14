import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface iSelect {
  label: string;
  id: string;
  options: string[];
  register: UseFormRegisterReturn<string>;
  firstOption: string;
  error?: FieldError;
}
