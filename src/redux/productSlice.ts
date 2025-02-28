import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/productType';

interface ProductsState {
  count: number;
  products: Product[];
}

const productsSlice = createSlice({
  name: 'products',
  initialState: {} as ProductsState,
  reducers: {
    setProducts: (_state, action: PayloadAction<ProductsState>) => {
      return action.payload;
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      return {
        ...state,
        products: state.products.map(product => (product.id === action.payload.id ? action.payload : product)),
      };
    },
  },
});

export const { setProducts, updateProduct } = productsSlice.actions;

export default productsSlice.reducer;
