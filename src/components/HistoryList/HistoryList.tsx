import React, { useMemo } from 'react'
import throttle from 'lodash.throttle';
import { useStore } from '../../store/common.store.ts';

import styles from './HistoryList.module.css';

const HistoryList: React.FC = () => {
  const { historyList, removeItemFromHistoryList, getWeatherData } = useStore();

  const throttledSearchHistory = useMemo(
    () => throttle((item) => {
      getWeatherData(item);
    }, 1500),
    [getWeatherData]
  );

  return (
    <ul className={`${styles.listContainer} list-group`}>
      {historyList?.map((item, index) => (
        <li
          key={item}
          className={`${styles.item} list-group-item d-flex justify-content-between align-items-center`}
        >
          <button onClick={() => throttledSearchHistory(item)}>{item}</button>
          <button className={`${styles.removeBtn} btn btn-danger btn-sm`} onClick={(e) => {
            e.stopPropagation();
            removeItemFromHistoryList(index);
          }}>
            remove
          </button>
        </li>
      ))}
    </ul>
  )
}

export default HistoryList;
