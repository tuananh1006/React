import React, { useState } from 'react';
import './WeatherSearch.css';

interface WeatherSearchProps {
  onSearch: (city: string) => void;
  loading: boolean;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({ onSearch, loading }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <div className="weather-search">
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Nhập tên thành phố..."
            className="search-input"
            disabled={loading}
          />
          <button 
            type="submit" 
            className="search-button"
            disabled={loading || !city.trim()}
          >
            {loading ? 'Đang tìm...' : 'Tìm kiếm'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;