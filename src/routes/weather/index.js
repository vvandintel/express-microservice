const axios = require('axios')

const dailyForecast = async (request, reply) => {
    
    const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily'
    const requestUrl = `${baseUrl}?zip=${request.query.zipcode}&appid=${process.env.OWM_API_KEY}&cnt=${request.body.daysCount}`

    try {
        const dailyForecast = await axios.get(requestUrl)
        reply.send({ dailyForecast: dailyForecast.body })
    } catch (error) {
        console.log({error: error.me})
        reply.send({ error: 'Error fetching weather data' })
    }
}

module.exports = {
    dailyForecast
}