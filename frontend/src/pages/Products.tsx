import React, { FC } from 'react';
import { ProductT } from '../types';
import Product from '../components/Product';
import AddProductForm from '../components/AddProductForm';
import FilterProducts from '../components/FilterProducts';
import PaginationControlled from '../components/Pagination';
import StatusBar from '../components/UI/StatusBar/StatusBar';
import ModalProvider from '../components/UI/Modal/ModalProvider';
import { useFetching } from '../hooks/useFetching';
import { useSearchedProducts } from '../hooks/useSearchedProducts';

const Products:FC = () => {
  const [
    products,
    manageProducts,
    fetchState,
    filter,
    setFilter,
    totalProductsCount
  ] = useFetching();

  const [searchedProducts, searchQuery, setSearchQuery] = useSearchedProducts(products);

  return (
    <>
      <h1 className="font-bold text-center text-4xl my-5">Products</h1>
      <ModalProvider title="Create product">
        <AddProductForm addProduct={manageProducts.add}/>
      </ModalProvider>
      <FilterProducts
        handleFilter={setFilter}
        filter={filter}
        handleSearch={setSearchQuery}
        searchQuery={searchQuery}
      />
      <PaginationControlled totalProducts={totalProductsCount} limit={filter.limit}/>
      <StatusBar isLoad={fetchState.isLoad} error={fetchState.error}/>
      { searchedProducts.map((p: ProductT) => (
          <Product
            key={p.id}
            product={p}
            editProduct={manageProducts.edit}
            deleteProduct={manageProducts.delete}
          />
      ))
      }
    </>
  );
};

export default Products;