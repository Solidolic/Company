export interface WeatherDayDto {
  maxtemp_c: number;
  mintemp_c: number;
}

export interface WeatherForecastDayDto {
  day: WeatherDayDto;
}

export interface WeatherDataDto {
  location: {
    name: string;
    lon: number;
    lat: number;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
  };
  forecast?: {
    forecastday: WeatherForecastDayDto[];
  };
}
