import React, { PropsWithChildren } from 'react';
import styled, { css, CSSObject } from 'styled-components';
import { colors } from '../../../constants';
import theme, { TypoType } from '../../../styles/theme';

export interface TypoProps {
	typoType?: TypoType;
	color?: string;
	className?: string;
	style?: CSSObject;
}

const TypoComponent = styled.span<{
	typoType: TypoType;
	color: string;
}>`
	${({ typoType }) => {
		return theme.typo[typoType];
	}}

	${({ color }) => css`
		color: ${color};
	`};
`;

function Typo({
	children,
	typoType = 'b5',
	color = colors.GRAY1,
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
	typoType: 'b5',
	className: undefined,
	color: colors.GRAY1,
	style: undefined,
};

export default Typo;
