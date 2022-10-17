import "./current-weather.css"

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">London</p>
        <p className="weather">Cloudy</p>
      </div>
      <img alt="weather" className="weather-icon"/>
    </div>
  )
}

export default CurrentWeather
