'use client';
import { useState } from 'react';
import WeatherForm from '../components/WeatherForm';
import WeatherDisplay from '../components/WeatherDisplay';

export default function Home() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();
    if (data.cod === 200) setWeather(data);
    else alert('City not found');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6 text-blue-700">Weatherly</h1>
        <WeatherForm onSearch={fetchWeather} />
        <WeatherDisplay weather={weather} />
      </div>
    </div>
  );
}
