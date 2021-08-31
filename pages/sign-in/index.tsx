import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NamespaceEnums } from '~/enums/ns.enum';
export { default } from '~/containers/sign-in';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    title: 'Đăng nhập',
    namespacesRequired: NamespaceEnums.AUTH_PAGE,
    ...(await serverSideTranslations(locale || 'vi', [NamespaceEnums.AUTH_PAGE])),
  },
});
