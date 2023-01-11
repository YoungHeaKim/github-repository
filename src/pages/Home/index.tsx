import React, { useState } from 'react';
import { Input } from '../../components/atoms';
import { Header } from '../../components/molecules';
import { strings } from '../../constants';
// import { Radio, Row } from 'antd';
// import TextArea from '../../components/atoms/TextArea';
// import Input from '../../components/atoms/Input';
// import Typo from '../../components/atoms/Typo';
// import Button from '../../components/atoms/Button';
// import Editor from '../../components/atoms/Editor';

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
		<div style={{ flex: 1, border: '1px solid' }}>
			<Header pageName="Home" />
			<Input
				value={search}
				onChange={({ target }) => setSearch(target.value)}
				name=""
				type="text"
				placeholder={strings.INPUT_PLACE_HOLDER}
			/>
		</div>
	);
}

export default HomePage;
HomePage.defaultProps = { status: undefined };
