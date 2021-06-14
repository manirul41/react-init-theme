/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import { combineReducers } from '@reduxjs/toolkit';

export const reducers = combineReducers({
    // access : slice.reducer
    // header: headerSlices.reducer,
});

// auth => it is accessable from view page as a state object e.g. state.auth
// const auth = useSelector((state) => state.auth);
