import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './Reducers.js';

export default configureStore({
  reducer: {
    main: mainReducer,
  },
});
