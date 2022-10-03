import { ProductsDataT, productsReducerT, ProductT } from '../types';
import { ProductsActions } from '../enums';

export const productsReducer: productsReducerT = (products, action) => {
  const {type, payload} = action;

  switch (type) {
    case ProductsActions.SET: {
      return payload as ProductsDataT;
    }

    case ProductsActions.ADD: {
      return [payload as ProductT, ...products,];
    }

    case ProductsActions.EDIT: {
      const product = payload as ProductT;

      return products.map(
        p => {
          if(p.id === product.id) {
            return product;
          }
          return p;
        }
      )
    }

    case ProductsActions.DELETE: {
      const id = payload as number;
      return products.filter(p => p.id !== id);
    }
  }
};