import React from 'react'
import SearchField from '../SearchField/SearchField';
import ShowWeatherData from '../ShowWeatherData/ShowWeatherData';
import HistoryList from '../HistoryList/HistoryList';
import Loader from '../Loader/Loader';

import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.weatherContainer}>
        <SearchField />
        <ShowWeatherData />
      </div>
      <HistoryList />
      <Loader />
    </div>
  )
}

export default App;
