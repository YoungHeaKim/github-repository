import React, { useMemo, useState } from 'react';
import { Octokit } from '@octokit/rest';
import { useQuery } from 'react-query';
import { isEmpty } from 'lodash';
import styled from 'styled-components';
import { Pagination } from 'antd';
import ReactLoading from 'react-loading';
import { Button, Input, Row } from '../../components/atoms';
import { DefaultLayOut } from '../../components/oraganisms';
import { colors, commonReactQueryOptions, strings } from '../../constants';
import { logError } from '../../utils/utils';
import useDebounce from '../../hooks/useDebounce';
import { Repo } from '../../types/repo';
import RepoListItem from '../../components/templates/RepoListItem';

const Main = styled.main`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
	height: 100%;
	background: ${colors.GRAY7};
	text-align: center;
	margin: 20px 40px;
`;

const RowView = styled(Row)`
	display: flex;
	justify-content: space-between;
`;

function HomePage() {
	const octokit = new Octokit();
	const [search, setSearch] = useState<string>('');
	const [page, setPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(10);
	const [debounceSearch, setDebounceSearch] = useDebounce(search);

	// eslint-disable-next-line consistent-return
	const getRepos = async (): Promise<any> => {
		try {
			const response = await octokit.request(
				'GET /search/repositories{?q,sort,order,per_page,page}',
				{ q: debounceSearch, per_page: perPage, page },
			);
			return response.data;
		} catch (err) {
			logError(err);
		}
	};

	const {
		data: repos,
		isFetching,
		isLoading,
	} = useQuery(['getRepos', debounceSearch, perPage, page], getRepos, {
		...commonReactQueryOptions,
		enabled: debounceSearch !== '',
	});

	const totalPage = useMemo(() => {
		if (repos) {
			return Math.floor(repos.total_count / perPage);
		}
		return 1;
	}, [debounceSearch]);

	const renderEmptyView = () =>
		isLoading || isFetching ? (
			<div
				style={{
					flex: 1,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<ReactLoading type="balls" color="#0000FF" height={100} width={50} />
			</div>
		) : (
			<li
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					padding: '10px 10px',
				}}
			>
				데이터 없음
			</li>
		);

	return (
		<DefaultLayOut headerTitle="Home">
			<header
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '10px 40px 0',
				}}
			>
				<div style={{ width: '50%', position: 'relative', margin: '0 auto' }}>
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
					{search !== '' && (
						<Button
							style={{
								backgroundColor: colors.NONE,
								position: 'absolute',
								top: 0,
								right: 0,
								color: colors.GRAY2,
							}}
							size="small"
							onClick={() => {
								setSearch('');
								setDebounceSearch('');
							}}
						>
							X
						</Button>
					)}
				</div>
			</header>
			<Main>
				<ul style={{ width: '100%' }}>
					<li
						style={{
							borderBottom: '1px solid',
							width: '100%',
							padding: '10px 10px',
						}}
					>
						<RowView>
							<div style={{ width: '10%' }}>선택여부</div>
							<div style={{ width: '10%', borderLeft: '1px solid' }}>
								이미지
							</div>
							<div style={{ width: '35%', borderLeft: '1px solid' }}>
								Repository 이름
							</div>
							<div style={{ width: '15%', borderLeft: '1px solid' }}>
								Fork 수
							</div>
							<div style={{ width: '30%', borderLeft: '1px solid' }}>버튼</div>
						</RowView>
					</li>
					{!isEmpty(repos)
						? repos.items.map((item: Repo) => (
								<li
									key={item.id}
									style={{
										borderBottom: '1px solid',
										width: '100%',
										padding: '10px 10px',
									}}
								>
									<RepoListItem repo={item} isSelect />
								</li>
						  ))
						: renderEmptyView()}
				</ul>
				<div>
					<Pagination
						showSizeChanger
						defaultCurrent={1}
						onChange={setPage}
						onShowSizeChange={(_, size) => setPerPage(size)}
						current={page}
						defaultPageSize={10}
						pageSize={perPage}
						total={totalPage}
						locale={{ items_per_page: '개씩 보기' }}
					/>
				</div>
			</Main>
		</DefaultLayOut>
	);
}

export default HomePage;
HomePage.defaultProps = { status: undefined };
