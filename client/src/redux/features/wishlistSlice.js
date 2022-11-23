import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  wishlistItems: [
    {
      name: 'Casio collection LTP-V001GL',
      whereToBuy:
        'https://www.blue-tomato.com/en-FI/product/Casio-LTP+1154PQ+7BEG+Watch-701505/?varid=304985575&cr=EUR&_$ja=tsid%3A46445&adword=Google%2FFI%2FPRODUKTERWEITERUNG%2FCasio%2F304985575&gclid=Cj0KCQiAg_KbBhDLARIsANx7wAyKiAqUOyJsPCi9s6BhSrmWRv6ujJULw_ysTFh0m8x030uuP4DeXuEaAhk7EALw_wcB',
      id: '156ce4a4-e88e-4111-826f-9bf5d324a386',
      available: true,
      imageUrl:
        'https://images.blue-tomato.com/is/image/bluetomato/304985575_front.jpg-N-AzRvwhVUxP0nJ34pXZGwC5u8I/LTP+1154PQ+7BEG+Watch.jpg?$b8$',
    },
  ],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      console.log('HI');
    },
    changeAvailableStatus: (state, action) => {
      state.wishlistItems[0].available = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewItem, changeAvailableStatus } = wishlistSlice.actions;

export default wishlistSlice.reducer;
