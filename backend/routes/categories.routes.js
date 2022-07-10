import express from 'express'
import CategoriesControllers from '../controllers/categories.controllers.js'

const router = express.Router()

router.route('/')
  .get(CategoriesControllers.getCategories)

export default router
