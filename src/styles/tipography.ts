import styled, { css } from "styled-components";

import { BaseText } from "./baseText";
import { Theme } from "./theme";

interface iStyledTextProps {
  $textStyle:
    | "heading-1-700"
    | "heading-2-600"
    | "heading-3-600"
    | "heading-3-500"
    | "heading-4-600"
    | "heading-4-500"
    | "heading-5-600"
    | "heading-5-500"
    | "heading-6-600"
    | "heading-6-500"
    | "heading-7-600"
    | "heading-7-500"
    | "body-1-400"
    | "body-1-600"
    | "body-2-400"
    | "body-2-500"
    | "button-big-text"
    | "button-medium-text"
    | "input-placeholder"
    | "input-label";
  $textColor:
    | "white"
    | "grey2"
    | "brand1"
    | "grey1"
    | "grey3"
    | "grey10"
    | "grey0"
    | "alert1"
    | "alert2"
    | "alert3"
    | "success1"
    | "success2"
    | "success3"
    | "negative";
}

export const text = ($textStyle: string, theme: Theme) => {
  switch ($textStyle) {
    case "heading-1-700":
      return css`
        font-size: 4.4rem;
        font-weight: 700;
        line-height: 1.27;
        font-family: ${theme.fonts.lexend};
      `;
    case "heading-2-600":
      return css`
        font-size: 3.6rem;
        font-weight: 600;
        font-family: ${theme.fonts.lexend};
      `;
    case "heading-3-600":
      return css`
        font-size: 3.2rem;
        font-weight: 600;
        font-family: ${theme.fonts.lexend};
      `;
    case "heading-3-500":
      return css`
        font-size: 3.2rem;
        font-weight: 500;
        font-family: ${theme.fonts.lexend};
      `;
    case "heading-4-600":
      return css`
        font-size: 2.8rem;
        font-weight: 600;
        font-family: ${theme.fonts.lexend};
      `;
    case "heading-4-500":
      return css`
        font-size: 2.8rem;
        font-weight: 500;
        font-family: ${theme.fonts.lexend};
      `;
    case "heading-5-600":
      return css`
        font-size: 2.4rem;
        font-weight: 600;
        font-family: ${theme.fonts.lexend};
      `;
    case "heading-5-500":
      return css`
        font-size: 2.4rem;
        font-weight: 500;
        font-family: ${theme.fonts.lexend};
      `;
    case "heading-6-600":
      return css`
        font-size: 2rem;
        font-weight: 600;
        font-family: ${theme.fonts.lexend};
      `;
    case "heading-6-500":
      return css`
        font-size: 2rem;
        font-weight: 500;
        font-family: ${theme.fonts.lexend};
      `;
    case "heading-7-600":
      return css`
        font-size: 1.6rem;
        font-weight: 600;
        font-family: ${theme.fonts.lexend};
      `;
    case "heading-7-500":
      return css`
        font-size: 1.6rem;
        font-weight: 500;
        font-family: ${theme.fonts.lexend};
      `;
    case "body-1-400":
      return css`
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.75;
        font-family: ${theme.fonts.inter};
      `;
    case "body-1-600":
      return css`
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 1.75;
        font-family: ${theme.fonts.inter};
      `;
    case "body-2-400":
      return css`
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.71;
        font-family: ${theme.fonts.inter};
      `;
    case "body-2-500":
      return css`
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.71;
        font-family: ${theme.fonts.inter};
      `;
    case "button-big-text":
      return css`
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 0;
        font-family: ${theme.fonts.inter};
      `;
    case "button-medium-text":
      return css`
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 0;
        font-family: ${theme.fonts.inter};
      `;
    case "input-placeholder":
      return css`
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 0;
        font-family: ${theme.fonts.inter};
      `;
    case "input-label":
      return css`
        font-size: 1.4rem;
        font-weight: 500;
        font-family: ${theme.fonts.inter};
      `;
  }
};

export const StyledText = styled(BaseText)<iStyledTextProps>`
  ${({ $textColor, theme }) => {
    switch ($textColor) {
      case "white":
        return css`
          color: ${theme.colors.whiteFixed};
        `;
      case "grey2":
        return css`
          color: ${theme.colors.grey2};
        `;
      case "brand1":
        return css`
          color: ${theme.colors.brand1};
        `;
      case "grey1":
        return css`
          color: ${theme.colors.grey1};
        `;
      case "grey3":
        return css`
          color: ${theme.colors.grey3};
        `;
      case "grey10":
        return css`
          color: ${theme.colors.grey10};
        `;
      case "grey0":
        return css`
          color: ${theme.colors.grey0};
        `;
      case "alert1":
        return css`
          color: ${theme.colors.alert1};
        `;
      case "alert2":
        return css`
          color: ${theme.colors.alert2};
        `;
      case "alert3":
        return css`
          color: ${theme.colors.alert3};
        `;
      case "success1":
        return css`
          color: ${theme.colors.success1};
        `;
      case "success2":
        return css`
          color: ${theme.colors.success2};
        `;
      case "success3":
        return css`
          color: ${theme.colors.success3};
        `;
      case "negative":
        return css`
          color: ${theme.colors.alert1};
        `;
    }
  }}
  letter-spacing: 0;
  ${({ $textStyle, theme }) => text($textStyle, theme)}
`;
