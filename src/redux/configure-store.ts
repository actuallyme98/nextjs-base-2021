import { createStore, combineReducers, applyMiddleware, Store as ReduxStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import {
  typePendingReducerSet,
  createTypeReduxInitialState,
  typeReduxMiddleware,
} from './type-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import * as AppReducer from './reducers/app.reducer';
import * as LayoutReducer from './reducers/layout.reducer';

export interface RootState {
  appState: AppReducer.State;
  layoutState: LayoutReducer.State;
}

export type Store = ReduxStore<RootState>;

export const rootReducer = combineReducers<RootState>({
  ...typePendingReducerSet,
  appState: AppReducer.reducer,
  layoutState: LayoutReducer.reducer,
});

export const InitialState: RootState = Object.assign(createTypeReduxInitialState(), {
  appState: AppReducer.initialState,
  layoutState: LayoutReducer.initialState,
});

export const resetTypeReduxState = (state: RootState) => ({
  ...state,
  ...createTypeReduxInitialState(),
});

const middlewares: any[] = [typeReduxMiddleware, promiseMiddleware];

export const configureStore = (initialState?: RootState) => {
  return createStore(
    rootReducer,
    { ...InitialState, ...initialState },
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
};
