import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
// i18n
import { useTranslation } from 'next-i18next';
// redux
import { useDispatch } from 'react-redux';
import * as AppActions from '~/redux/actions/app.action';
// component
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
// enums
import { AppRouteEnums } from '~/enums/app-route.enum';
// styles
import { useStyles } from './style';

interface Props {
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

const UserPopover: React.FC<Props> = (props) => {
  const { anchorEl, onClose } = props;
  const classes = useStyles(props);
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSignOutClick = useCallback(() => {
    dispatch(AppActions.logout());
    router.push(AppRouteEnums.SIGN_IN);
  }, [dispatch]);

  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <List>
        <ListItem className={clsx(classes.listItem, classes.separateLine)}>
          <div className={classes.avatarWrapper}>
            <img className={classes.avatar} src={'/static/images/default-avatar.jpg'} alt="" />
          </div>
          <div>
            <Typography variant="body1">Mock name</Typography>
            <Typography variant="caption" className={classes.email}>
              mockemail@gmail.com
            </Typography>
          </div>
        </ListItem>
        <ListItem className={classes.listItem} button>
          {t('setting')}
          <SettingsIcon />
        </ListItem>
        <ListItem className={classes.listItem} button onClick={onSignOutClick}>
          {t('sign_out')}
          <ExitToAppIcon />
        </ListItem>
      </List>
    </Popover>
  );
};

export default UserPopover;
