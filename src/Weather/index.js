import React, {useState,} from "react";
import "./index.css"
import { GoSun } from "react-icons/go";
import axios from "axios";

function WeatherDashboard(){
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    async function handleSearch(){
      try {
        const response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=76f554310844452797b54548242606&q=${city}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    function submitSearch(e){
        e.preventDefault();
        handleSearch();
      };
    return(
        <div className="search">
            <nav>
                <h3>Rayn</h3>
                <form onSubmit={submitSearch}>
                <input type="text" placeholder="Enter city name"  value={city} onChange={(e) => setCity(e.target.value)}/>
                </form>
            </nav>
            <div className="container">
                <img src="/Media/weather.jpg" alt = ""/>
                <div className="bottom-left">
                <GoSun color="white" size= '3.0rem'/>
                <h1>13</h1>
                <h5>Telluride, CO,USA</h5>
                </div>
                <div className="bottom-right">
                <h5><b>7:50pm</b></h5>
                <h5>Sunset Time, Monday</h5>
                </div>
            </div>
            {weatherData && (
            <div className="weather-content">
              <div className="weather-info">
                <h2>{weatherData.location.name}</h2>
                <p>{weatherData.current.condition.text}</p>
                <p>Temperature: {weatherData.current.temp_c}°C</p>
                <p>Humidity: {weatherData.current.humidity}%</p>
                <p>Wind speed: {weatherData.current.wind_kph} km/h</p>
                <p>Last updated: {new Date(weatherData.current.last_updated_epoch * 1000).toLocaleString()}</p>
              </div>
            </div>
        )}
        </div>
    )
};

export default WeatherDashboard;