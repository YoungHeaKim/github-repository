import axios from 'axios';
import React, { useState } from 'react';
import { Octokit } from '@octokit/rest';
import { useQuery } from 'react-query';
import { isEmpty } from 'lodash';
import styled from 'styled-components';
import { Button, Input, Row } from '../../components/atoms';
import { DefaultLayOut } from '../../components/oraganisms';
import { colors, commonReactQueryOptions, strings } from '../../constants';
import useAuth from '../../hooks/useAuth';
import useAuthActions from '../../hooks/useAuthActions';
import { ButtonTypeType } from '../../styles/theme';
import { logError } from '../../utils/utils';
import useDebounce from '../../hooks/useDebounce';

const Main = styled.main`
	display: flex;
	gap: 16px;
	width: 100%;
	height: 100%;
	background: ${colors.GRAY7};
	text-align: center;
	margin: 20px 40px;
`;

function HomePage() {
	const octokit = new Octokit({
		auth: '',
	});
	const [search, setSearch] = useState<string>('');
	const { setUser } = useAuthActions();
	const { user } = useAuth();
	const [debounceSearch, setDebounceSearch] = useDebounce(search);

	const getUser = async () => {
		const token = '';
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			const response = await axios.get('https://api.github.com/user', config);
			setUser(response.data);
		} catch (err) {
			logError(err);
		}
	};

	// eslint-disable-next-line consistent-return
	const getRepos = async (): Promise<any> => {
		try {
			const response = await octokit.request(
				'GET /search/repositories{?q,sort,order,per_page,page}',
				{ q: debounceSearch, per_page: 4 },
			);
			return response.data;
		} catch (err) {
			logError(err);
		}
	};

	useQuery('getUser', getUser, { ...commonReactQueryOptions });
	const { data: repos } = useQuery(['getRepos', debounceSearch], getRepos, {
		...commonReactQueryOptions,
		enabled: debounceSearch !== '',
	});

	return (
		<DefaultLayOut headerTitle="Home">
			<header
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '10px 40px 0',
				}}
			>
				{user ? (
					<Button
						buttonType={ButtonTypeType.UNDER_LINE}
						onClick={() => {
							if (user?.html_url) {
								window.open(user.html_url, '_blank');
							}
						}}
					>
						{user?.login}
					</Button>
				) : (
					<div>이름</div>
				)}
				<div style={{ width: '50%' }}>
					<Input
						value={search}
						onChange={({ target }) => {
							setSearch(target.value);
							setDebounceSearch(target.value);
						}}
						name=""
						type="text"
						placeholder={strings.INPUT_PLACE_HOLDER}
					/>
				</div>
			</header>
			<Main>
				<ul>
					{!isEmpty(repos) &&
						repos.items.map(
							(item: {
								id: number;
								owner: { avatar_url: string };
								full_name: string;
							}) => (
								<li key={item.id} style={{ border: '1px solid' }}>
									<Row>
										<img
											src={item.owner.avatar_url}
											width={20}
											height={20}
											alt=""
										/>
										<div>{item.full_name}</div>
									</Row>
								</li>
							),
						)}
				</ul>
			</Main>
		</DefaultLayOut>
	);
}

export default HomePage;
HomePage.defaultProps = { status: undefined };
