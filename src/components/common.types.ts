export interface WeatherDataProps {
  temperature: number;
  windSpeed: number;
  weatherCondition: {
    text: string;
    icon: string;
  };
  city: {
    name: string;
    lon: number;
    lat: number;
  };
  minTempDay?: number;
  maxTempDay?: number;
  // add etc props
}
