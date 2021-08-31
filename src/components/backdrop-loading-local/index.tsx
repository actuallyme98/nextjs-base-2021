import React from 'react';
// components
import Backdrop, { BackdropProps } from '@material-ui/core/Backdrop';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
// styles
import { useStyles } from './style';

interface Props {
  backdropProps: BackdropProps;
  circularProgressProps?: CircularProgressProps;
}

const BackdropLoadingLocal: React.FC<Props> = (props) => {
  const { backdropProps, circularProgressProps, children } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Backdrop
        {...backdropProps}
        classes={{ root: classes.backdropRoot, ...backdropProps.classes }}
      >
        <CircularProgress color="inherit" {...circularProgressProps} />
      </Backdrop>
      {children}
    </div>
  );
};

export default BackdropLoadingLocal;
