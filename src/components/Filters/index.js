import React from 'react';
import FilterByAuthor from './FilterByAuthor';
import OrderPost from './OrderPost';

const Filters = ({ dataState, setFilterByAuthor, setFilterByDate }) => {
  return (
    <>
      <FilterByAuthor
        dataState={dataState}
        setFilterByAuthor={setFilterByAuthor}></FilterByAuthor>
      <OrderPost setFilterByDate={setFilterByDate}></OrderPost>
    </>
  );
};

export default Filters;
