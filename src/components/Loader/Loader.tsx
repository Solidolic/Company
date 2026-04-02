import React from 'react'
import { useStore } from '../../store/common.store.ts';

import styles from './Loader.module.css';

const Loader: React.FC = () => {
  const { isLoading } = useStore();

  if (!isLoading) {
    return null
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.spinner} />
        <span className={styles.text}>Loading weather data...</span>
      </div>
    </div>
  );
}

export default Loader;
