import { WeatherData } from '../types/weather';

class WeatherService {
  private baseUrl = 'https://api.weatherapi.com/v1';
  private apiKey = process.env.REACT_APP_WEATHER_API_KEY || 'demo_key';

  async getCurrentWeather(city: string): Promise<WeatherData> {
    // For demo purposes, we'll return mock data if no API key is available
    if (this.apiKey === 'demo_key') {
      return this.getMockWeatherData(city);
    }

    try {
      const response = await fetch(
        `${this.baseUrl}/forecast.json?key=${this.apiKey}&q=${encodeURIComponent(city)}&days=7&aqi=no&alerts=no`
      );

      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Fallback to mock data if API fails
      return this.getMockWeatherData(city);
    }
  }

  private getMockWeatherData(city: string): WeatherData {
    // Mock weather data for demonstration
    const mockData: WeatherData = {
      location: {
        name: city,
        country: 'Demo Country'
      },
      current: {
        temp_c: 22,
        temp_f: 72,
        condition: {
          text: 'Partly cloudy',
          icon: '//cdn.weatherapi.com/weather/64x64/day/116.png'
        },
        humidity: 65,
        wind_kph: 10.8,
        feelslike_c: 24,
        feelslike_f: 75
      },
      forecast: {
        forecastday: [
          {
            date: new Date().toISOString().split('T')[0],
            day: {
              maxtemp_c: 25,
              maxtemp_f: 77,
              mintemp_c: 18,
              mintemp_f: 64,
              avgtemp_c: 22,
              avgtemp_f: 72,
              condition: {
                text: 'Partly cloudy',
                icon: '//cdn.weatherapi.com/weather/64x64/day/116.png'
              },
              avghumidity: 65
            }
          },
          {
            date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
            day: {
              maxtemp_c: 28,
              maxtemp_f: 82,
              mintemp_c: 20,
              mintemp_f: 68,
              avgtemp_c: 24,
              avgtemp_f: 75,
              condition: {
                text: 'Sunny',
                icon: '//cdn.weatherapi.com/weather/64x64/day/113.png'
              },
              avghumidity: 55
            }
          },
          {
            date: new Date(Date.now() + 172800000).toISOString().split('T')[0],
            day: {
              maxtemp_c: 26,
              maxtemp_f: 79,
              mintemp_c: 19,
              mintemp_f: 66,
              avgtemp_c: 23,
              avgtemp_f: 73,
              condition: {
                text: 'Light rain',
                icon: '//cdn.weatherapi.com/weather/64x64/day/296.png'
              },
              avghumidity: 75
            }
          }
        ]
      }
    };

    return mockData;
  }
}

export const weatherService = new WeatherService();