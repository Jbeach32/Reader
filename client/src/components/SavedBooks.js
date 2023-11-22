import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_SAVED_BOOKS } from '../../../queries'; 
import { REMOVE_BOOK } from '../../../mutations'; 

const SavedBooks = () => {
  const { loading, error, data } = useQuery(GET_SAVED_BOOKS);

  const [removeBook] = useMutation(REMOVE_BOOK);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.getSavedBooks.map((book) => (
        <div key={book.title}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <img src={book.image} alt={book.title} />
          <a href={book.link} target="_blank" rel="noopener noreferrer">
            View on Google Books
          </a>
          <button onClick={() => removeBook({ variables: { bookTitle: book.title } })}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default SavedBooks;
