import './App.css';
import React, { useState } from 'react'

function App() {

  const api = {
    key: "bdbc684afe8ee03176442eda497b3339",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [ search, setSearch] = useState('');
  const [ weather, setWeather ] = useState({});

  const searchFunction = evt => {
    if(evt.key === 'Enter'){
      fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setSearch('');
        console.log(result);
      })
    }
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setSearch(e.target.value)}
            value={search}
            onKeyPress={searchFunction}
          />
        </div>
    

    {(typeof weather.main != "undefined") ? (
    <div>
      <div className="location-box">
        <div className="location">
            {weather.name}, {weather.sys.country}
        </div>
      </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp)}°C
          </div>
          <div className="weather">
            {weather.weather[0].main}
          </div>
        </div>
    </div>
    ) : ('')}

      </main>
    </div>
  );
}

export default App;
