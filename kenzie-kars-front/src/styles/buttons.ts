import styled, { css } from "styled-components";
import { BaseButton } from "./baseButton";
interface iStyledButtonProps {
  buttonColor?: string;
  buttonStyle?: string;
  type?: string;
  disabled?: boolean;
}

//eslint-disable-next-line react-refresh/only-export-components
export const Button = (buttonStyle: string) => {
  switch (buttonStyle) {
    case "sm":
      return css`
        height: 38px;
        padding: 12px 20px;
        border-radius: var(--radius-2);

        font-family: var(--font-family-inter);
        font-weight: 600;
        font-size: 14px;
        line-height: 0px;
      `;
    case "bg":
      return css`
        height: 48px;
        padding: 14px 16px;
        border-radius: var(--radius-2);

        font-family: var(--font-family-inter);
        font-weight: 600;
        font-size: 16px;
        font-size: 16px;

        @media (min-width: 400px) {
          padding: 12px 36px;
        }
      `;
    case "sm-full":
      return css`
        width: 100%;
        height: 38px;
        padding: 12px 20px;
        border-radius: var(--radius-2);

        font-family: var(--font-family-inter);
        font-weight: 600;
        font-size: 14px;
        line-height: 0px;
      `;
    case "bg-full":
      return css`
        width: 100%;
        height: 48px;
        padding: 14px 28px;
        border-radius: var(--radius-2);
        display: flex;
        justify-content: center;

        font-family: var(--font-family-inter);
        font-weight: 600;
        font-size: 16px;
        font-size: 16px;
      `;
    case "sm-header":
      return css`
        height: 38px;
        padding: 12px 27px;
        border-radius: var(--radius-2);

        font-family: var(--font-family-inter);
        font-weight: 600;
        font-size: 14px;
        line-height: 0px;
      `;

    default:
      return css`
        height: 48px;
        padding: 12px 28px;
        border-radius: var(--radius-2);

        font-family: var(--font-family-inter);
        font-weight: 600;
        font-size: 16px;
        line-height: 0px;
      `;
  }
};

export const StyledButton = styled(BaseButton)<iStyledButtonProps>`
  ${({ buttonStyle }) => buttonStyle && Button(buttonStyle)}

  ${({ buttonColor }) => {
    switch (buttonColor) {
      case "grey1":
        return css`
          background-color: var(--color-grey0);
          color: var(--white-fixed);
          border: solid 1.5px var(--color-grey0);

          :hover {
            background-color: var(--color-grey1);
          }
        `;
      case "negative":
        return css`
          background-color: var(--color-grey6);
          color: var(--color-grey2);
          border: solid 1.5px var(--color-grey6);

          :hover {
            background-color: var(--color-grey1);
          }
        `;
      case "disable":
        return css`
          background-color: var(--color-grey5);
          color: var(--white-fixed);
          border: solid 1.5px var(--color-grey5);
        `;
      case "brand1":
        return css`
          background-color: var(--color-brand1);
          color: var(--white-fixed);
          border: solid 1.5px var(--color-brand1);

          :hover {
            background-color: var(--color-brand2);
          }
        `;
      case "brand1-100":
        return css`
          width: 100%;
          background-color: var(--color-brand1);
          color: var(--white-fixed);
          border: solid 1.5px var(--color-brand1);

          :hover {
            background-color: var(--color-brand2);
          }
        `;
      case "brandOpacity":
        return css`
          background-color: var(--color-brand4);
          color: var(--color-brand1);
          border: solid 1.5px var(--color-brand4);
        `;
      case "light":
        return css`
          background-color: var(--color-grey10);
          color: var(--color-grey1);
          border: solid 1.5px var(--color-grey10);
        `;
      case "outlineLight":
        return css`
          background-color: transparent;
          color: var(--color-grey10);
          border: solid 1.5px var(--color-grey10);

          :hover {
            background-color: var(--color-grey10);
            color: var(--color-grey1);
          }
        `;
      case "outline1":
        return css`
          background-color: var(--color-grey10);
          color: var(--color-grey0);
          border: solid 1.5px var(--color-grey0);

          :hover {
            background-color: var(--color-grey1);
            color: var(--color-grey10);
          }
        `;
      case "outline2":
        return css`
          background-color: var(--color-grey10);
          color: var(--color-grey0);
          border: solid 1.5px var(--color-grey4);

          :hover {
            background-color: var(--color-grey1);
            color: var(--color-grey10);
          }
        `;
      case "outlineBrand1":
        return css`
          background-color: var(--color-grey10);
          color: var(--color-brand1);
          border: solid 1.5px var(--color-brand1);

          :hover {
            background-color: var(--color-brand4);
          }
        `;
      case "link":
        return css`
          background-color: transparent;
          color: var(--color-grey0);
          border: solid 1.5px transparent;

          :hover {
            background-color: var(--color-grey8);
            border: solid 1.5px var(--color-grey8);
          }
        `;
      case "alert":
        return css`
          background-color: var(--color-alert3);
          color: var(--color-alert1);
          border: solid 1.5px var(--color-alert3);

          :hover {
            background-color: var(--color-alert2);
            border: solid 1.5px var(--color-alert2);
          }
        `;
      case "success":
        return css`
          background-color: var(--color-success3);
          color: var(--color-success1);
          border: solid 1.5px var(--color-success3);

          :hover {
            background-color: var(--color-success2);
            border: solid 1.5px var(--color-success2);
          }
        `;
      case "brandDisable":
        return css`
          background-color: var(--color-brand3);
          color: var(--color-brand4);
          border: solid 1.5px var(--color-brand3);
        `;

      default:
        return css`
          background-color: var(--color-brand1);
          color: var(--white-fixed);
          border: solid 1.5px var(--color-brand1);

          :hover {
            background-color: var(--color-brand2);
          }
        `;
    }
  }}

${({ disabled, type }) => {
    if (disabled && type === "submit") {
      return css`
        background-color: var(--color-grey5);
        color: var(--white-fixed);
        border: solid 1.5px var(--color-grey5);
        cursor: not-allowed;
      `;
    } else if (!disabled && type === "submit") {
      return css`
        background-color: var(--color-brand1);
        color: var(--white-fixed);
        border: solid 1.5px var(--color-brand1);

        :hover {
          background-color: var(--color-brand2);
          border: solid 1.5px var(--color-brand2);
          cursor: pointer;
        }
      `;
    }
  }}
`;
