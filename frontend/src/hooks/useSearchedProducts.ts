import { useMemo, useState } from 'react';
import { UseSearchedProductsT } from '../types';

export const useSearchedProducts: UseSearchedProductsT = (products) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const searchedProducts = useMemo(() => {
    return products.filter(p => p.title.toLowerCase().includes(searchQuery));
  }, [products, searchQuery]);

  return [searchedProducts, searchQuery, setSearchQuery];
};