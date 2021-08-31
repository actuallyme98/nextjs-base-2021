import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(6),
    },
    content: {},
    logoWrapper: {
      padding: theme.spacing(3, 0),
    },
    logo: {
      width: 150,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 22,
      color: theme.colors.dodgerBlue,
    },
    subTitle: {
      fontSize: 16,
      color: theme.colors.midnight,
    },
    inputLabelWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {},
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
