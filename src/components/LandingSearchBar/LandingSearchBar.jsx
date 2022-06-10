import React from 'react';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import styles from './LandingSearchBar.module.css';

const LandingSearchBar = ({ placeholder, onSubmit }) => {
  const [search, setSearch] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit(search);
  }

  return (
    <form className={"row mx-auto mt-5 " + styles.searchForm} action="#" method="POST" onSubmit={submitHandler}>
      <div className={"col-sm-8 col-12 mx-auto " + styles.searchContainer}>
        <input
          type="text"
          className={"w-100 px-3 py-2 text-white " + styles.searchInput}
          name="search"
          id="search"
          placeholder={placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={'bg-primary ' + styles.searchButton} type="submit"><BsSearch color="white" /></button>
      </div>
    </form>
  )
}

export default LandingSearchBar