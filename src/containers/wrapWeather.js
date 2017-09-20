import React, { Component } from 'react'
import { getWeather } from '../services/weather'

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData)
    return (
        <h2>Loading</h2>
    )
  const weather = weatherData.weather[0]
  const iconUrl = 'https://openweathermap.org/img/w/' + weather.icon + '.png'
  return (
    <div>
      <h1>
        {weather.main} in {weatherData.name}
        <img src={iconUrl} alt={weatherData.description} />
      </h1>
      <p>Current: {weatherData.main.temp}°</p>
      <p>High: {weatherData.main.temp_max}°</p>
      <p>Low: {weatherData.main.temp_min}°</p>
      <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
    </div>
  )
}

class Weather extends Component {
  state = { weatherData: undefined }

  async componentDidMount() {
    this.setState({ weatherData: await getWeather(this.props.name) })
  }

  render() {
    return <WeatherDisplay weatherData={this.state.weatherData} />
  }
}

export default Weather
