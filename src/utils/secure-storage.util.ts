import { SecureStorageEnum } from '~/enums/auth.enum';

export const setItem = (name: SecureStorageEnum, value: string) => {
  if (process.browser) {
    return sessionStorage.setItem(name, value);
  }
};

export const getItem = (name: SecureStorageEnum) => {
  if (process.browser) {
    return sessionStorage.getItem(name);
  }
};

export const removeItem = (name: SecureStorageEnum) => {
  if (process.browser) {
    return sessionStorage.removeItem(name);
  }
};
