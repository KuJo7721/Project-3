const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    isadmin: Boolean
   orders: [Order]
  }

  type Order {
    _id: ID
    width: Number
    height: Number
    price: Number
    text: String
  }

 

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    order(orderid: ID!): Order
    orders: [Order]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOrder(width: Number,height: Number,price: Number, text: String): Order
    removeOrder(orderId: ID!): Order
  }
`;

module.exports = typeDefs;
