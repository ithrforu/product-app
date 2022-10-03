import React, { FC } from 'react';
import classes from './StatusBar.module.css'
import Loader from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert';

type StatusBarProps = {
  isLoad: boolean;
  error: string
};

const StatusBar:FC<StatusBarProps> = ({isLoad, error}) => {
  const isHidden = !isLoad && !error;

  return (
    <div className={classes.barWrapper} style={isHidden ? {display: 'none'} : {display: 'flex'}}>
      { error
        && <Alert severity="error">Error: <strong>{error}</strong>.</Alert>
      }
      { isLoad
        && <Loader />
      }
    </div>
  );
};

export default StatusBar;