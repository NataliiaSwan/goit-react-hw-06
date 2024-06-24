import React from "react";

import { useDispatch } from "react-redux";

import { changeFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };
  return (
    <div className={css.box}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
