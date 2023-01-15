import { PURGE } from 'redux-persist';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../types/user';

export interface AuthState {
	user: User | null;
}

const initialState: AuthState = {
	user: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			// eslint-disable-next-line no-param-reassign
			state.user = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(PURGE, () => initialState);
	},
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
