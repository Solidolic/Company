import { WeatherDataDto } from '../dto/services.dto';
import { WeatherDataProps } from '../../components/common.types';

export const mapWeatherData = (
  data: WeatherDataDto,
): WeatherDataProps => {
  const { current, location, forecast } = data;
  const maxTemp = forecast?.forecastday[0]?.day?.maxtemp_c;
  const minTemp = forecast?.forecastday[0]?.day?.mintemp_c;

  return {
    city: {
      name: location.name,
      lon: location.lon,
      lat: location.lat,
    },
    temperature: current.temp_c,
    windSpeed: current.wind_kph,
    weatherCondition: {
      text: current.condition.text,
      icon: current.condition.icon,
    },
    ...(maxTemp && { maxTempDay: maxTemp }),
    ...(minTemp && { minTempDay: minTemp }),
  };
};
