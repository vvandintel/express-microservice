const axios = require('axios')

const dailyForecast = async (request, reply, next) => {
    
    // const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily'
    const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast/weather'
    const requestUrl = `${baseUrl}?zip=${request.query.zipcode}&appid=${process.env.OWM_API_KEY}&cnt=${request.body.daysCount}`

    try {
        const dailyForecast = await axios.get(requestUrl)
        reply.send({ dailyForecast: dailyForecast.body })
    } catch (error) {
        console.log({error: error.stack})
        const dailyForecastFetchError = new Error('Error fetching weather data' )
        next(dailyForecastFetchError)
    }
}

module.exports = {
    dailyForecast
}