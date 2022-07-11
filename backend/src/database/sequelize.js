import { Sequelize } from 'sequelize'
import config from '../config/config.js'
import setupModels from '../models/index.js'

const sequelize = new Sequelize(config.dbUrl, {
  dialect: 'mysql',
  logging: true
})

;(async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error(error)
  }
})()

setupModels(sequelize)
sequelize.sync()

export default sequelize
