import React, { useCallback } from 'react';
// i18n
import { useTranslation } from 'next-i18next';
// components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import UserPopover from './user-popover';
// styles
import { useStyles } from './style';

interface Props {
  isDownMd: boolean;
  onOpenDrawer: () => void;
}

const Header: React.FC<Props> = (props) => {
  const { isDownMd, onOpenDrawer } = props;
  const classes = useStyles(props);
  const { t } = useTranslation();
  const [userPopoverAnchorEl, setUserPopoverAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const onAvatarClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setUserPopoverAnchorEl(event.currentTarget);
  }, []);
  const onUserPopoverClose = useCallback(() => {
    setUserPopoverAnchorEl(null);
  }, []);

  return (
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {isDownMd && (
          <IconButton className={classes.menuButton} onClick={onOpenDrawer}>
            <MenuIcon />
          </IconButton>
        )}
        <div className={classes.grow} />
        <div className={classes.accountInfo}>
          <IconButton onClick={onAvatarClick}>
            <img className={classes.avatar} src={'/static/images/default-avatar.jpg'} alt="" />
          </IconButton>
        </div>
      </Toolbar>
      <UserPopover anchorEl={userPopoverAnchorEl} onClose={onUserPopoverClose} />
    </AppBar>
  );
};

export default Header;
