const { ApolloServer, gql } = require('apollo-server');

const books = []; // Simulated in-memory database

const typeDefs = gql`
  type Book {
    title: String
    author: String
    description: String
    image: String
    link: String
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Query {
    searchBooks(query: String!): [Book]
    getSavedBooks(userId: ID!): [Book]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
    saveBook(userId: ID!, book: BookInput!): User
    removeBook(userId: ID!, bookTitle: String!): User
  }

  input BookInput {
    title: String
    author: String
    description: String
    image: String
    link: String
  }
`;

const resolvers = {
  Query: {
    searchBooks: (_, { query }) => {
      // Perform book search logic here
      // This is just a placeholder for illustration
      return books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    },
    getSavedBooks: (_, { userId }) => {
      const user = getUserById(userId);
      return user ? user.savedBooks : [];
    },
  },
  Mutation: {
    createUser: (_, { username, email, password }) => {
      const user = {
        id: String(users.length + 1),
        username,
        email,
        password,
        savedBooks: [],
      };
      users.push(user);
      return user;
    },
    loginUser: (_, { email, password }) => {
      const user = getUserByEmailAndPassword(email, password);
      return user;
    },
    saveBook: (_, { userId, book }) => {
      const user = getUserById(userId);
      if (user) {
        user.savedBooks.push(book);
      }
      return user;
    },
    removeBook: (_, { userId, bookTitle }) => {
      const user = getUserById(userId);
      if (user) {
        user.savedBooks = user.savedBooks.filter(book => book.title !== bookTitle);
      }
      return user;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
