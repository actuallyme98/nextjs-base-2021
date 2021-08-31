import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    circularProgress: {
      marginLeft: 10,
      width: 15,
      height: 15,
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
