import { isEmpty } from 'lodash';
import React from 'react';
import { DefaultLayOut } from '../../components/oraganisms';
import RepoListItem from '../../components/templates/RepoListItem';
import useRepo from '../../hooks/useRepo';
import { Repo } from '../../types/repo';

function RepositoryPage() {
	const { repos } = useRepo();
	const renderEmptyView = () => <div>데이터 없음</div>;

	return (
		<DefaultLayOut headerTitle="등록된 Repository">
			{isEmpty(repos) ? (
				renderEmptyView()
			) : (
				<ol>
					{repos.map((item: Repo) => {
						return (
							<li
								key={item.id}
								style={{
									borderBottom: '1px solid',
									width: '100%',
									padding: '10px 10px',
								}}
							>
								<RepoListItem repo={item} />
							</li>
						);
					})}
				</ol>
			)}
		</DefaultLayOut>
	);
}

export default RepositoryPage;
RepositoryPage.defaultProps = { status: undefined };
