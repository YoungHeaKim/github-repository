import React, { useState } from 'react';
import { Input } from '../../components/atoms';
import { Header } from '../../components/molecules';
import { strings } from '../../constants';
import * as Styled from './styles';

// const Main = styled.main`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 16px;
//   width: 100%;
//   height: 100%;
//   background: ${({ theme }) => theme.common.colors.gray_1};
//   text-align: center;
// `;

function HomePage() {
	const [search, setSearch] = useState<string>('');

	return (
		<Styled.BodyView>
			<Header pageName="Home" />
			<header style={{ margin: '0 20px' }}>
				<Input
					value={search}
					onChange={({ target }) => setSearch(target.value)}
					name=""
					type="text"
					placeholder={strings.INPUT_PLACE_HOLDER}
				/>
			</header>
		</Styled.BodyView>
	);
}

export default HomePage;
HomePage.defaultProps = { status: undefined };
