import { Pagination } from 'antd';
import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { Typo } from '../../components/atoms';
import { DefaultLayOut } from '../../components/oraganisms';
import { EmptyView } from '../../components/templates';
import RepoListItem from '../../components/templates/RepoListItem';
import useRepo from '../../hooks/useRepo';
import { Repo } from '../../types/repo';
import * as Styled from './styles';

function HistoryRepositoryPage() {
	const { historyRepos } = useRepo();

	const [page, setPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(10);

	const renderEmptyView = () => <EmptyView />;

	return (
		<DefaultLayOut headerTitle="Repository History 리스트">
			<Styled.HeaderView>
				<Typo typoType="h3">Repository History 리스트</Typo>
			</Styled.HeaderView>
			<Styled.MainView>
				{isEmpty(historyRepos) ? (
					renderEmptyView()
				) : (
					<Styled.UlView>
						<Styled.ListItem>
							<Styled.RowView>
								<div style={{ width: '15%' }}>
									<Typo typoType="h7">이미지</Typo>
								</div>
								<div
									style={{
										width: '40%',
										borderLeft: '1px solid',
									}}
								>
									<Typo typoType="h7">Repository 이름</Typo>
								</div>
								<div style={{ width: '10%', borderLeft: '1px solid' }}>
									<Typo typoType="h7">Issue 여부</Typo>
								</div>
								<div style={{ width: '10%', borderLeft: '1px solid' }}>
									<Typo typoType="h7">Fork 수</Typo>
								</div>
								<div style={{ width: '30%', borderLeft: '1px solid' }}>
									<Typo typoType="h7">버튼</Typo>
								</div>
							</Styled.RowView>
						</Styled.ListItem>
						{historyRepos.map((item: Repo, index: number) => {
							// page = 1, perPage = 10 => 0 ~ 9
							// page = 2, perPage = 10 => 10 ~ 19
							if (
								(page - 1) * perPage <= index &&
								page * perPage - 1 >= index
							) {
								return (
									<Styled.ListItem key={item.id}>
										<RepoListItem repo={item} />
									</Styled.ListItem>
								);
							}
							return <div key={item.id} />;
						})}
					</Styled.UlView>
				)}
				<Styled.Footer>
					<Pagination
						showSizeChanger
						defaultCurrent={1}
						onChange={setPage}
						onShowSizeChange={(_, size) => setPerPage(size)}
						current={page}
						defaultPageSize={10}
						pageSize={perPage}
						total={historyRepos ? historyRepos.length : 1}
						locale={{ items_per_page: '개씩 보기' }}
					/>
				</Styled.Footer>
			</Styled.MainView>
		</DefaultLayOut>
	);
}

export default HistoryRepositoryPage;
HistoryRepositoryPage.defaultProps = { status: undefined };
