import React, { FC } from 'react';
import { usePagination } from '../hooks/usePagination';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PaginationControlledProps = {
  totalProducts: number;
  limit: number;
};

const PaginationControlled: FC<PaginationControlledProps> = ({totalProducts, limit}) => {
  const [page, totalPages, handleChange] = usePagination(totalProducts, limit);

  return (
    <Stack spacing={2} justifyContent="center" direction="row" className="mb-4">
      <Pagination count={totalPages} page={+page} onChange={handleChange} />
    </Stack>
  );
};

export default PaginationControlled;