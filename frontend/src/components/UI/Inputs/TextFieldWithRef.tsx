import React, { forwardRef, PropsWithChildren } from 'react';
import TextField from '@mui/material/TextField';
import { SxProps, Theme } from '@mui/material';

type TextFieldWithRefProps = {
  id?: string;
  name?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string | undefined;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant: "standard" | "filled" | "outlined" | undefined;
  fullWidth?: boolean
  sx?: SxProps<Theme>;
  required?: boolean;
};

const TextFieldWithRef = forwardRef<HTMLInputElement, PropsWithChildren<TextFieldWithRefProps>>(
  ({variant, fullWidth, sx, label, ...props}, ref) => {
    const inputProps = {ref, ...props};

    return (
      <TextField
      fullWidth={fullWidth}
      sx={sx}
      variant={variant}
      label={label}
      {...inputProps}
      />
    );
  }
);

export default TextFieldWithRef;