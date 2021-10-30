const axios = require('axios')

const currentWeather = async (req, res) => {
    if (!req.query.zipcode) return res.status(400).send({ message: 'zipcode query parameter is required. Example: ?zipcode=12345'})
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
    const requestUrl = `${baseUrl}?zip=${req.query.zipcode},us&units=imperial&appid=${process.env.OWM_API_KEY}`

    try {
        const data = (await axios.get(requestUrl)).data
        const currentWeather = {
            city: data.name,
            description: `${data.weather[0].main} – ${data.weather[0].description}`,
            currentTemperature: `${Math.round(data.main.temp)}°`,
            feelsLike: `${Math.round(data.main.feels_like)}°`,
            humidity: `${Math.round(data.main.humidity)}%`,
        }
        
        console.log(currentWeather)
        res.send({ currentWeather })
    } catch (err) {
        console.log({error: err})
        const dailyForecastFetchError = { message: 'Error fetching weather data' }
        res.status(500).send(dailyForecastFetchError)
    }
}

module.exports = {
    currentWeather
}