export interface Repo {
	id: number;
	owner: { avatar_url: string };
	full_name: string;
	forks_count: number;
	html_url: string;
	has_issues: boolean;
	open_issues_count: number;
	stargazers_count: number;
}

export interface RepoIssue {
	id: number;
	title: string;
	body: string;
	user: { login: string };
	updated_at: string;
	html_url: string;
	repo: string;
}

export interface RequestIssue {
	repo: string;
	name: string;
	perPage?: number;
	page?: number;
}

export interface RequestRepo {
	debounceSearch: string;
	perPage: number;
	page: number;
}
