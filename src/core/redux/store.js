/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducers } from './rootReducer';

export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});
