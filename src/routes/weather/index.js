const axios = require('axios')

const dailyForecast = async (req, res) => {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily'
    const requestUrl = `${baseUrl}?zip=${req.query.zipcode}&appid=${process.env.OWM_API_KEY}&cnt=${req.body.daysCount}`

    try {
        const dailyForecast = await axios.get(requestUrl)
        res.send({ dailyForecast: dailyForecast.body })
    } catch (err) {
        console.log({error: err.stack})
        const dailyForecastFetchError = { message: 'Error fetching weather data' }
        res.status(500).send(dailyForecastFetchError)
    }
}

module.exports = {
    dailyForecast
}