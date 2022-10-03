import React, { FC, useState } from "react";
import { ProductT, ManageDataFuncT } from "../types";
import EditProductForm from './EditProductForm'
import OptionsMenu from './UI/OptionsMenu/OptionsMenu'
import { formatPrice } from '../utils/formatPrice';
import ConfirmButton from './UI/Buttons/ConfirmButton';
import CancelButton from './UI/Buttons/CancelButton';

type ProductProps = {
  product: ProductT;
  editProduct: ManageDataFuncT<'edit'>;
  deleteProduct: (id: number) => void;
};

const Product:FC<ProductProps> = ({product, editProduct, deleteProduct}) => {
  const [isDetailsHidden, setIsDetailsHidden] = useState<boolean>(true);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleDelete = () => {
    if(window.confirm('Are you sure?')) {
      deleteProduct(product.id);
    }
  };

  return (
    <li className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      {
        isEdit
        ? <EditProductForm product={product} setIsEdit={setIsEdit} editProduct={editProduct} />
        :
        <div className="flex flex-col items-center w-full">
          <div className="self-end">
            <OptionsMenu setIsEdit={setIsEdit} handleDelete={handleDelete}/>
          </div>
          {
            product.image
            ?
            <figure>
              <img
                className="w-1/6 mx-auto"
                src={product.image}
                alt={product.title + ' product image'}
              />
              <figcaption className="text-center mt-2">{product.title}</figcaption>
            </figure>
            : <h3>{product.title}</h3>
          }
          <p>
            Price: <span className="mb-5 font-bold">{formatPrice(product.price, 'en-US', 'EUR')}</span>.
          </p>
          {
            isDetailsHidden
            ?
            <ConfirmButton title="Show details" onClick={() => setIsDetailsHidden(false)} />
            :
            <CancelButton title="Hidden details" onClick={() => setIsDetailsHidden(true)} />
          }
          {
            !isDetailsHidden &&
            <p className="p-3 text-sm text-gray-500">{product.description}</p>
          }
        </div>
      }
    </li>
  );
};

export default Product;