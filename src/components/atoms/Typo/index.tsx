import React, { PropsWithChildren } from "react";
import styled, { css, CSSObject } from "styled-components";
import theme, { TypoType } from "../../../styles/theme";

export interface TypoProps {
  typoType?: TypoType;
  color?: keyof typeof theme.common.colors;
  className?: string;
  style?: CSSObject;
}

const TypoComponent = styled.span<{
  typoType: TypoType;
  color: keyof typeof theme.common.colors;
}>`
  ${({ typoType }) => {
    return theme.typo[typoType];
  }}

  ${({ color }) => css`
    color: ${theme.common.colors[color]};
  `};
`;

function Typo({
  children,
  typoType = "b5",
  color = "gray_1",
  className,
  style,
}: PropsWithChildren<TypoProps>) {
  return (
    <TypoComponent
      className={className}
      typoType={typoType}
      color={color}
      style={style}
    >
      {children}
    </TypoComponent>
  );
}

Typo.defaultProps = {
  typoType: "b5",
  className: undefined,
  color: "gray_1",
  style: undefined,
};

export default Typo;
