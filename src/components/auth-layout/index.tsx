import React from 'react';
// components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// styles
import { useStyles } from './style';

interface Props {}

const AuthLayout: React.FC<Props> = (props) => {
  const { children } = props;
  const classes = useStyles(props);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={false} sm={false} md={7} className={classes.bgImage} />
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>{children}</div>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
