import React, { FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SxProps, Theme } from '@mui/material';

type StyledSelectProps = {
  sx?: SxProps<Theme>;
  fullWidth?: boolean
  size?: "small" | "medium" | undefined;
  labelId: string;
  label: string;
  name: string;
  id: string;
  defaultValue?: string | undefined;
  value?: string;
  onChange?: (e: SelectChangeEvent) => void;
  items: {value: string; title: string}[];
  required?: boolean;
};

const StyledSelect:FC<StyledSelectProps> = (props) => {
  const {
    items,
    labelId,
    name,
    label,
    sx,
    fullWidth,
    size,
    required,
    defaultValue,
    ...restProps
  } = props;

  return (
    <FormControl sx={sx} size={size} fullWidth={fullWidth} required>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select name={name} label={label} {...restProps} defaultValue={defaultValue}>
        {
          items.map(item => (
            <MenuItem key={item.value} value={item.value}>{item.title}</MenuItem>
          ))
        }
      </Select>
  </FormControl>
  );
};

export default StyledSelect;