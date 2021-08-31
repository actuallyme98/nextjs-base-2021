import { createTypeReducer, isError } from '../type-redux';
import * as AppActions from '../actions/app.action';
import { Profile } from '~/types/store/app';

export type State = {
  isMobile: boolean;
  isBackdropLoading: boolean;
  profile?: Profile;
};

export const initialState: State = {
  isMobile: false,
  isBackdropLoading: false,
  profile: undefined,
};

export const setBackdropLoadingReducer = AppActions.setBackdropLoading.reducer<State>(
  (state, action) => ({
    isBackdropLoading: action.payload,
  }),
);

export const getProfileReducer = AppActions.getProfile.reducer<State>((state, action) => {
  if (isError(action)) {
    return {};
  }
  return {
    profile: action.payload,
  };
});

export const loginReducer = AppActions.login.reducer<State>((state, action) => {
  if (isError(action)) {
    return {};
  }
  return {
    profile: action.payload,
  };
});

export const logoutReducer = AppActions.logout.reducer<State>((state, action) => {
  return {
    profile: undefined,
  };
});

export const detectMobileReducer = AppActions.detectMobile.reducer<State>((state, action) => ({
  isMobile: action.payload,
}));

export const reducer = createTypeReducer(
  initialState,
  setBackdropLoadingReducer,
  getProfileReducer,
  loginReducer,
  logoutReducer,
  detectMobileReducer,
);
