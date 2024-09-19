import React, { useState } from 'react';

const apiKey = '3b30b7934603e5e80ec59c4bd88f86bb'; 

function WeatherForm({ onWeatherData, onClearWeather }) {
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    onClearWeather(); 
    try {
      if (country.length !== 2) {
        throw new Error('Por favor, ingresa el código del país de dos letras.');
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location},${country}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error('No se encontraron datos para la ciudad ingresada.');
      }

      const data = await response.json();

      if (data.sys.country.toLowerCase() !== country.toLowerCase()) {
        throw new Error('La ciudad no corresponde al país ingresado.');
      }

      onWeatherData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ubicación"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Código de País (2 letras)"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Consultar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default WeatherForm;