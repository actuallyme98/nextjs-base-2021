import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    backdropRoot: {
      zIndex: theme.zIndex.tooltip + 1,
      color: theme.colors.white,
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
