import { SIDE_BAR_WIDTH } from '../side-bar/style';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const TOOLBAR_MIN_HEIGHT = 60;

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      width: `calc(100% - ${SIDE_BAR_WIDTH}px)`,
      backgroundColor: theme.colors.white,
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    toolbar: {
      minHeight: TOOLBAR_MIN_HEIGHT,
    },
    menuButton: {
      position: 'absolute',
      left: 4,
    },
    grow: {
      flexGrow: 1,
    },
    accountInfo: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      userSelect: 'none',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: '50%',
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles, TOOLBAR_MIN_HEIGHT };
