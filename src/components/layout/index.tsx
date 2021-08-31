import React, { useCallback, useState, useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { sProfile, sIsBackdropLoading } from '~/redux/selectors/app.selector';
import * as AppActions from '~/redux/actions/app.action';
// components
import Header from './header';
import SideBar from './side-bar';
import BackdropLoadingGlobal from '~/components/backdrop-loading-global';
// types
import { StyledComponentProps } from '~/types/material-ui';
// hooks
import { useAuthentication } from '~/hooks/app.hook';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// style
import { useTheme } from '@material-ui/core/styles';
import { useStyles, styles } from './style';

interface Props extends StyledComponentProps<typeof styles> {}

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const profile = useSelector(sProfile);
  const isBackdropLoading = useSelector(sIsBackdropLoading);
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = useState(false);
  const onOpenDrawer = useCallback(() => {
    setOpenDrawer(true);
  }, []);
  const onCloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  useAuthentication();
  useEffect(() => {
    dispatch(AppActions.initializeApp());
  }, []);

  return (
    <>
      <BackdropLoadingGlobal backdropProps={{ open: isBackdropLoading }} />
      {profile && (
        <div className={classes.root}>
          <Header isDownMd={isDownMd} onOpenDrawer={onOpenDrawer} />
          <SideBar isDownMd={isDownMd} openDrawer={openDrawer} onCloseDrawer={onCloseDrawer} />
          <div className={classes.content}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Layout;
