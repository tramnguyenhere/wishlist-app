import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer, { setWishlist } from './features/wishlistSlice';
import wishlistService from '../services/wishlist';
export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

wishlistService
  .getAll()
  .then((wishlist) => store.dispatch(setWishlist(wishlist)));
