import { createTypeAction, createTypeAsyncAction } from '../type-redux';
import { Store } from '~/redux/configure-store';
import * as ApiServices from '~/services/api.service';
import * as SystemUtils from '~/utils/system.util';
import * as SecureStorageUtils from '~/utils/secure-storage.util';
import { SecureStorageEnum } from '~/enums/auth.enum';

export const initializeApp = createTypeAsyncAction<void, void, Store>(
  'INITIALIZE_APP_ACTION',
  async (_, { dispatch, getState }) => {
    dispatch(setBackdropLoading(true));
    const { profile } = getState().appState;
    if (!profile) {
      try {
        await dispatch(getProfile());
      } catch (error) {}
    }
    dispatch(setBackdropLoading(false));
    return;
  },
);

export const getProfile = createTypeAsyncAction<void, ApiServices.GetProfileReturn, Store>(
  'GET_PROFILE_ACTION',
  () => {
    return ApiServices.getProfile();
  },
);

export const login = createTypeAsyncAction<ApiServices.LoginArgs, ApiServices.LoginReturn, Store>(
  'LOGIN_ACTION',
  async (args) => {
    const result = await ApiServices.login(args);
    SecureStorageUtils.setItem(SecureStorageEnum.ACCESS_TOKEN, result.accessToken);
    SecureStorageUtils.setItem(SecureStorageEnum.REFRESH_TOKEN, result.refreshToken);
    return result.user;
  },
);

export const logout = createTypeAction('LOGOUT_ACTION', () => {
  SecureStorageUtils.removeItem(SecureStorageEnum.ACCESS_TOKEN);
  SecureStorageUtils.removeItem(SecureStorageEnum.REFRESH_TOKEN);
});

export const setBackdropLoading = createTypeAction<boolean, boolean>(
  'SET_BACKDROP_LOADING_ACTION',
  (loading) => loading,
);

export const detectMobile = createTypeAction<string, boolean>(
  'DETECT_MOBILE_ACTION',
  (userAgent: string) => {
    return SystemUtils.detectMobile(userAgent);
  },
);
