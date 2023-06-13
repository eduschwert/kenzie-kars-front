import { StyledText } from "../../styles/tipography";
import { StyledSelectDiv, StyledSelect } from "./style";
import { HelperTextDiv } from "../inputComponent/style";
import { iSelect } from "./types";

export const SelectInput = ({
  label,
  id,
  options,
  register,
  firstOption,
  error,
}: iSelect) => {
  return (
    <StyledSelectDiv>
      <label htmlFor={id}>
        <StyledText tag="span" textStyle="headline">
          {label}
        </StyledText>
      </label>
      <StyledSelect id={id} {...register}>
        <option value="">{firstOption}</option>
        {options.map((option: string, index: number) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
      <HelperTextDiv>
        {error && (
          <StyledText tag="span" textStyle="headline" textColor="error">
            {error.message}
          </StyledText>
        )}
      </HelperTextDiv>
    </StyledSelectDiv>
  );
};
