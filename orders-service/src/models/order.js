const Sequelize = require('sequelize');
import sequelize from '../psqlAdapter'

const Order = sequelize.define('order', {
  id_order: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  total: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  order_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  id_user: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

export default Order;
