import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  const handleWeatherData = (data) => {
    setWeather(data);
  };

  const clearWeatherData = () => {
    setWeather(null); 
  };

  return (
    <div className="App">
      <h1>Consulta el Clima</h1>
      <WeatherForm onWeatherData={handleWeatherData} onClearWeather={clearWeatherData} />
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;