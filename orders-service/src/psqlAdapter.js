const Sequelize = require('sequelize');
import {
  STRING_CONNECTION
} from './config/constants'

const sequelize = new Sequelize(
  STRING_CONNECTION
);

export default sequelize;
