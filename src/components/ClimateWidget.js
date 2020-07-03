import React, { useState, useEffect } from 'react';

const api = {
  key: "77069b8e5568cabb6affa2971ba119a1",
  base: "https://api.openweathermap.org/data/2.5/"
}

function ClimateWidget({city}) {

  const [weather, setWeather] = useState({});
  
  useEffect(() => {search()}, [])

  const search = () => {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
      })
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
    {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">Wind Speed: {weather.wind.speed}</div>
            <div className="clouds">All clouds: {weather.clouds.all}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default ClimateWidget;
