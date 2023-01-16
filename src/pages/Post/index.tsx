import { Octokit } from '@octokit/rest';
import { isEmpty } from 'lodash';
import React from 'react';
import ReactLoading from 'react-loading';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { Button, Row } from '../../components/atoms';
import { DefaultLayOut } from '../../components/oraganisms';
import { commonReactQueryOptions } from '../../constants';
import { logError } from '../../utils/utils';
// import { Radio, Row } from 'antd';
// import TextArea from '../../components/atoms/TextArea';
// import Input from '../../components/atoms/Input';
// import Typo from '../../components/atoms/Typo';
// import Button from '../../components/atoms/Button';
// import Editor from '../../components/atoms/Editor';

// const Main = styled.main`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 16px;
//   width: 100%;
//   height: 100%;
//   background: ${({ theme }) => theme.common.colors.gray_1};
//   text-align: center;
// `;

function PostPage() {
	const octokit = new Octokit({
		auth: '',
	});
	const param = useLocation();
	const fullName = param.search.split('=')[1].split('/');

	// eslint-disable-next-line consistent-return
	const getIssues = async (): Promise<any> => {
		try {
			const response = await octokit.request(
				'GET /repos/{repo}/{name}/issues?is=issue',
				{
					repo: fullName[0],
					name: fullName[1],
				},
			);
			return response.data;
		} catch (err) {
			logError(err);
		}
	};
	const {
		data: issues,
		isFetching,
		isLoading,
	} = useQuery(['getIssues'], getIssues, {
		...commonReactQueryOptions,
	});

	return (
		<DefaultLayOut headerTitle={`${fullName[0]}의 ${fullName[1]} Issues`}>
			{isEmpty(issues) ? (
				isFetching || isLoading ? (
					<ReactLoading type="balls" color="#0000FF" height={100} width={50} />
				) : (
					<div>데이터 없음</div>
				)
			) : (
				<ol>
					{issues.map(
						(item: {
							title: string;
							body: string;
							user: { login: string };
							updated_at: string;
							html_url: string;
						}) => {
							return (
								<li>
									<Row>
										<div style={{ width: '20%' }}>{item.title}</div>
										<div style={{ width: '20%' }}>{item.body}</div>
										<div style={{ width: '20%', marginLeft: 20 }}>
											{item.user.login}
										</div>
										<div style={{ width: '10%', marginLeft: 20 }}>
											{`${new Date(item.updated_at).getFullYear()}년
											${new Date(item.updated_at).getMonth()}월
											${new Date(item.updated_at).getDay()}일`}
										</div>
										<div style={{ width: '30%' }}>
											<Button
												size="small"
												onClick={() => window.open(item.html_url, '_blank')}
											>
												Github에서 보기
											</Button>
										</div>
									</Row>
								</li>
							);
						},
					)}
				</ol>
			)}
		</DefaultLayOut>
	);
}

export default PostPage;
PostPage.defaultProps = { status: undefined };
