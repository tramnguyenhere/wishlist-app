import { createSlice } from '@reduxjs/toolkit';

const wishListData =
  (localStorage.getItem('wishlistData') || '{}') === '{}'
    ? []
    : JSON.parse(localStorage.getItem('wishlistData'));

const initialState = {
  data: wishListData,
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishlist: (state, action) => {
      state.data = action.payload;

      localStorage.setItem('wishlistData', JSON.stringify(state.data));
    },
    changeAvailableStatus: (state, action) => {
      state.data[0].available = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWishlist, changeAvailableStatus } = wishlistSlice.actions;

export default wishlistSlice.reducer;
