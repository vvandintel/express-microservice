const axios = require('axios')

const dailyForecast = async (request, reply) => {
    
    const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily'
    const requestUrl = `${baseUrl}?zip=${request.query.zipcode}&appid=${process.env.OWM_API_KEY}&cnt=${request.body.daysCount}`

    const dailyForecast = await axios.get(requestUrl)
    reply.send({ dailyForecast: dailyForecast.body })
}

module.exports = {
    dailyForecast
}