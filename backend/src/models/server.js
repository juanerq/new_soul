import config from '../config/config.js'
import express from 'express'
import routerCategories from '../routes/categories.routes.js'

export default class Server {
  constructor () {
    this.app = express()
    this.port = config.port
    this.routes()
  }

  listen () {
    this.app.listen(this.port, () => console.log(`Listen in port ${this.port}`))
  }

  routes () {
    this.app.use('/api', routerCategories)
  }
}
