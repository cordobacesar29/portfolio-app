import { createSlice } from '@reduxjs/toolkit';

const loggedInUser = JSON.parse(localStorage.getItem('user'));

export const userSlice = createSlice({
  name: 'user',
  initialState: loggedInUser ? { user: loggedInUser } : {},
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    signOut: (state, action) => {
      state.user = '';
      localStorage.removeItem('user');
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;
