import { useState } from 'react';

export default function WeatherForm({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    onSearch(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="p-2 border rounded mr-2"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}
