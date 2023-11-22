const { users, getUserById, getUserByEmailAndPassword } = require('./data/dummy-data');

const userResolvers = {
  Query: {
    Query: {
        getUser: (_, { userId }) => {
          return getUserById(userId);
        },
    
        getAllUsers: () => {
          return users;
        },
      },
  },
  Mutation: {
    createUser: (_, { username, email, password }) => {
      const newUser = {
        id: String(users.length + 1),
        username,
        email,
        password,
        savedBooks: [],
      };
      users.push(newUser);
      return newUser;
    },

    loginUser: (_, { email, password }) => {
      const user = getUserByEmailAndPassword(email, password);
      return user;
    },
  },
  User: {
    savedBooks: (parent) => {
      return parent.savedBooks;
    },
  },
};

module.exports = userResolvers;
