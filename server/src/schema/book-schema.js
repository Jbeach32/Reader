const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    description: String
    image: String
    link: String
  }

  input BookInput {
    title: String!
    author: String!
    description: String
    image: String
    link: String
  }

  type Query {
    searchBooks(query: String!): [Book]
    getBookById(bookId: ID!): Book
  }

  type Mutation {
    addBook(book: BookInput!): Book
    updateBook(bookId: ID!, updatedBook: BookInput!): Book
    deleteBook(bookId: ID!): Book
  }
`;

module.exports = typeDefs;

