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
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
