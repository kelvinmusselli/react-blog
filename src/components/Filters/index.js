import React from 'react';
import FilterByAuthor from './FilterByAuthor';
import OrderPost from './OrderPost';

const Filters = ({ dataState }) => {
  return (
    <>
      <FilterByAuthor dataState={dataState}></FilterByAuthor>
      <OrderPost dataState={dataState}></OrderPost>
    </>
  );
};

export default Filters;
