import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

interface Props {
	isLoading?: boolean;
}

const LoadingView = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	min-height: 500px;
	border: 1px solid;
`;

function EmptyView({ isLoading }: Props) {
	return isLoading ? (
		<LoadingView>
			<ReactLoading type="balls" color="#0000FF" height={100} width={50} />
		</LoadingView>
	) : (
		<LoadingView>데이터 없음</LoadingView>
	);
}

EmptyView.defaultProps = { isLoading: false };

export default EmptyView;
