import styled, { css } from "styled-components";
import { BaseText } from "./baseText/baseText";
interface iStyledTextProps {
  textColor?: string;
  textStyle?: string;
}

export function text(textStyle: string) {
  switch (textStyle) {
    case "heading-1-700":
      return css`
        font-size: 44px;
        font-weight: 700;
        font-family: var(--font-family-lexend);
      `;
    case "heading-2-600":
      return css`
        font-size: 36px;
        font-weight: 600;
        font-family: var(--font-family-lexend);
      `;
    case "heading-3-600":
      return css`
        font-size: 32px;
        font-weight: 600;
        font-family: var(--font-family-lexend);
      `;
    case "heading-3-500":
      return css`
        font-size: 32px;
        font-weight: 500;
        font-family: var(--font-family-lexend);
      `;
    case "heading-4-600":
      return css`
        font-size: 28px;
        font-weight: 600;
        font-family: var(--font-family-lexend);
      `;
    case "heading-4-500":
      return css`
        font-size: 28px;
        font-weight: 500;
        font-family: var(--font-family-lexend);
      `;
    case "heading-5-600":
      return css`
        font-size: 24px;
        font-weight: 600;
        font-family: var(--font-family-lexend);
      `;
    case "heading-5-500":
      return css`
        font-size: 30px;
        font-weight: 500;
        font-family: var(--font-family-lexend);
      `;
    case "heading-6-600":
      return css`
        font-size: 20px;
        font-weight: 600;
        font-family: var(--font-family-lexend);
      `;
    case "heading-6-500":
      return css`
        font-size: 20px;
        font-weight: 500;
        font-family: var(--font-family-lexend);
      `;
    case "heading-7-600":
      return css`
        font-size: 16px;
        font-weight: 600;
        font-family: var(--font-family-lexend);
      `;
    case "heading-7-500":
      return css`
        font-size: 16px;
        font-weight: 500;
        font-family: var(--font-family-lexend);
      `;
    case "body-1-400":
      return css`
        font-size: 16px;
        font-weight: 400;
        font-family: var(--font-family-inter);
      `;
    case "body-1-600":
      return css`
        font-size: 16px;
        font-weight: 600;
        font-family: var(--font-family-inter);
      `;
    case "body-2-400":
      return css`
        font-size: 14px;
        font-weight: 400;
        font-family: var(--font-family-inter);
      `;
    case "body-2-500":
      return css`
        font-size: 14px;
        font-weight: 500;
        font-family: var(--font-family-inter);
      `;
    case "button-big-text":
      return css`
        font-size: 16px;
        font-weight: 600;
        font-family: var(--font-family-inter);
      `;
    case "button-medium-text":
      return css`
        font-size: 14px;
        font-weight: 600;
        font-family: var(--font-family-inter);
      `;
    case "input-placeholder":
      return css`
        font-size: 16px;
        font-weight: 400;
        font-family: var(--font-family-inter);
      `;
    case "input-label":
      return css`
        font-size: 14px;
        font-weight: 500;
        font-family: var(--font-family-inter);
      `;
    default:
      return css`
        font-size: 16px;
        font-weight: 400;
        font-family: var(--font-family-inter);
      `;
  }
}

export const StyledText = styled(BaseText)<iStyledTextProps>`
  ${({ textColor }) => {
    switch (textColor) {
      case "white":
        return css`
          color: var(--white-fixed);
        `;
      case "grey2":
        return css`
          color: var(--color-grey2);
        `;
      case "brand1":
        return css`
          color: var(--color-brand1);
        `;
      case "grey1":
        return css`
          color: var(--color-grey1);
        `;
      case "grey3":
        return css`
          color: var(--color-grey3);
        `;
      case "grey10":
        return css`
          color: var(--color-grey10);
        `;
      case "grey0":
        return css`
          color: var(--color-grey0);
        `;
      case "negative":
        return css`
          color: var(--color-alert1);
        `;
      case "success":
        return css`
          color: var(--color-success1);
        `;
      default:
        return css`
          color: var(--color-grey0);
        `;
    }
  }}
  ${({ textStyle }) => textStyle && text(textStyle)}
`;
