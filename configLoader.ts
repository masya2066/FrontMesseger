const env = require('./app.config.json')

export const config = {
    URL_INTERFACE: env.PROTOCOL + env.URL_INTERFACE
}