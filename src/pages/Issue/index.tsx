import { Pagination } from 'antd';
import { isEmpty } from 'lodash';
import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getIssues } from '../../apis';
import { Typo } from '../../components/atoms';
import { DefaultLayOut } from '../../components/oraganisms';
import { EmptyView } from '../../components/templates';
import IssueListItem from '../../components/templates/IssueListItem';
import { commonReactQueryOptions, strings } from '../../constants';
import { RepoIssue } from '../../types/repo';
import { formatComma } from '../../utils/utils';
import * as Styled from './styles';

function IssuePage() {
	const [page, setPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(10);
	const param = useLocation();
	const params = param.search.split('&');
	const issueLength: number = Number(params[1].split('=')[1] ?? 1);
	const fullName = params[0].split('=')[1].split('/');

	const {
		data: issues,
		// isFetching,
		// isLoading,
	} = useQuery(
		['getIssues'],
		() => getIssues({ repo: fullName[0], name: fullName[1], perPage, page }),
		{
			...commonReactQueryOptions,
		},
	);

	const renderEmptyView = () => <EmptyView />;

	const totalPage = useMemo(() => {
		if (issues) {
			return Math.floor(issueLength / perPage);
		}
		return 1;
	}, [issueLength]);

	return (
		<DefaultLayOut headerTitle={`${fullName[0]}의 ${fullName[1]} Issues`}>
			{isEmpty(issues) ? (
				renderEmptyView()
			) : (
				<main style={{ padding: '10px 40px' }}>
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
						{issues.map((item: RepoIssue) => (
							<IssueListItem issue={item} key={item.id} />
						))}
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
						<Styled.TotalTypoView>
							<Typo>
								총 Issue 개수:
								<Typo typoType="h6">
									{`   ${strings.TEMPLATE_COUNT(formatComma(issueLength))}`}
								</Typo>
							</Typo>
						</Styled.TotalTypoView>
					</Styled.PaginationView>
				</main>
			)}
		</DefaultLayOut>
	);
}

export default IssuePage;
IssuePage.defaultProps = { status: undefined };
