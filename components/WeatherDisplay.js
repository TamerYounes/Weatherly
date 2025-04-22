export default function WeatherDisplay({ weather }) {
    if (!weather) return null;
  
    return (
      <div className="p-4 border rounded">
        <h2 className="text-xl font-semibold mb-2">{weather.name}</h2>
        <p>Temp: {weather.main.temp}°C</p>
        <p>{weather.weather[0].description}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
    );
  }
  