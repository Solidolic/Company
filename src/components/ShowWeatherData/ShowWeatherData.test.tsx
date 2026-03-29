
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ShowWeatherData from './ShowWeatherData.tsx';
import { useStore } from '../../store/common.store';

vi.mock('../../store/common.store', () => ({
  useStore: vi.fn(),
}));

describe('ShowWeatherData Component', () => {
  it('should return null when there is no weather data', () => {
    vi.mocked(useStore).mockReturnValue({ weatherData: null });

    const { container } = render(<ShowWeatherData />);
    expect(container.firstChild).toBeNull();
  });

  it('should render weather data correctly', () => {
    const mockWeatherData = {
      city: { name: 'New York' },
      temperature: 22,
      windSpeed: 15,
      weatherCondition: { text: 'Partly Cloudy', icon: 'https://example.com/icon.png' },
      maxTempDay: 25,
      minTempDay: 18,
    };

    vi.mocked(useStore).mockReturnValue({ weatherData: mockWeatherData });

    render(<ShowWeatherData />);

    expect(screen.getByText(/City name: New York/i)).toBeInTheDocument();
    expect(screen.getByText(/Temperature: 22 °C/i)).toBeInTheDocument();
    expect(screen.getByText(/Max: 25 °C/i)).toBeInTheDocument();
    expect(screen.getByText(/Min: 18 °C/i)).toBeInTheDocument();
    expect(screen.getByText(/Partly Cloudy/i)).toBeInTheDocument();
    expect(screen.getByText(/Wind speed: 15 kph/i)).toBeInTheDocument();

    const icon = screen.getByAltText('weather icon');
    expect(icon).toHaveAttribute('src', 'https://example.com/icon.png');
  });
});
