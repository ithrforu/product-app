import React, { Dispatch, FC, SetStateAction } from 'react';
import { FilterStateT } from '../types';
import { SelectChangeEvent } from '@mui/material/Select';
import StyledSelect from './UI/Inputs/StyledSelect';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

type FilterProductsData = {
  handleFilter: Dispatch<SetStateAction<FilterStateT>>;
  filter: FilterStateT;
  handleSearch: Dispatch<SetStateAction<string>>;
  searchQuery: string;
};

const FilterProducts:FC<FilterProductsData> = ({handleFilter, filter, handleSearch, searchQuery}) => {
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  const handleSelect = (e: SelectChangeEvent) => {
    handleFilter(p => ({...p, [e.target.name]: e.target.value}));

    if(e.target.name === 'limit') {
      navigate(`/products/1`);
    }
  }

  return (
    <section>
      <form className="py-4  flex justify-start items-center gap-5">
        <TextField
          sx={{flexGrow: 15}}
          size="small" label="Search"
          name="query"
          value={searchQuery}
          onChange={handleInput}
        />
        <StyledSelect
          sx={{flexGrow: 1}}
          size="small"
          labelId="sortBy-label"
          id="sortBy-select"
          name="sort"
          value={filter.sort}
          label="Sort by"
          onChange={handleSelect}
          items={[
            {value: 'id', title: 'None'},
            {value: 'price', title: 'Price'},
            {value: 'category', title: 'Category'},
            {value: 'title', title: 'Title'},
            {value: 'description', title: 'Description'},
          ]}
        />
        <StyledSelect
          sx={{flexGrow: 1}}
          size="small"
          labelId="order-label"
          id="order-select"
          name="order"
          value={filter.order}
          label="Order"
          onChange={handleSelect}
          items={[
            {value: 'desc', title: 'Descending '},
            {value: 'asc', title: 'Ascending'},
          ]}
        />
        <StyledSelect
          sx={{flexGrow: 1}}
          size="small"
          labelId="limit-label"
          id="limit-select"
          name="limit"
          value={filter.limit.toString()}
          label="Limit"
          onChange={handleSelect}
          items={[
            {value: '5', title: '5'},
            {value: '10', title: '10'},
            {value: '15', title: '15'},
          ]}
        />
      </form>
    </section>
  );
};

export default FilterProducts;