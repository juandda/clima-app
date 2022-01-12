import React, { useState, useEffect } from "react"
import '../styles/weatherInfo.styles.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThermometerThreeQuarters, faTint, faWind} from '@fortawesome/free-solid-svg-icons'

const WeatherInfo = ({country, city, temp, humidity, wind, icon}) =>{

    const [degrees, setDegrees] = useState(0)
    const [unit, setUnit] = useState("°C")

    useEffect(() =>{
        setDegrees(temp)
    }, [temp])

    const handleTemp = (temp) => {
        if(degrees > 55){
            setDegrees((degrees-32)/1.8)
            setUnit("°C")
        }
        if(degrees < 55){
            setDegrees((degrees * 1.8)+32)
            setUnit("°F")
        }
    }
    return(
        <div className="weather-container">
            <div className="img-container">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
            </div>
            <div className="info-container">
                <h3>{`${city}, ${country}`}</h3>
                <h3><FontAwesomeIcon icon={faThermometerThreeQuarters}/>&nbsp; {`${Math.round(degrees)}${unit}`}</h3>
                <h3><FontAwesomeIcon icon={faTint}/>&nbsp; {humidity}%</h3>
                <h3><FontAwesomeIcon icon={faWind}/>&nbsp; {wind} km/h</h3>
                <button onClick={(e) => handleTemp(temp)}>Convertir °F / °C</button>
            </div>
        </div>
    )
}

export default WeatherInfo;