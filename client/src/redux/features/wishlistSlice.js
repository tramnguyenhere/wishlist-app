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
      state.data.push(item);
    },
    updateItemDetails: (state, action) => {
      const toUpdateItem = action.payload;
      const toUpdateItemIndex = state.data.indexOf(
        (item) => item.id === action.payload.id
      );
      state.data = state.data.splice(toUpdateItemIndex, 1, toUpdateItem);
      wishlistService.update(toUpdateItem);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.data = state.data.filter((item) => item.id !== itemId);
      wishlistService.remove(itemId);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWishlist, createWishItem, updateItemDetails, removeItem } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
