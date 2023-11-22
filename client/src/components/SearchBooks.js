import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SEARCH_RESULTS } from '../../../shared/queries/queries'; // Define your queries file

const SearchBooks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { loading, error, data } = useQuery(GET_SEARCH_RESULTS, {
    variables: { query: searchTerm },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search for books"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Search</button>

      {data.searchBooks.map((book) => (
        <div key={book.title}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <img src={book.image} alt={book.title} />
          <a href={book.link} target="_blank" rel="noopener noreferrer">
            View on Google Books
          </a>
          <button>Save</button>
        </div>
      ))}
    </div>
  );
};

export default SearchBooks;
