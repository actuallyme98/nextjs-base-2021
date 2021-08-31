import { createTypeReducer } from '../type-redux';
import * as LayoutActions from '../actions/layout.action';

export type State = {
  sidebar: {
    openManageMenu: boolean;
  };
};

export const initialState: State = {
  sidebar: {
    openManageMenu: false,
  },
};

export const toggleManageMenuReducer = LayoutActions.collapseManageMenu.reducer<State>(
  (state, action) => ({
    sidebar: {
      ...state.sidebar,
      openManageMenu: !state.sidebar.openManageMenu,
    },
  }),
);

export const reducer = createTypeReducer(initialState, toggleManageMenuReducer);
