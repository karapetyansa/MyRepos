export const getWeatherFromNet = async cityName => {
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=02209aa59ed5efd0d2976605f455a257&units=metric`
  const res = await fetch(URL)
  return res.json()
}

const cache = {}

export const getWeather = async name => {
  let currentCity = cache[name]
  const currentTime = Date()
  if (!currentCity || currentCity.time > currentTime - 60000) {
    currentCity = await getWeatherFromNet(name)
    currentCity.time = currentTime
    cache[name] = currentCity
  }
  return currentCity
}
