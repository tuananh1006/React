import React from 'react';
import { WeatherData } from '../types/weather';
import './WeatherDisplay.css';

interface WeatherDisplayProps {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData, loading, error }) => {
  if (loading) {
    return (
      <div className="weather-display">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Đang tải dữ liệu thời tiết...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-display">
        <div className="error">
          <p>❌ {error}</p>
        </div>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="weather-display">
        <div className="no-data">
          <p>🌤️ Nhập tên thành phố để xem dự báo thời tiết</p>
        </div>
      </div>
    );
  }

  const { location, current, forecast } = weatherData;

  return (
    <div className="weather-display">
      {/* Current Weather */}
      <div className="current-weather">
        <div className="location">
          <h2>{location.name}, {location.country}</h2>
        </div>
        
        <div className="current-info">
          <div className="temperature">
            <img 
              src={`https:${current.condition.icon}`} 
              alt={current.condition.text}
              className="weather-icon"
            />
            <div className="temp-info">
              <span className="temp-main">{Math.round(current.temp_c)}°C</span>
              <span className="temp-feels">Cảm giác như {Math.round(current.feelslike_c)}°C</span>
            </div>
          </div>
          
          <div className="weather-details">
            <p className="condition">{current.condition.text}</p>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Độ ẩm:</span>
                <span className="detail-value">{current.humidity}%</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Gió:</span>
                <span className="detail-value">{current.wind_kph} km/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forecast */}
      <div className="forecast">
        <h3>Dự báo 3 ngày tới</h3>
        <div className="forecast-grid">
          {forecast.forecastday.slice(0, 3).map((day, index) => (
            <div key={day.date} className="forecast-item">
              <div className="forecast-date">
                {index === 0 ? 'Hôm nay' : 
                 index === 1 ? 'Ngày mai' : 
                 new Date(day.date).toLocaleDateString('vi-VN', { weekday: 'short', day: 'numeric', month: 'numeric' })
                }
              </div>
              <img 
                src={`https:${day.day.condition.icon}`} 
                alt={day.day.condition.text}
                className="forecast-icon"
              />
              <div className="forecast-temps">
                <span className="temp-max">{Math.round(day.day.maxtemp_c)}°</span>
                <span className="temp-min">{Math.round(day.day.mintemp_c)}°</span>
              </div>
              <div className="forecast-condition">{day.day.condition.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;