import React from 'react';

function WeatherDisplay({ weather }) {
  if (!weather) {
    return null;
  }

  return (
    <div>
      <h2>Clima en {weather.name}</h2>
      <p>Temperatura: {weather.main.temp}°C</p>
      <p>Clima: {weather.weather[0].description}</p>
      <p>Humedad: {weather.main.humidity}%</p>
      <p>Viento: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherDisplay;