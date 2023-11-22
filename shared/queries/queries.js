import { gql } from '@apollo/client';

export const GET_SEARCH_RESULTS = gql`
  query SearchBooks($query: String!) {
    searchBooks(query: $query) {
      title
      author
      description
      image
      link
    }
  }
`;

export const GET_SAVED_BOOKS = gql`
  query GetSavedBooks {
    getSavedBooks {
      title
      author
      description
      image
      link
    }
  }
`;
