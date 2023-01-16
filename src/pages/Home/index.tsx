import React, { useMemo, useState } from 'react';
import { Octokit } from '@octokit/rest';
import { useQuery } from 'react-query';
import { isEmpty } from 'lodash';
import styled from 'styled-components';
import { Pagination } from 'antd';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Row } from '../../components/atoms';
import { DefaultLayOut } from '../../components/oraganisms';
import { colors, commonReactQueryOptions, strings } from '../../constants';
import { logError } from '../../utils/utils';
import useDebounce from '../../hooks/useDebounce';
import { ISSUE_PATH } from '../../routes/constants/urls';

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
	const [selects, setSelects] = useState<any[]>([]);
	const navigate = useNavigate();

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
			<li style={{ display: 'flex', width: '100%', padding: '10px 10px' }}>
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
				<ul style={{ width: '100%' }}>
					<li
						style={{
							borderBottom: '1px solid',
							width: '100%',
							padding: '10px 10px',
						}}
					>
						<RowView>
							<div style={{ width: '5%' }}>선택여부</div>
							<div style={{ width: '20%' }}>이미지</div>
							<div style={{ width: '30%' }}>Repository 이름</div>
							<div style={{ width: '20%' }}>Fork 수</div>
							<div style={{ width: '40%' }}>버튼</div>
						</RowView>
					</li>
					{!isEmpty(repos)
						? repos.items.map(
								(item: {
									id: number;
									owner: { avatar_url: string };
									full_name: string;
									forks_count: number;
									html_url: string;
								}) => (
									<li
										key={item.id}
										style={{
											borderBottom: '1px solid',
											width: '100%',
											padding: '10px 10px',
										}}
									>
										<RowView>
											<div
												style={{
													width: '20%',
													display: 'flex',
													justifyContent: 'center',
												}}
											>
												<img
													src={item.owner.avatar_url}
													width={20}
													height={20}
													alt=""
												/>
											</div>
											<div
												style={{
													width: '30%',
													display: 'flex',
													justifyContent: 'center',
												}}
											>
												{item.full_name}
											</div>
											<div
												style={{
													width: '20%',
													display: 'flex',
													justifyContent: 'center',
												}}
											>
												{item.forks_count}
											</div>
											<Row
												style={{
													width: '40%',
													display: 'flex',
													justifyContent: 'center',
												}}
											>
												<Button
													size="small"
													onClick={() => window.open(item.html_url, '_blank')}
												>
													Github으로 이동
												</Button>
												<Button
													size="small"
													style={{ marginLeft: 10 }}
													onClick={() =>
														navigate({
															pathname: ISSUE_PATH,
															search: `?repo=${item.full_name}`,
														})
													}
												>
													issue 보기
												</Button>
											</Row>
										</RowView>
									</li>
								),
						  )
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
