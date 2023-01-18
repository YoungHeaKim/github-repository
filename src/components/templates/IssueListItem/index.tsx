import React from 'react';
import { strings } from '../../../constants';
import { RepoIssue } from '../../../types/repo';
import { formatDate } from '../../../utils/utils';
import { Button } from '../../atoms';
import * as Styled from './styles';

interface Props {
	issue: RepoIssue;
}

function IssueListItem({ issue }: Props) {
	return (
		<Styled.ListItem>
			<Styled.RowView>
				<Styled.HiddenRepoNameView>{issue.repo}</Styled.HiddenRepoNameView>
				<Styled.HiddenTitleView>{issue.title}</Styled.HiddenTitleView>
				<Styled.HiddenView>
					{!issue.body ? '데이터 없음' : issue.body}
				</Styled.HiddenView>
				<Styled.ItemView width="15%">{issue.user.login}</Styled.ItemView>
				<Styled.ItemView width="15%">
					{formatDate(issue.updated_at)}
				</Styled.ItemView>
				<Styled.ItemView width="10%">
					<Button
						size="small"
						onClick={() => window.open(issue.html_url, '_blank')}
					>
						{strings.MOVE_TO_GITHUB}
					</Button>
				</Styled.ItemView>
			</Styled.RowView>
		</Styled.ListItem>
	);
}

IssueListItem.defaultProps = {};

export default IssueListItem;
