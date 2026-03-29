const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

interface FetchParameters {
  endpoint: string;
  options?: Record<string, string>;
}

export const fetchData = async<TFetchResult>({
  endpoint,
  options
}: FetchParameters): Promise<TFetchResult> => {
  const queryParameters = new URLSearchParams(options).toString();

  try {
    const response =
      await fetch(`${BASE_URL}/${endpoint}?key=${API_KEY}&${queryParameters ? `&${queryParameters}` : ''}`);

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(errorData.error?.message || 'Failed to fetch weather data');
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error('An unexpected error occurred during fetch');
  }
};
