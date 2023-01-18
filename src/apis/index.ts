import { Octokit } from '@octokit/rest';
import { RequestIssue, RequestRepo } from '../types/repo';
import { logError } from '../utils/utils';

const octokit = new Octokit();

export const getRepos = async ({
	debounceSearch,
	perPage,
	page,
}: RequestRepo) => {
	try {
		const response = await octokit.request(
			'GET /search/repositories{?q,sort,order,per_page,page}',
			{ q: debounceSearch, per_page: perPage, page },
		);
		return response.data;
	} catch (err) {
		logError(err);
		throw err;
	}
};

export const getIssues = async ({
	repo,
	name,
	perPage,
	page,
}: RequestIssue) => {
	try {
		const response = await octokit.request(
			'GET /repos/{repo}/{name}/issues?state=open&closed&all&is=issue',
			{ repo, name, per_page: perPage, page },
		);
		const data = response.data.map((v: any) => ({
			...v,
			repo: `${repo}/${name}`,
		}));
		return data;
	} catch (err) {
		logError(err);
		throw err;
	}
};
