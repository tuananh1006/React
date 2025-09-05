import React, { useState } from 'react';
import './App.css';
import WeatherSearch from './components/WeatherSearch';
import WeatherDisplay from './components/WeatherDisplay';
import { WeatherData } from './types/weather';
import { weatherService } from './services/weatherService';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await weatherService.getCurrentWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError('Không thể tải dữ liệu thời tiết. Vui lòng thử lại.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🌤️ Dự Báo Thời Tiết</h1>
        <p>Tìm hiểu thông tin thời tiết của thành phố bạn</p>
      </header>
      
      <main className="App-main">
        <WeatherSearch onSearch={handleSearch} loading={loading} />
        <WeatherDisplay 
          weatherData={weatherData} 
          loading={loading} 
          error={error} 
        />
      </main>
    </div>
  );
}

export default App;
