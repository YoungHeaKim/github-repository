import { PURGE } from 'redux-persist';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Repo } from '../../../types/repo';

export interface RepoState {
	repos: Repo[];
}

const initialState: RepoState = {
	repos: [],
};

export const repoSlice = createSlice({
	name: 'repo',
	initialState,
	reducers: {
		setRepo: (state, action: PayloadAction<Repo[]>) => {
			if (action.payload.length < 5) {
				// eslint-disable-next-line no-param-reassign
				state.repos = action.payload;
			} else {
				alert(`4개까지 등록 가능합니다.`);
			}
		},
		clearRepo: (state) => {
			// eslint-disable-next-line no-param-reassign
			state.repos = [];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(PURGE, () => initialState);
	},
});

export const { setRepo, clearRepo } = repoSlice.actions;

export default repoSlice.reducer;
