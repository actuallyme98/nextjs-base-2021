import React from 'react';
// components
import Button, { ButtonProps } from '@material-ui/core/Button';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
// styles
import { useStyles } from './style';

interface Props {
  isSubmitting?: boolean;
  label?: string;
  submittingLabel?: string;
  buttonProps?: ButtonProps;
  circularProgressProps?: CircularProgressProps;
}

const SubmitButton: React.FC<Props> = (props) => {
  const { buttonProps, isSubmitting, label, submittingLabel, circularProgressProps } = props;
  const classes = useStyles(props);

  return (
    <Button type="submit" variant="contained" color="primary" {...buttonProps}>
      {isSubmitting ? submittingLabel : label}
      {isSubmitting && (
        <CircularProgress
          color="inherit"
          size="small"
          className={classes.circularProgress}
          {...circularProgressProps}
        />
      )}
    </Button>
  );
};

export default SubmitButton;
