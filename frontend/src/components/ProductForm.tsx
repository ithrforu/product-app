import React, { FC, useRef, useEffect, ReactNode, RefObject } from 'react';
import { ProductT, HTTPMethodT } from '../types';
import TextFieldWithRef from './UI/Inputs/TextFieldWithRef';
import StyledSelect from './UI/Inputs/StyledSelect';
import FileField from './UI/Inputs/FileField';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';

type ProductFormProps = {
  method?: HTTPMethodT
  product?: ProductT; 
  onSubmit: (e: React.FormEvent) => void;
  children?: ReactNode;
};

const ProductForm:FC<ProductFormProps> = ({ method, product, onSubmit, children}) => {

  const firstInputRef = useRef() as RefObject<HTMLInputElement>;

  useEffect(() => {
    const input = firstInputRef.current?.querySelector('input');
    input?.focus();
  });

  return (
    <Box
      component="form"
      autoComplete="off"
      method={method}
      encType="multipart/form-data"
      onSubmit={onSubmit}
    >
      <TextFieldWithRef
        sx={{marginTop: 5 + 'px', marginBottom: 5 + 'px'}}
        fullWidth
        ref={firstInputRef}
        id="title"
        name="title"
        label="Product title"
        defaultValue={product?.title}
        variant="outlined"
        required
      />
      <TextField
        sx={{marginTop: 5 + 'px', marginBottom: 5 + 'px'}}
        fullWidth
        id="description"
        name="description"
        label="Product description"
        defaultValue={product?.description}
        variant="outlined"
        required
      />
      <TextField
        sx={{marginTop: 5 + 'px', marginBottom: 5 + 'px'}}
        fullWidth
        id="price"
        name="price"
        label="Product price"
        type="number"
        defaultValue={product?.price}
        variant="outlined"
        required
      />
      <StyledSelect
      sx={{marginTop: 5 + 'px', marginBottom: 5 + 'px'}}
      fullWidth
      id="category"
      name="category"
      labelId = "category-label"
      label = "Choose category"
      defaultValue={product?.category || 'men\'s clothing'}
      items={[
        {value: 'men\'s clothing', title: 'men\'s clothing'},
        {value: 'women\'s clothing', title: 'women\'s clothing'},
        {value: 'jewelery', title: 'jewelery'},
        {value: 'electronics', title: 'electronics'}
      ]}
      required
      />
      <FileField
        id="image"
        name="image"
        label="Choose product image"
        accept="image/*"
      />
      <div className="flex justify-center mt-[10px] gap-1">
        {children}
      </div>
    </Box>
  );
};

export default ProductForm;