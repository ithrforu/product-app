import { useState, useReducer, useEffect, useCallback } from "react"
import { ManageDataT, UseFetchingT, FetchStateT, FetchFuncT, FilterStateT } from "../types";
import { ProductsActions } from '../enums';
import FetchService from '../API/FetchService';
import { AxiosError } from 'axios';
import { productsReducer } from '../reducers/dataReducer';
import { useParams } from 'react-router-dom';

export const useFetching: UseFetchingT = () => {
  const [data, dispatch] = useReducer(productsReducer, []);
  const [fetchState, setFetchState] = useState<FetchStateT>({ isLoad: false, error: '' });
  const [filter, setFilter] = useState<FilterStateT>({limit: 5, order: 'desc', sort: 'id'});
  const [totalDataCount, setTotalDataCount] = useState<number>(0);

  const params = useParams();
  const page = params.page || 1;

  const fetch: FetchFuncT = useCallback(
    async (method, request, id) => {
    try {
      setFetchState({isLoad: true, error: ''});

      if(method === 'GET') {
        const response = await FetchService.getAll(
          +filter.limit,
          filter.sort,
          filter.order,
          +page
        );

        setTotalDataCount(+response.headers['x-total-count']);
        dispatch({type: ProductsActions.SET, payload: response.data});
      }

      if(method === 'POST' && request) {
        const {data} = await FetchService.sendProduct(request);
        dispatch({type: ProductsActions.ADD, payload: data});
        setTotalDataCount(totalDataCount + 1);
      }

      if(method === 'PATCH' && request) {
        const {data} = await FetchService.editProduct(request);
        dispatch({type: ProductsActions.EDIT, payload: data});
      }

      if(method === 'DELETE' && id) {
        await FetchService.deleteProduct(id);
        dispatch({type: ProductsActions.DELETE, payload: id});
        setTotalDataCount(totalDataCount - 1);
      }

    } catch (e: unknown) {
      const error = e as AxiosError;
      setFetchState(p => ({...p, error: error.message}));
    } finally {
      setFetchState(p => ({isLoad: false, error: p.error}));
    }
  }, [filter.sort, filter.order, filter.limit, page, totalDataCount]);

  useEffect(() => {
    fetch('GET');
    return () => {
      FetchService.abort();
    };
  }, [fetch]);

  const manageData: ManageDataT<'add' | 'edit' | 'delete'> = {
    add: FD => fetch('POST', FD),
    edit: (FD)=> fetch('PATCH', FD),
    delete: id => fetch('DELETE', null, id),
  }

  return [
    data,
    manageData,
    fetchState,
    filter,
    setFilter,
    totalDataCount
  ];
};