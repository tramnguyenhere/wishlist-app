import { createSlice } from '@reduxjs/toolkit';
import wishlistService from '../../services/wishlist';

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
      console.log(action.payload);
      state.data = action.payload;
    },
    changeAvailableStatus: (state, action) => {
      const toUpdateItem = action.payload;
      wishlistService.update(toUpdateItem);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWishlist, changeAvailableStatus } = wishlistSlice.actions;

export default wishlistSlice.reducer;
