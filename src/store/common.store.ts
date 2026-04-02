import { create } from 'zustand';
import { createWeatherSlice, WeatherSlice } from './weather.slice.ts';

type StoreState = WeatherSlice;

export const useStore = create<StoreState>()((...a) => ({
  ...createWeatherSlice(...a),
}));
