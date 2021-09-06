import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// i18n
import { useTranslation } from '~/i18n';
// components
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
// enums
import { AppRouteEnums } from '~/enums/app-route.enum';
// styles
import { useStyles } from './style';

interface Props {
  isDownMd: boolean;
  openDrawer: boolean;
  onCloseDrawer: () => void;
}

const SideBar: React.FC<Props> = (props) => {
  const { isDownMd, openDrawer, onCloseDrawer } = props;
  const classes = useStyles(props);
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Drawer
      variant={isDownMd ? 'temporary' : 'persistent'}
      open={isDownMd ? openDrawer : true}
      onClose={onCloseDrawer}
      classes={{ root: classes.drawer, paper: classes.drawerPaper }}
    >
      <div className={classes.headingWrapper}>
        <img className={classes.logoIcon} src="/vercel.svg" alt="" />
      </div>
      <List className={classes.list}>
        <Link href={AppRouteEnums.HOME} passHref>
          <ListItem
            className={classes.listItem}
            button
            selected={router.pathname === AppRouteEnums.HOME}
          >
            <ListItemIcon>
              <DashboardOutlinedIcon className={classes.listItemIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">{t('dashboard')}</Typography>
            </ListItemText>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default SideBar;
