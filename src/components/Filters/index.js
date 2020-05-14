import React from 'react';
import FilterByAuthor from './FilterByAuthor';
import OrderPost from './OrderPost';

const Filters = ({ dataState, setFilterByAuthor }) => {
  return (
    <>
      <FilterByAuthor
        dataState={dataState}
        setFilterByAuthor={setFilterByAuthor}></FilterByAuthor>
      <OrderPost dataState={dataState}></OrderPost>
    </>
  );
};

export default Filters;
