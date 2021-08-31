import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { initializeStore } from '~/redux/with-redux';
import * as AppActions from '~/redux/actions/app.action';
import { NamespaceEnums } from '~/enums/ns.enum';
export { default } from '~/containers/dashboard';

export const getServerSideProps: GetServerSideProps = async ({ req, locale }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  dispatch(AppActions.detectMobile(userAgent));

  return {
    props: {
      title: 'Dashboard',
      namespacesRequired: NamespaceEnums.COMMON,
      initialReduxState: JSON.stringify(reduxStore.getState()),
      ...(await serverSideTranslations(locale || 'en', [NamespaceEnums.COMMON])),
    },
  };
};
