const { books, users, getUserById } = require('./data/dummy-data');

const bookResolvers = {
  Query: {
    searchBooks: (_, { query }) => {
      return books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));
    },
  },
  Mutation: {
    addBook: (_, { book }) => {
        // Mutation to add a new book
        const newBook = { ...book, id: String(books.length + 1) };
        books.push(newBook);
        return newBook;
      },
  
      updateBook: (_, { bookId, updatedBook }) => {
        // Mutation to update book details
        const index = books.findIndex((book) => book.id === bookId);
        if (index !== -1) {
          books[index] = { ...books[index], ...updatedBook };
          return books[index];
        }
        throw new Error(`Book with ID ${bookId} not found.`);
      },
  
      deleteBook: (_, { bookId }) => {
        // Mutation to delete a book
        const index = books.findIndex((book) => book.id === bookId);
        if (index !== -1) {
          const deletedBook = books.splice(index, 1)[0];
          return deletedBook;
        }
        throw new Error(`Book with ID ${bookId} not found.`);
      },
    },
    };

module.exports = bookResolvers;

