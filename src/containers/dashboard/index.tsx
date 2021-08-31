import React from 'react';
import { NextPage, InitialProps } from 'next';
// i18n
import { useTranslation } from 'next-i18next';
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

export default DashboardPage;