import React from 'react'
import { useStore } from '../../store/common.store.ts';

import styles from './ShowWeatherData.module.css';

const ShowWeatherData: React.FC = () => {
  const { weatherData } = useStore();

  if (!weatherData) {
    return null;
  }

  const {
    temperature,
    windSpeed,
    weatherCondition,
    city,
    maxTempDay,
    minTempDay,
  } = weatherData;

  return (
    <div className={`${styles.container} card shadow-sm mx-auto my-4 p-4 text-center`}>
      <h2 className={'display-6 mb-3'}>{`City name: ${city.name}`}</h2>
      <div className={'h1 text-primary fw-bold mb-1'}>{`Temperature: ${temperature} °C`}</div>
      <div className={'d-flex justify-content-center gap-3 mb-3 text-muted small'}>
        {maxTempDay && <span>{`Max: ${maxTempDay} °C`}</span>}
        {minTempDay && <span>{`Min: ${minTempDay} °C`}</span>}
      </div>
      <div className={`${styles.item} d-flex align-items-center justify-content-center mb-3 p-2 bg-light rounded`}>
        <span className="fw-medium">{weatherCondition.text}</span>
        <img src={weatherCondition.icon} alt="weather icon" style={{ width: '48px' }} />
      </div>
      <div className={'border-top pt-3 text-secondary'}>
        {`Wind speed: ${windSpeed} kph`}
      </div>
    </div>
  )
}

export default ShowWeatherData;
