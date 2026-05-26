import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import categorySlice from './categorySlice';
import productSlice from './productSlice';
import errorSlice from './errorSlice';
import themeSlice from './themeSlice';
import { authApi } from '../Api/authApi';
import { categoryApi } from '../Api/categoryApi';
import { productApi } from '../Api/productApi';

export const store = configureStore({
  reducer: {
    error: errorSlice,
    auth: authReducer,
    categories: categorySlice,
    products: productSlice,
    theme: themeSlice,
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware, categoryApi.middleware, productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
