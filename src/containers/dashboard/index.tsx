import React from 'react';
import { NextPage, InitialProps } from 'next';
// i18n
import { useTranslation, NamespaceEnums } from '~/i18n';
// redux
import { initializeStore } from '~/redux/with-redux';
// components
import Layout from '~/components/layout';
// styles
import { useStyles } from './style';

interface Props extends InitialProps {}

const DashboardPage: NextPage<Props, InitialProps> = (props) => {
  const { namespacesRequired } = props;
  const classes = useStyles(props);
  const { t } = useTranslation(namespacesRequired);

  return (
    <Layout>
      <div className={classes.root}></div>
    </Layout>
  );
};

DashboardPage.getInitialProps = async ({ req }) => {
  const reduxStore = initializeStore();

  return {
    title: 'Dashboard',
    namespacesRequired: [NamespaceEnums.COMMON],
    initialReduxState: JSON.stringify(reduxStore.getState()),
  };
};

export default DashboardPage;
