import React, { ReactElement, ReactNode } from 'react';
import styled, { CSSObject } from 'styled-components';

interface Props {
	children: ReactNode | ReactNode[];
	style?: CSSObject;
}

const StyledRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

function Row({ children, ...rest }: Props): ReactElement {
	return <StyledRow {...rest}>{children}</StyledRow>;
}

Row.defaultProps = {
	style: {},
};

export default Row;
