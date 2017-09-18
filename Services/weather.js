export const getWeatherFromNet = async cityName => {
  const URL =
    'http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=02209aa59ed5efd0d2976605f455a257&units=metric'
  const res = await fetch(URL)
  return await res.json()
}

const cache = localStorage.getItem('weather')

const getWeather = name =>{
    let currentCity = cache[name]
    const currentTime = Date()
    if (!currentCity){
        if(currentCity.time < currentTime-60000){
            return localStorage.getItem('weather')
        }
        else{
            getWeatherFromNet(name)      
        }
    }
}