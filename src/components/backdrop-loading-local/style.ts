import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    backdropRoot: {
      position: 'absolute',
      zIndex: theme.zIndex.tooltip + 1,
      backgroundColor: alpha(theme.colors.white, 0.5),
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
