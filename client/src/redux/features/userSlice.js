import { createSlice } from '@reduxjs/toolkit';

const user =
  JSON.parse(localStorage.getItem('user')) === null
    ? undefined
    : JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    removeUser: (state, action) => {
      state.user = undefined;
      localStorage.removeItem('user');
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
