import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SecureStorageEnum } from '~/enums/auth.enum';
import * as SecureStorageUtils from '~/utils/secure-storage.util';
import { AppRouteEnums } from '~/enums/app-route.enum';

export const useAuthentication = () => {
  const router = useRouter();
  const accessToken = SecureStorageUtils.getItem(SecureStorageEnum.ACCESS_TOKEN);

  useEffect(() => {
    if (!accessToken) {
      router.push(AppRouteEnums.SIGN_IN);
    }
  }, [accessToken]);
};
