import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface iStyledButtonProps {
  buttonColor:
    | "grey1"
    | "negative"
    | "brand1"
    | "brandOpacity"
    | "light"
    | "outlineLight"
    | "outline1"
    | "outline2"
    | "outlineBrand1"
    | "link"
    | "alert"
    | "success"
    | "brandDisable";
  buttonStyle: "sm" | "bg" | "round";
  width?: string;
}

type iStyledLinkButtonProps = iStyledButtonProps & {
  disabled?: boolean;
};

export const buttonCSS = css<iStyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font-family-inter);
  font-weight: 600;
  white-space: nowrap;

  transition: 150ms ease-in-out;

  width: ${({ width }) => width || "auto"};

  &:disabled {
    background-color: var(--color-grey5);
    color: var(--white-fixed);
    border: solid 1.5px var(--color-grey5);
    cursor: not-allowed;
    &:hover {
      background-color: var(--color-grey5);
      color: var(--white-fixed);
      border: solid 1.5px var(--color-grey5);
    }
  }

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "bg":
        return css`
          height: 48px;
          padding: 0 28px;
          border-radius: var(--radius-2);

          font-size: 16px;
        `;
      case "sm":
        return css`
          height: 38px;
          padding: 0 20px;
          border-radius: var(--radius-2);

          font-size: 14px;
        `;
      case "sm-modal":
        return css`
          height: 38px;
          border-radius: var(--radius-2);
          width: 100%;
          padding-left: 5px;
          padding-right: 5px;
          
          font-size: 14px;
        `;
      case "round":
        return css`
          width: 24px;
          height: 24px;
        `;
    }
  }}

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
      case "brand1":
        return css`
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
    }
  }}
`;

export const StyledButton = styled.button<iStyledButtonProps>`
  ${buttonCSS}
`;

export const StyledLinkButton = styled(Link)<iStyledLinkButtonProps>`
  ${buttonCSS}

  ${({ disabled }) => {
    if (disabled) {
      return css`
        background-color: var(--color-grey5);
        color: var(--white-fixed);
        border: solid 1.5px var(--color-grey5);
        &:hover {
          background-color: var(--color-grey5);
          color: var(--white-fixed);
          border: solid 1.5px var(--color-grey5);
        }
      `;
    }
  }}
`;