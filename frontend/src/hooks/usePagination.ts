import { useMemo } from 'react';
import { UsePaginationT } from '../types'
import { getPagesAmount } from '../utils/getPageAmount';
import { useNavigate, useParams } from 'react-router-dom';

export const usePagination: UsePaginationT  = (totalDataCount, limit) => {
  const navigate = useNavigate();
  const params = useParams();
  const page = params.page || 1;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    navigate(`/products/${value}`);
  };

  const totalPages = useMemo(
    () => getPagesAmount(totalDataCount, limit), [totalDataCount, limit]
  );

  return [page, totalPages, handleChange];
}