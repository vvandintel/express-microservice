const helloRoute = async (request, reply) => {
    reply.send({ hello: 'world' })
}

module.exports = {
    helloRoute
}