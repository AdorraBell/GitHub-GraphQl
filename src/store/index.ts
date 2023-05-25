import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "src/store/reducers";

const reducer = combineReducers(reducers);

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  })


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;