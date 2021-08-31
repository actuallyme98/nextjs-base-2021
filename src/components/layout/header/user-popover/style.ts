import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    listItem: {
      width: 225,
      justifyContent: 'space-between',
    },
    separateLine: {
      borderBottom: `1px solid ${theme.colors.dodgerBlue}`,
    },
    avatarWrapper: {
      textAlign: 'center',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: '50%',
    },
    email: {
      color: theme.colors.dodgerBlue,
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
