import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { isEmpty } from 'lodash';
import { Pagination } from 'antd';
import { Input, Typo } from '../../components/atoms';
import { DefaultLayOut } from '../../components/oraganisms';
import { RepoListItem, EmptyView } from '../../components/templates';
import { commonReactQueryOptions, strings } from '../../constants';
import { useDebounce, useRepoActions, useRepo } from '../../hooks';
import { Repo } from '../../types/repo';
import * as Styled from './styles';
import { getRepos } from '../../apis';
import { formatComma } from '../../utils/utils';

function HomePage() {
	const [page, setPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(10);
	const [total, setTotal] = useState<number>(0);
	const { search } = useRepo();
	const { setSearch } = useRepoActions();
	const [debounceSearch, setDebounceSearch] = useDebounce(search);

	const {
		data: repos,
		isFetching,
		isLoading,
	} = useQuery(
		['getRepos', debounceSearch, perPage, page],
		() => getRepos({ debounceSearch, perPage, page }),
		{
			...commonReactQueryOptions,
			onSuccess: (res) => {
				if (total === 0) {
					setTotal(res.total_count);
				}
			},
			enabled: debounceSearch !== '',
		},
	);

	const renderEmptyView = () => (
		<EmptyView isLoading={isFetching || isLoading} />
	);

	const handleSearch = (value: string) => {
		setSearch(value);
		setDebounceSearch(value);
		setTotal(0);
		setPage(1);
	};

	return (
		<DefaultLayOut headerTitle="Home">
			<Styled.HeaderView>
				<Styled.InputView>
					<Input
						value={search}
						onChange={({ target }) => handleSearch(target.value)}
						name=""
						type="text"
						placeholder={strings.INPUT_PLACE_HOLDER}
					/>
					{search !== '' && (
						<Styled.ClearButton
							size="small"
							onClick={() => {
								setSearch('');
								setDebounceSearch('');
								setTotal(0);
								setPage(1);
							}}
						>
							X
						</Styled.ClearButton>
					)}
				</Styled.InputView>
				<Typo>
					총 검색 개수:
					<Typo typoType="h6">
						{`   ${strings.TEMPLATE_COUNT(formatComma(total))}`}
					</Typo>
				</Typo>
			</Styled.HeaderView>
			<Styled.Main>
				<Styled.UlView>
					<Styled.ListItem>
						<Styled.RowView>
							<div style={{ width: '10%' }}>
								<Typo typoType="h7">{strings.IS_POST}</Typo>
							</div>
							<div style={{ width: '10%', borderLeft: '1px solid' }}>
								<Typo typoType="h7">{strings.IMAGE}</Typo>
							</div>
							<div
								style={{
									width: '30%',
									borderLeft: '1px solid',
								}}
							>
								<Typo typoType="h7">{strings.REPO_NAME}</Typo>
							</div>
							<div style={{ width: '10%', borderLeft: '1px solid' }}>
								<Typo typoType="h7">{strings.ISSUE_NAME}</Typo>
							</div>
							<div style={{ width: '10%', borderLeft: '1px solid' }}>
								<Typo typoType="h7">{strings.FORK_NUM}</Typo>
							</div>
							<div style={{ width: '30%', borderLeft: '1px solid' }}>
								<Typo typoType="h7">{strings.BUTTON}</Typo>
							</div>
						</Styled.RowView>
					</Styled.ListItem>
					{!isEmpty(repos)
						? repos.items.map((item: Repo) => (
								<Styled.ListItem key={item.id}>
									<RepoListItem repo={item} isSelect />
								</Styled.ListItem>
						  ))
						: renderEmptyView()}
				</Styled.UlView>
				<Pagination
					showSizeChanger
					defaultCurrent={1}
					onChange={setPage}
					onShowSizeChange={(_, size) => setPerPage(size)}
					current={page}
					defaultPageSize={10}
					pageSize={perPage}
					total={total}
					locale={{ items_per_page: '개씩 보기' }}
				/>
			</Styled.Main>
		</DefaultLayOut>
	);
}

export default HomePage;
HomePage.defaultProps = { status: undefined };
