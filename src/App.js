import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';
import WeatherInfo from './components/WeatherInfo';

function App() {

  const [weather, setWeather] = useState({})

  useEffect(() =>{
    const handleError= () =>{
      console.log("No hemos podido acceder a tu Ubicación, intenta nuevamente")
    }
    const success = position => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f5d32fef53e589d45afead04f5c35f35`)
        .then(res => setWeather(res))
    } 
    navigator.geolocation.getCurrentPosition(success, handleError)
  },[])


  return (
    <div className="App">
      <WeatherInfo
          country={weather.data?.sys.country}
          city={weather.data?.name}
          temp={weather.data?.main.temp}
          humidity={weather.data?.main.humidity}
          wind={weather.data?.wind.speed}
          icon={weather.data?.weather[0].icon}
      />
    </div>
  );
}

export default App;
