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

const BackdropLoadingGlobal: React.FC<Props> = (props) => {
  const { backdropProps, circularProgressProps } = props;
  const classes = useStyles(props);

  return (
    <Backdrop {...backdropProps} classes={{ root: classes.backdropRoot, ...backdropProps.classes }}>
      <CircularProgress color="inherit" {...circularProgressProps} />
    </Backdrop>
  );
};

export default BackdropLoadingGlobal;
