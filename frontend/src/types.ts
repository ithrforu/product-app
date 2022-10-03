import { ProductsActions } from './enums';
import { Dispatch, SetStateAction } from 'react';

export type ProductT = {
  id: number;
  title: string;
  description: string;
  category?: string;
  price: string;
  image: string;
};

export type ProductsDataT = ProductT[];

type ProductsActionT = {
  type: ProductsActions;
  payload: ProductsDataT | ProductT | number;
};

export type productsReducerT = {
  (products: ProductsDataT, action: ProductsActionT): ProductsDataT;
} 

export type UseFetchingT = () => UseFetchingReturnT;

export type UseFetchingReturnT = [
  data: ProductsDataT,
  manageProduct: ManageDataT<'add' | 'edit' | 'delete'>,
  fetchState: FetchStateT,
  filter: FilterStateT,
  setFilter: React.Dispatch<React.SetStateAction<FilterStateT>>,
  totalDataCount: number
];

export type FetchStateT = {
  isLoad: boolean;
  error: string;
};

export type PagesInfoStateT = {
  totalDataCount: number;
  page: number
};

export type FetchFuncT = (method: HTTPMethodT, request?: FormData | null, id?: number) => Promise<void>;

export type ManageDataFuncT<K> = K extends 'delete' ? (id: number) => void : (FD: FormData) => void;

export type ManageDataT<T extends 'add' | 'edit' | 'delete'> = {
  [K in T]: ManageDataFuncT<K>;
};

export type HTTPMethodT = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export type ModalContextT = [
  isModalVisible: boolean,
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
];

export type AuthContextT = [
  isAuth: boolean,
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
];

export type ModalPropsT = {
  title: string
  children?: React.ReactNode
};

export type FilterStateT = {
  limit: number;
  order: string;
  sort: string;
};

export type UseSearchedProductsT = (products: ProductsDataT) => [
  ProductsDataT,
  string,
  Dispatch<SetStateAction<string>>
];

export type UseLocalStorageT = (initialValue: any, key: string) => [value: any, setValue: Dispatch<any>];

export type UsePaginationT = (totalDataCount: number, limit: number) => [
  page: string | number,
  totalPages: number,
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void
];