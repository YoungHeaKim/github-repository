import styled, { css } from 'styled-components';
import { Row } from '../../atoms';

export const RowView = styled(Row)`
	display: flex;
	justify-content: space-between;
`;

export const ImageView = styled.div<{ isSelect: boolean }>`
	${({ isSelect }) => css`
		width: ${isSelect ? '10%' : '15%'};
		display: flex;
		justify-content: center;
		border-left: ${isSelect ? '1px solid' : 0};
	`}
`;

export const BodyView = styled.div<{ isSelect: boolean }>`
	${({ isSelect }) => css`
		width: ${isSelect ? '30%' : '40%'};
		display: flex;
		justify-content: center;
		border-left: 1px solid;
	`}
`;

export const ItemView = styled.div<{ width: string }>`
	width: ${({ width }) => width};
	display: flex;
	justify-content: center;
	border-left: 1px solid;
`;

export const ButtonView = styled(Row)`
	width: 30%;
	display: flex;
	justify-content: center;
	border-left: 1px solid;
`;
