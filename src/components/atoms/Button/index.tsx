import React, { PropsWithChildren } from "react";
import styled, { css, CSSObject } from "styled-components";
import { ButtonSizeType, ButtonTypeType } from "../../../styles/theme";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  size?: ButtonSizeType;
  buttonType?: ButtonTypeType;
  disabled?: boolean;
  iconUrl?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  textCenter?: boolean;
  isFull?: boolean;
  className?: string;
  style?: CSSObject;
}
interface ButtonStyleProps {
  size: ButtonSizeType;
  buttonType: ButtonTypeType;
  iconUrl?: string;
  textCenter?: boolean;
  isFull?: boolean;
}

const getIconSize = (size: ButtonSizeType) => {
  let width = "20px";
  let height = "20px";
  let marginRight = "10px";
  switch (size) {
    case "large":
    case "default":
      width = "20px";
      height = "20px";
      marginRight = "10px";
      break;
    case "small":
      width = "12px";
      height = "12px";
      marginRight = "8px";
      break;
    case "x-small":
      width = "12px";
      height = "12px";
      marginRight = "5px";
      break;
    default:
      width = "20px";
      height = "20px";
      marginRight = "10px";
      break;
  }

  return `width: ${width}; height: ${height}; margin-right: ${marginRight}`;
};

const ButtonLayuout = styled.button<ButtonStyleProps>`
  // Default Settings
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  justify-content: ${({ textCenter }) =>
    `${textCenter ? `center` : `flex-start`}`};
  cursor: pointer;
  width: ${({ isFull }) => `${isFull ? `100%` : `auto`}`};

  ${({ iconUrl, size }) =>
    iconUrl
      ? css`
          span {
            display: block;
            background: url(${iconUrl}) no-repeat center center / contain;
            ${getIconSize(size)}
          }
        `
      : null}

  ${({ theme, size, buttonType }) =>
    css`
      ${theme.button.size[size]}
      color: ${theme.button.buttonType[buttonType].defaultStateStyle.color};
      background-color: ${theme.button.buttonType[buttonType].defaultStateStyle
        .backgroundColor};
      border: 1px solid
        ${theme.button.buttonType[buttonType].defaultStateStyle.borderColor};
      text-decoration: ${theme.button.buttonType[buttonType].underLine
        ? "underline"
        : "none"};

      &:hover {
        color: ${theme.button.buttonType[buttonType].hoverStateStyle.color};
        background-color: ${theme.button.buttonType[buttonType].hoverStateStyle
          .backgroundColor};
        border: 1px solid
          ${theme.button.buttonType[buttonType].hoverStateStyle.borderColor};
      }
      &:active {
        color: ${theme.button.buttonType[buttonType].pressedStateStyle.color};
        background-color: ${theme.button.buttonType[buttonType]
          .pressedStateStyle.backgroundColor};
        border: 1px solid
          ${theme.button.buttonType[buttonType].pressedStateStyle.borderColor};
      }
      &:disabled {
        color: ${theme.button.buttonType[buttonType].disabledStateStyle.color};
        background-color: ${theme.button.buttonType[buttonType]
          .disabledStateStyle.backgroundColor};
        border: 1px solid
          ${theme.button.buttonType[buttonType].disabledStateStyle.borderColor};
      }
    `}
`;

function Button({
  type = "button",
  children,
  size = "default",
  buttonType = ButtonTypeType.PRIMARY,
  disabled = false,
  iconUrl,
  onClick,
  textCenter = false,
  isFull = false,
  className,
  style,
}: PropsWithChildren<ButtonProps>) {
  return (
    <ButtonLayuout
      type={type}
      buttonType={buttonType}
      size={size}
      onClick={onClick}
      disabled={disabled}
      iconUrl={iconUrl}
      textCenter={textCenter}
      isFull={isFull}
      className={className}
      style={style}
    >
      {iconUrl && <span />}
      {children}
    </ButtonLayuout>
  );
}

Button.defaultProps = {
  type: "button",
  size: "default",
  buttonType: ButtonTypeType.PRIMARY,
  disabled: false,
  iconUrl: undefined,
  onClick: undefined,
  textCenter: false,
  isFull: false,
  className: undefined,
  style: undefined,
};

export default Button;
