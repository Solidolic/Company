import { fetchData } from '../restClient';
import { mapWeatherData } from '../mappers/mapWeatherData.ts';
import { WeatherDataProps } from '../../components/common.types';
import { WeatherUrlType } from '../common.types';
import { WeatherDataDto } from '../dto/services.dto';

export type weatherData = Record<string, string>;

export const fetchWeather = async (
  options: weatherData
): Promise<WeatherDataProps> => {
  const data: WeatherDataDto = await fetchData({ endpoint: WeatherUrlType.FORECAST, options });

  return mapWeatherData(data);
}
