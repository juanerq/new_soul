import { Model, DataTypes } from 'sequelize'

export const CATEGORY_TABLE_NAME = 'categories'
export const CategorySchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'category_id',
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  }
}

export class Category extends Model {
  static modelName = 'Category'

  static associate () {}

  static config (sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE_NAME,
      modelName: this.modelName,
      timestamps: false
    }
  }
}
