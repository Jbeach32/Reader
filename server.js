const { ApolloServer } = require('apollo-server');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { books, users, getUserById, getUserByEmailAndPassword } = require('./data/dummy-data');
const bookResolvers = require('./resolvers/book-resolvers');
const userResolvers = require('./resolvers/user-resolvers');
const bookSchema = require('./server/src/schema/book-schema'); 
const userSchema = require('./server/src/schema/user-schema'); 

const mergedTypeDefs = mergeTypeDefs([bookSchema, userSchema]);
const mergedResolvers = mergeResolvers([bookResolvers, userResolvers]);

const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

