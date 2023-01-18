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

export const ListItem = styled.li`
	border-bottom: 1px solid;
	width: 100%;
	padding: 10px 10px;
`;

export const HiddenView = styled.div`
	width: 30%;
	border-left: 1px solid;
	display: -webkit-box;
	min-height: 20px;
	text-overflow: ellipsis;
	flex-wrap: nowrap;
	overflow: hidden;
	word-break: break-word;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	padding: 0 20px;
`;

export const HiddenRepoNameView = styled(HiddenView)`
	width: 10%;
	border-left: 0;
`;

export const HiddenTitleView = styled(HiddenView)`
	width: 20%;
	border-left: 1px solid;
`;
