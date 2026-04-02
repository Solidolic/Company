import { StateCreator } from 'zustand';
import { fetchWeather } from '../services/fetchers/fetchWeather.ts';
import { WeatherDataProps } from '../components/common.types.ts';

export interface WeatherSlice {
  searchValue: string;
  historyList: string[];
  removeItemFromHistoryList: (index: number) => void;
  weatherData: WeatherDataProps | null;
  setSearchValue: (value: string) => void;
  getWeatherData: (city?: string) => Promise<void>
  addToHistory: (city: string) => void;
  isLoading: boolean;
  error: string | null;
}

export const createWeatherSlice: StateCreator<WeatherSlice> = (set, getState) => ({
  searchValue: '',
  weatherData: null,
  isLoading: false,
  error: null,
  historyList: [],
  setSearchValue: (value) => set({ searchValue: value }),
  getWeatherData: async (city) => {
    const { searchValue } = getState();

    if (!searchValue && !city) {
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const data = await fetchWeather({ q: city || searchValue });

      set((state) => ({
        historyList: state.historyList.some(item => (item === searchValue) || city)
          ? state.historyList
          : [...state.historyList, searchValue],
        weatherData: data,
        ...(city && { searchValue: city }),
      }));
    } catch (err) {
      set({ error: err instanceof Error ? err.message : 'Failed to fetch weather' });
    } finally {
      set({ isLoading: false });
    }
  },
  addToHistory: (city: string) => set((state) => {
    if (state.historyList.some(item => item === city)) {
      return state;
    }
    return { historyList: [...state.historyList, city] };
  }),
  removeItemFromHistoryList: (index: number) => set((state) => ({
    historyList: state.historyList.filter((item, i) => i !== index)
  })),
});
