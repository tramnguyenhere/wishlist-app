import { createSlice } from '@reduxjs/toolkit';
import wishlistService from '../../services/wishlist';
const initialState = {
  data: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishlist: (state, action) => {
      state.data = action.payload;
    },
    createWishItem: (state, action) => {
      const item = action.payload;
      state.data.push({
        item,
      });
    },
    changeAvailableStatus: (state, action) => {
      const toUpdateItem = action.payload;
      wishlistService.update(toUpdateItem);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWishlist, createWishItem, changeAvailableStatus } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
