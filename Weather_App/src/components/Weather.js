import { useEffect, useState } from "react"
import axios from 'axios'
import WeatherDisplay from './WeatherDisplay'

const Weather = ({capital, params}) => {

    const [weather,setWeather] = useState()

    useEffect(() => {
        axios
          .get('http://api.weatherstack.com/current', {params})
          .then(response => {
            console.log(response.data)
            setWeather(response.data)
          })
      },
    
    [params])

    



    return(
        <div>
            <h2>Weather in {capital}</h2>
            <WeatherDisplay weather={weather}/>
        </div>
    )
}
export default Weather