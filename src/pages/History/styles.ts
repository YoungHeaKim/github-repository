import styled from 'styled-components';
import { Row } from '../../components/atoms';

export const HeaderView = styled.header`
	padding: 10px 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const MainView = styled.main`
	padding: 10px 40px;
`;

export const RowView = styled(Row)`
	justify-content: space-between;
`;

export const Footer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
`;

export const UlView = styled.ul`
	border: 1px solid;
	border-bottom: 0;
	margin-bottom: 20px;
	text-align: center;
`;

export const ListItem = styled.li`
	border-bottom: 1px solid;
	width: 100%;
	padding: 10px 10px;
`;

export const HiddenView = styled.div`
	width: 10%;
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

export const PaginationView = styled(Row)`
	justify-content: center;
	position: relative;
`;

export const TotalTypoView = styled.div`
	position: absolute;
	right: 20px;
`;
