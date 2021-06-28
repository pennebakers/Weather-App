const WeatherDisplay = ({weather}) => {
    if(weather === undefined){
        return(
            <h1>Error Loading</h1>
        )
    }
    else{
    return (
        <div>
            <img src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions[0]}/>
            <h3>temperature: {weather.current.temperature} Celcius</h3>
            <h3>wind: {weather.current.wind_speed} mph direction {weather.current.wind_dir}</h3>
       </div>
       
    )
    }
}

export default WeatherDisplay