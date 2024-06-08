import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=24ff7ae3760ed810a8a8e1331a3629b4`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        setError('');
      }).catch((error) => {
        setError('Please enter a valid location');
      });
      setLocation('');
      event.target.blur(); // Remove focus from the search field
    }
  };

  return (
    <div className="app">
      <div className='container'>
        <div className='search'>
          <input
            value={location}
            placeholder='Enter Location'
            type='text'
            onChange={event => setLocation(event.target.value)}
            onKeyDown={searchLocation}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className='wind'>
            {data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined &&
          <div className='bottom'>
            <div className='feels'>
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels like</p>
            </div>
            <div className='humidity'>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
