import React from 'react';
import { useNavigate } from 'react-router-dom';
import { circleCheckIcon, circleCheckNoneIcon } from '../../../assets/icon';
import { strings } from '../../../constants';
import { useRepo, useRepoActions } from '../../../hooks';
import { ISSUE_PATH } from '../../../routes/constants/urls';
import { ButtonTypeType } from '../../../styles/theme';
import { Repo } from '../../../types/repo';
import { formatComma } from '../../../utils/utils';
import { Button, Typo } from '../../atoms';
import * as Styled from './styles';

interface Props {
	repo: Repo;
	isSelect?: boolean;
}

function RepoListItem({ repo, isSelect }: Props) {
	const navigate = useNavigate();
	const { repos: selectedRepo, historyRepos } = useRepo();
	const { setRepo, setHistoryRepo } = useRepoActions();

	const handleSelect = (value: Repo) => {
		const selected: number = selectedRepo.findIndex(
			(item) => item.id === value.id,
		);
		const historySelected: number = historyRepos.findIndex(
			(item) => item.id === value.id,
		);
		if (selected === -1) {
			setRepo([...selectedRepo, value]);
			if (historySelected === -1) {
				setHistoryRepo([...historyRepos, value]);
			}
		} else {
			const copyRepo = selectedRepo.filter((item) => item.id !== value.id);

			setRepo([...copyRepo]);
		}
	};

	return (
		<Styled.RowView>
			{isSelect && (
				<div style={{ width: '10%' }}>
					<img
						src={
							selectedRepo.find((v) => v.id === repo.id)
								? circleCheckIcon
								: circleCheckNoneIcon
						}
						width={24}
						height={24}
						alt="등록여부 체크박스"
					/>
				</div>
			)}
			<Styled.ImageView isSelect={isSelect ?? false}>
				<img src={repo.owner.avatar_url} width={20} height={20} alt="" />
			</Styled.ImageView>
			<Styled.BodyView isSelect={isSelect ?? false}>
				{repo.full_name}
			</Styled.BodyView>
			<Styled.ItemView width="10%">
				<Typo>{repo.has_issues ? '이슈 있음' : '이슈 없음'}</Typo>
			</Styled.ItemView>
			<Styled.ItemView width="10%">
				{`${strings.TEMPLATE_COUNT(
					formatComma(repo.forks_count),
				)}/${strings.TEMPLATE_COUNT(formatComma(repo.stargazers_count))}`}
			</Styled.ItemView>
			<Styled.ButtonView>
				<Button
					size="small"
					onClick={() => window.open(repo.html_url, '_blank')}
				>
					{strings.MOVE_TO_GITHUB}
				</Button>
				<Button
					size="small"
					style={{ marginLeft: 10 }}
					onClick={() =>
						navigate({
							pathname: ISSUE_PATH,
							search: `?repo=${repo.full_name}&issueCount=${repo.open_issues_count}`,
						})
					}
					disabled={!repo.has_issues}
				>
					{strings.MOVE_TO_ISSUE}
				</Button>
				<Button
					size="small"
					style={{ marginLeft: 10 }}
					onClick={() => handleSelect(repo)}
					buttonType={
						selectedRepo.find((v) => v.id === repo.id)
							? ButtonTypeType.DELETE
							: ButtonTypeType.PRIMARY
					}
				>
					{selectedRepo.find((v) => v.id === repo.id)
						? strings.DELETE
						: strings.POST_ITEM}
				</Button>
			</Styled.ButtonView>
		</Styled.RowView>
	);
}

RepoListItem.defaultProps = { isSelect: false };

export default RepoListItem;
