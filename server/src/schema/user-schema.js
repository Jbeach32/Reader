const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getUserById(userId: ID!): User
    getAllUsers: [User]
  }

  type Mutation {
    createUser(user: UserInput!): User
    loginUser(email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
