import styled from 'styled-components';
import { Button, Row } from '../../components/atoms';
import { colors } from '../../constants';

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	height: 100%;
	background: ${colors.GRAY7};
	text-align: center;
	margin: 20px 40px;
`;

export const RowView = styled(Row)`
	justify-content: space-between;
`;

export const HeaderView = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 10px 40px 0;
`;

export const InputView = styled.div`
	position: relative;
	width: 50%;
	margin: 0 auto;
`;

export const ClearButton = styled(Button)`
	background-color: ${colors.NONE};
	position: absolute;
	top: 0;
	right: 0;
	color: ${colors.GRAY2};
`;

export const UlView = styled.ul`
	border: 1px solid;
	border-bottom: 0;
	margin-bottom: 20px;
`;

export const ListItem = styled.li`
	border-bottom: 1px solid;
	width: 100%;
	padding: 10px 10px;
`;
