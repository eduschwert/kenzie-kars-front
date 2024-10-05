import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface iStyledButtonProps {
  $buttonColor:
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
    | "link2"
    | "alert"
    | "success"
    | "brandDisable";
  $buttonStyle: "big" | "small";
  $minWidth?: string;
}

export const buttonCSS = css<iStyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 600;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.inter};
  transition: 150ms ease-in-out;
  min-width: ${({ $minWidth }) => $minWidth};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey5};
    color: ${({ theme }) => theme.colors.whiteFixed};
    border: solid 0.15rem ${({ theme }) => theme.colors.grey5};
    cursor: not-allowed;
  }

  ${({ $buttonStyle }) => {
    switch ($buttonStyle) {
      case "big":
        return css`
          height: 4.8rem;
          padding: 0 2.8rem;
          font-size: 1.6rem;
        `;
      case "small":
        return css`
          height: 3.8rem;
          padding: 0 2rem;
          font-size: 1.4rem;
        `;
    }
  }}

  ${({ $buttonColor, theme }) => {
    switch ($buttonColor) {
      case "grey1":
        return css`
          background-color: ${theme.colors.grey0};
          border: solid 0.15rem ${theme.colors.grey0};
          color: ${theme.colors.whiteFixed};
          &:hover {
            background-color: ${theme.colors.grey1};
            border: solid 0.15rem ${theme.colors.grey1};
          }
        `;
      case "negative":
        return css`
          background-color: ${theme.colors.grey6};
          border: solid 0.15rem ${theme.colors.grey6};
          color: ${theme.colors.grey2};
          &:hover {
            background-color: ${theme.colors.grey5};
            border: solid 0.15rem ${theme.colors.grey5};
          }
        `;
      case "brand1":
        return css`
          background-color: ${theme.colors.brand1};
          border: solid 0.15rem ${theme.colors.brand1};
          color: ${theme.colors.whiteFixed};
          &:hover {
            background-color: ${theme.colors.brand2};
            border: solid 0.15rem ${theme.colors.brand2};
          }
          &:disabled {
            background-color: ${theme.colors.brand3};
            border: solid 0.15rem ${theme.colors.brand3};
            color: ${theme.colors.brand4};
          }
        `;
      case "brandOpacity":
        return css`
          background-color: ${theme.colors.brand4};
          border: solid 0.15rem ${theme.colors.brand4};
          color: ${theme.colors.brand1};
        `;
      case "light":
        return css`
          background-color: ${theme.colors.grey10};
          border: solid 0.15rem ${theme.colors.grey10};
          color: ${theme.colors.grey1};
        `;
      case "outlineLight":
        return css`
          background-color: ${theme.colors.grey10};
          border: solid 0.15rem ${theme.colors.grey10};
          color: ${theme.colors.grey10};
          &:hover {
            color: ${theme.colors.grey1};
          }
        `;
      case "outline1":
        return css`
          background-color: transparent;
          border: solid 0.15rem ${theme.colors.grey0};
          color: ${theme.colors.grey0};
          &:hover {
            background-color: ${theme.colors.grey1};
            border: solid 0.15rem ${theme.colors.grey1};
            color: ${theme.colors.grey10};
          }
        `;
      case "outline2":
        return css`
          background-color: transparent;
          border: solid 0.15rem ${theme.colors.grey4};
          color: ${theme.colors.grey0};
          &:hover {
            background-color: ${theme.colors.grey1};
            border: solid 0.15rem ${theme.colors.grey1};
            color: ${theme.colors.grey10};
          }
        `;
      case "outlineBrand1":
        return css`
          background-color: transparent;
          border: solid 0.15rem ${theme.colors.brand1};
          color: ${theme.colors.brand1};
          &:hover {
            background-color: ${theme.colors.brand4};
          }
        `;
      case "link":
        return css`
          background-color: transparent;
          border: none;
          color: ${theme.colors.grey0};
          &:hover {
            background-color: ${theme.colors.grey8};
          }
        `;
      case "link2":
        return css`
          background-color: transparent;
          border: none;
          color: ${theme.colors.grey2};
          &:hover {
            background-color: ${theme.colors.grey8};
          }
        `;
      case "alert":
        return css`
          background-color: ${theme.colors.alert3};
          border: solid 0.15rem ${theme.colors.alert3};
          color: ${theme.colors.alert1};
          &:hover {
            background-color: ${theme.colors.alert2};
            border: solid 0.15rem ${theme.colors.alert2};
          }
        `;
      case "success":
        return css`
          background-color: ${theme.colors.success3};
          border: solid 0.15rem ${theme.colors.success3};
          color: ${theme.colors.success1};
          &:hover {
            background-color: ${theme.colors.success2};
            border: solid 0.15rem ${theme.colors.success2};
          }
        `;
    }
  }}
`;

export const StyledButton = styled.button<iStyledButtonProps>`
  ${buttonCSS}
`;

export const StyledLink = styled(Link)<iStyledButtonProps>`
  ${buttonCSS}
`;
