import React, { FC, Dispatch, SetStateAction, FormEvent } from 'react';
import ProductForm from '../components/ProductForm';
import ConfirmButton from '../components/UI/Buttons/ConfirmButton';
import CancelButton from '../components/UI/Buttons/CancelButton';
import { ProductT, ManageDataFuncT } from '../types';

type EditProductFormData = {
  product: ProductT;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  editProduct: ManageDataFuncT<'edit'>;
};

const EditProductForm:FC<EditProductFormData> = ({product, setIsEdit, editProduct}) => {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const FD: FormData = new FormData(form);
    FD.append('id', `${product.id}`);
    editProduct(FD);
    setIsEdit(false);
  };

  const cancelHandler = () => {
    setIsEdit(false);
  };

  return (
    <ProductForm method="PATCH" product={product} onSubmit={submitHandler}>
      <ConfirmButton title="Save"/>
      <CancelButton title="Cancel" onClick={cancelHandler}/>
    </ProductForm>
  );
};

export default EditProductForm;