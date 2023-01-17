import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { circleCheckIcon, circleCheckNoneIcon } from '../../../assets/icon';
import { strings } from '../../../constants';
import useRepo from '../../../hooks/useRepo';
import useRepoActions from '../../../hooks/useRepoActions';
import { ISSUE_PATH } from '../../../routes/constants/urls';
import { ButtonTypeType } from '../../../styles/theme';
import { Repo } from '../../../types/repo';
import { formatComma } from '../../../utils/utils';
import { Row, Button } from '../../atoms';

interface Props {
	repo: Repo;
	isSelect?: boolean;
}

const RowView = styled(Row)`
	display: flex;
	justify-content: space-between;
`;

function RepoListItem({ repo, isSelect }: Props) {
	const { repos: selectedRepo } = useRepo();
	const { setRepo } = useRepoActions();
	const navigate = useNavigate();

	const handleSelect = (value: Repo) => {
		const selected: number = selectedRepo.findIndex(
			(item) => item.id === value.id,
		);
		if (selected === -1) {
			setRepo([...selectedRepo, value]);
		} else {
			const copyRepo = selectedRepo.filter((item) => item.id !== value.id);

			setRepo([...copyRepo]);
		}
	};

	return (
		<RowView>
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
			<div
				style={{
					width: isSelect ? '10%' : '15%',
					display: 'flex',
					justifyContent: 'center',
					borderLeft: isSelect ? '1px solid' : 0,
				}}
			>
				<img src={repo.owner.avatar_url} width={20} height={20} alt="" />
			</div>
			<div
				style={{
					width: isSelect ? '35%' : '40%',
					display: 'flex',
					justifyContent: 'center',
					borderLeft: '1px solid',
				}}
			>
				{repo.full_name}
			</div>
			<div
				style={{
					width: '15%',
					display: 'flex',
					justifyContent: 'center',
					borderLeft: '1px solid',
				}}
			>
				{strings.TEMPLATE_COUNT(formatComma(repo.forks_count))}
			</div>
			<Row
				style={{
					width: '30%',
					display: 'flex',
					justifyContent: 'center',
					borderLeft: '1px solid',
				}}
			>
				<Button
					size="small"
					onClick={() => window.open(repo.html_url, '_blank')}
				>
					Github으로 이동
				</Button>
				<Button
					size="small"
					style={{ marginLeft: 10 }}
					onClick={() =>
						navigate({
							pathname: ISSUE_PATH,
							search: `?repo=${repo.full_name}`,
						})
					}
				>
					issue 보기
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
					{selectedRepo.find((v) => v.id === repo.id) ? '삭제하기' : '등록하기'}
				</Button>
			</Row>
		</RowView>
	);
}

RepoListItem.defaultProps = { isSelect: false };

export default RepoListItem;
