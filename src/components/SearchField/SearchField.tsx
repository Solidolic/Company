import React, { ChangeEvent, useCallback, useMemo } from 'react'
import throttle from 'lodash.throttle';
import { useStore } from '../../store/common.store.ts';

import styles from './SearchField.module.css';

const SearchField: React.FC = () => {
  const { searchValue, getWeatherData, setSearchValue } = useStore();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  };

  const handleSearch = useCallback(() => {
    getWeatherData();
  }, [getWeatherData]);

  const throttledSearch = useMemo(
    () => throttle(() => {
      handleSearch();
    }, 1500),
    [handleSearch]
  );

  const onSearchClick = () => {
    throttledSearch();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      throttledSearch();
    }
  };

  return (
    <div className={`${styles.container} container`}>
      <div className={'input-group shadow-sm'}>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search for a city..."
          aria-label="Search for a city"
          onChange={onChangeHandler}
          onKeyDown={handleKeyDown}
          value={searchValue}
          name="search"
        />
        <button
          className={`btn btn-primary px-4 ${searchValue ? '' : 'disabled'}`}
          type="button"
          id="button-search"
          onClick={onSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchField;
