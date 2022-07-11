import { Category, CategorySchema } from './category.model.js'

const setupModels = (sequelize) => {
  Category.init(CategorySchema, Category.config(sequelize))
}

export default setupModels
