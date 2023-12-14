import { configureStore } from '@reduxjs/toolkit';
import doReducer from './doSlice';

const store = configureStore({
    reducer: {
        logo: doReducer, 
      },
});

export default store;