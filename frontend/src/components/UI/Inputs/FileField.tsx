import React, { FC } from 'react';
import classes from './FileField.module.css'

type FileFieldData = {
  id: string;
  name: string;
  label: string;
  accept: string;
};

const FileField:FC<FileFieldData> = ({id, name, label, ...props}) => {
  return (
    <div className={classes.fileField}>
      <label className={classes.fileLabel} htmlFor={id}>{label}</label>
      <input
        className={classes.fileInput}
        type="file"
        id={id}
        name={name}
        {...props}
      />
    </div>
  );
};

export default FileField;