import React, { FC, useContext, FormEvent} from 'react';
import { ManageDataFuncT } from '../types';
import { ModalContext } from '../context/ModalContext';
import ProductForm from '../components/ProductForm';
import ConfirmButton from '../components/UI/Buttons/ConfirmButton';
import CancelButton from '../components/UI/Buttons/CancelButton';

type AddProductFormData = {
  addProduct: ManageDataFuncT<'add'>;
};

const AddProductForm:FC<AddProductFormData> = ({addProduct}) => {
  const [, setIsModalVisible] = useContext(ModalContext);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(e.target)
    const form = e.target as HTMLFormElement;
    const FD: FormData = new FormData(form);
    FD.append('id', `${Date.now()}`);
    addProduct(FD);
    setIsModalVisible(false);
  };

  const cancelHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <ProductForm method="POST" onSubmit={submitHandler}>
      <ConfirmButton title="Create"/>
      <CancelButton title="Cancel" onClick={cancelHandler}/>
    </ProductForm>
  );
};

export default AddProductForm;