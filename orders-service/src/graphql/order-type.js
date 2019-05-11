/*
exports.resolver = {
  Query: {
    orders( args, ctx) {
      const ordersQuery = 'select * from orders where id_order = 1';
      return psql.manyOrNone(ordersQuery);
    }
  }
}; */

const graphql = require ('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt } = graphql

const OrderType = new GraphQLObjectType({
    name: 'Order',
    fields: ()=>({
        id_order: {type:GraphQLInt},
        total: {type:GraphQLInt},
        order_date: {type: GraphQLString},
        id_user: {type: GraphQLInt},
        description: {type: GraphQLString}
    })
})

export default OrderType
