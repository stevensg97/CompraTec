import Order from '../models/order';

const resolvers = {
  Query: {
    async order(_, { id_order }) {
      return await Order.findOne({where: {id_order:id_order}});
    },
    async allOrders() {
      return await Order.findAll();
    }
  },
  Mutation: {
    async insertOrder(_, { total, order_date, id_user, description }) {
      return await Order.create({total: total, order_date: order_date, id_user: id_user, description: description})
    },
    async updateOrder(_, { id_order, total, order_date, id_user, description }) {
      return await Order.update({ total: total, order_date: order_date, id_user: id_user, description: description},{where: {id_order: id_order}})
    },
    async deleteOrder(_, { id_order }) {
      return await Order.destroy({where: {id_order: id_order}})
    }
  }
};

export default resolvers;
