import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSObject } from 'styled-components';
import { ButtonTypeType } from '../../../styles/theme';
import { Row, Typo } from '../../atoms/index';
import { headerList } from './constants';
import * as Styled from './styles';

interface Props {
	pageName: string;
	style?: CSSObject;
}

function Header({ pageName, ...rest }: Props) {
	const navigate = useNavigate();
	const url = window.location.href;
	const pathName = new URL(url).pathname;

	return (
		<Styled.HeaderRow {...rest}>
			<Typo typoType="h1">{pageName}</Typo>
			<Row>
				{headerList.map((item) => (
					<Styled.LinkTypo
						buttonType={ButtonTypeType.UNDER_LINE}
						onClick={() => navigate(item.to)}
						key={item.title}
						textCenter
						disabled={pathName === item.to}
					>
						{item.title}
					</Styled.LinkTypo>
				))}
			</Row>
		</Styled.HeaderRow>
	);
}

Header.defaultProps = {
	style: {},
};

export default Header;
