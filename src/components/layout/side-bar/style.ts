import { TOOLBAR_MIN_HEIGHT } from '../header/style';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const SIDE_BAR_WIDTH = 250;

const styles = (theme: Theme) =>
  createStyles({
    drawer: {
      width: SIDE_BAR_WIDTH,
    },
    drawerPaper: {
      width: SIDE_BAR_WIDTH,
      backgroundColor: theme.colors.white,
    },
    headingWrapper: {
      height: TOOLBAR_MIN_HEIGHT,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoIcon: {
      width: 100,
    },
    list: {
      marginTop: theme.spacing(2),
    },
    listItem: {
      color: theme.colors.midnight,
    },
    listItemIcon: {
      color: theme.colors.midnight,
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles, SIDE_BAR_WIDTH };
