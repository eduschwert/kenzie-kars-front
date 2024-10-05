import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { InputMask } from "primereact/inputmask";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

import { StyledText } from "../../styles/tipography";
import { StyledDivInput, StyledDivInputPassword } from "./style";

export const Input = ({
  id,
  label,
  type,
  placeHolder,
  textarea,
  register,
  error,
  field,
  disabled,
  readOnly,
  mask,
  maxLength,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type?: "text" | "email" | "password" | "number" | "tel";
  placeHolder?: string;
  textarea?: boolean;
  register?: UseFormRegisterReturn;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field?: any;
  error?: FieldError;
  disabled?: boolean;
  readOnly?: boolean;
  mask?: string;
  maxLength?: number;
  value?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (e: any) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const renderInputField = () => {
    if (textarea) {
      return (
        <textarea
          id={id}
          placeholder={placeHolder}
          disabled={disabled}
          {...register}
        />
      );
    }

    if (mask) {
      return (
        <InputMask
          mask={mask}
          id={id}
          placeholder={placeHolder}
          type={type}
          disabled={disabled}
          {...field}
        />
      );
    }

    if (type === "password") {
      return (
        <StyledDivInputPassword>
          <input
            id={id}
            placeholder={placeHolder}
            type={showPassword ? "text" : "password"}
            disabled={disabled}
            autoComplete="new-password"
            {...register}
          />
          <button type="button" onClick={toggleShowPassword}>
            {showPassword ? (
              <FiEyeOff size={20} color="#212529" />
            ) : (
              <FiEye size={20} color="#212529" />
            )}
          </button>
        </StyledDivInputPassword>
      );
    }

    return (
      <input
        id={id}
        placeholder={placeHolder}
        type={type}
        disabled={disabled}
        readOnly={readOnly}
        value={value}
        autoComplete={type === "email" ? "username" : undefined}
        {...register}
        {...field}
        onChange={onChange}
        maxLength={maxLength}
      />
    );
  };

  return (
    <StyledDivInput $error={error}>
      <label htmlFor={id}>{label}</label>
      {renderInputField()}
      {error && (
        <StyledText tag="span" $textStyle="body-2-500" $textColor="negative">
          {error.message}
        </StyledText>
      )}
    </StyledDivInput>
  );
};
