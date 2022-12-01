import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import wishlistReducer from './features/wishlistSlice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    user: userReducer,
  },
});
