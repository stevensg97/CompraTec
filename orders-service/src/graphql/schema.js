const typeDefs = `
  type Order {
    id_order: Int!
    total: Int!
    order_date: String!
    id_user: Int!
    description: String!
  }

  type Query {
    order(id_order: Int!): Order
    allOrders: [Order]
  }

  type Mutation {
    insertOrder(
      total: Int!
      order_date: String!
      id_user: Int!
      description: String!
    ) : Order

    updateOrder(
      id_order: Int!
      total: Int!
      order_date: String!
      id_user: Int!
      description: String!
    ) : Order

    deleteOrder(
      id_order: Int!
    ) : Order
  }

  type Schema {
    query: Query
    mutation: Mutation
  }
`;

export default typeDefs;
