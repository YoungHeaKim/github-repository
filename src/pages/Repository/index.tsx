import { Pagination } from 'antd';
import { isEmpty } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getIssues } from '../../apis';
import { Button, Typo } from '../../components/atoms';
import { DefaultLayOut } from '../../components/oraganisms';
import { EmptyView } from '../../components/templates';
import IssueListItem from '../../components/templates/IssueListItem';
import RepoListItem from '../../components/templates/RepoListItem';
import { strings } from '../../constants';
import useRepo from '../../hooks/useRepo';
import { HISTORY_PATH } from '../../routes/constants/urls';
import { ButtonTypeType } from '../../styles/theme';
import { Repo, RepoIssue } from '../../types/repo';
import { formatComma } from '../../utils/utils';
import * as Styled from './styles';

function RepositoryPage() {
	const { repos } = useRepo();
	const navigator = useNavigate();

	const [page, setPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(10);
	const [issues, setIssues] = useState<RepoIssue[]>([]);

	const requests = repos.map((item) => {
		const arr = item.full_name.split('/');
		const response: Promise<RepoIssue[]> = getIssues({
			repo: arr[0],
			name: arr[1],
		});
		return response;
	});

	useEffect(() => {
		(async () => {
			let newIssues = [...issues];
			if (!isEmpty(newIssues)) {
				newIssues = [];
			}
			await Promise.all(requests).then((item) => {
				item.forEach((v) => newIssues.push(...v));
				setIssues(newIssues);
			});
		})();
	}, [repos]);

	const totalPage = useMemo(() => {
		if (!isEmpty(issues)) {
			return Math.floor(issues.length);
		}
		return 1;
	}, [issues]);

	const renderEmptyView = () => <EmptyView />;

	return (
		<DefaultLayOut headerTitle="등록된 Repository">
			<Styled.HeaderView>
				<Typo typoType="h3">Repository 리스트</Typo>
				<Button
					buttonType={ButtonTypeType.TEXT}
					onClick={() => navigator(HISTORY_PATH)}
				>
					등록된 Repo 내역 보기
				</Button>
			</Styled.HeaderView>
			<Styled.MainView>
				{isEmpty(repos) ? (
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
						{repos.map((item: Repo) => (
							<Styled.ListItem key={item.id}>
								<RepoListItem repo={item} />
							</Styled.ListItem>
						))}
					</Styled.UlView>
				)}

				<main>
					<Styled.HeaderView>
						<Typo typoType="h3">Issue 리스트</Typo>
						<Typo>
							총 Issue 개수:
							<Typo typoType="h6">{`   ${strings.TEMPLATE_COUNT(
								formatComma(totalPage),
							)}`}</Typo>
						</Typo>
					</Styled.HeaderView>
					<Styled.UlView>
						<Styled.ListItem>
							<Styled.RowView>
								<Styled.HiddenView>
									<Typo typoType="h8">{strings.REPO_NAME}</Typo>
								</Styled.HiddenView>
								<div style={{ width: '20%', borderLeft: '1px solid' }}>
									<Typo typoType="h7">Issue 이름</Typo>
								</div>
								<div style={{ width: '30%', borderLeft: '1px solid' }}>
									<Typo typoType="h7">Issue 설명</Typo>
								</div>
								<div style={{ width: '15%', borderLeft: '1px solid' }}>
									<Typo typoType="h7">작성자</Typo>
								</div>
								<div style={{ width: '15%', borderLeft: '1px solid' }}>
									<Typo typoType="h7">업데이트 날</Typo>
								</div>
								<div style={{ width: '10%', borderLeft: '1px solid' }}>
									<Typo typoType="h7">버튼</Typo>
								</div>
							</Styled.RowView>
						</Styled.ListItem>
						{issues.map((item: RepoIssue, index: number) => {
							// page = 1, perPage = 10 => 0 ~ 9
							// page = 2, perPage = 10 => 10 ~ 19
							if (
								(page - 1) * perPage <= index &&
								page * perPage - 1 >= index
							) {
								return <IssueListItem issue={item} key={item.id} />;
							}
							return <div key={item.id} />;
						})}
					</Styled.UlView>
					<Styled.PaginationView>
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
					</Styled.PaginationView>
				</main>
			</Styled.MainView>
		</DefaultLayOut>
	);
}

export default RepositoryPage;
RepositoryPage.defaultProps = { status: undefined };
