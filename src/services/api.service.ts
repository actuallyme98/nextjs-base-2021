import Axios from 'axios';
// enums
import { ApiRouteEnums } from '~/enums/api-route.enum';
import { AppRouteEnums } from '~/enums/app-route.enum';
import { SecureStorageEnum } from '~/enums/auth.enum';
import { paths as ApiPaths } from '~/types/api';
// utils
import * as SecureStorageUtils from '~/utils/secure-storage.util';
import * as TokenUtils from '~/utils/token.util';

const BASE_URL = process.env.SERVER_URL;
const accessToken = SecureStorageUtils.getItem(SecureStorageEnum.ACCESS_TOKEN) || '';

const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

axios.interceptors.request.use((config) => {
  // Use latest 'accessToken' in auth header when reference is expired
  const latestAccessToken = SecureStorageUtils.getItem(SecureStorageEnum.ACCESS_TOKEN);
  const newConfig = { ...config };
  if (latestAccessToken && latestAccessToken !== accessToken) {
    newConfig.headers.Authorization = TokenUtils.tokenToBearerSchema(latestAccessToken);
  }
  return newConfig;
});

axios.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
    return response;
  },
  async (interceptorError) => {
    if (interceptorError.response) {
      const refreshToken = SecureStorageUtils.getItem(SecureStorageEnum.REFRESH_TOKEN);
      if (interceptorError.response.status === 401 && refreshToken) {
        const originalRequest = interceptorError.config;
        // refresh token
        try {
          const axiosClone = Axios.create({ baseURL: BASE_URL });
          const response = await axiosClone.post<RefreshTokenReturn>(ApiRouteEnums.REFRESH_TOKEN, {
            refreshToken,
          });
          if (response.status === 200) {
            SecureStorageUtils.setItem(SecureStorageEnum.ACCESS_TOKEN, response.data.accessToken);
            SecureStorageUtils.setItem(SecureStorageEnum.REFRESH_TOKEN, response.data.refreshToken);
            axiosClone.defaults.headers.common.Authorization = TokenUtils.tokenToBearerSchema(
              response.data.accessToken,
            );
            originalRequest.headers.Authorization = TokenUtils.tokenToBearerSchema(
              response.data.accessToken,
            );

            return axios(originalRequest);
          }
        } catch (refreshTokenError: any) {
          if (refreshTokenError.response.status === 401) {
            // logout
            SecureStorageUtils.removeItem(SecureStorageEnum.ACCESS_TOKEN);
            SecureStorageUtils.removeItem(SecureStorageEnum.REFRESH_TOKEN);
            window.location.href = AppRouteEnums.SIGN_IN;
          }
        }
      }
      throw interceptorError.response.data;
    }
    throw interceptorError;
  },
);

/* replace any type when api already generated */

export type RefreshTokenReturn = any;

export type LoginArgs = any;
export type LoginReturn = any;
export const login = async (args: LoginArgs) => {
  return axios.post<any, LoginReturn>(ApiRouteEnums.LOGIN, args);
};

export type LogoutReturn = any;
export const logout = async () => {
  return axios.post<any, LogoutReturn>(ApiRouteEnums.LOGOUT);
};

export type GetProfileReturn = any;
export const getProfile = async () => {
  return axios.get<any, GetProfileReturn>(ApiRouteEnums.GET_PROFILE);
};
