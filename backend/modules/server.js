import express from 'express'

export default class Server {
  constructor () {
    this.app = express()
    this.port = 10101
    this.routes()
  }

  listen () {
    this.app.listen(this.port, () => console.log(`Listen in port ${this.port}`))
  }

  routes () {
    this.app.get('/api', (req, res) => {
      res.send('Hola Mundo')
    })
  }
}
