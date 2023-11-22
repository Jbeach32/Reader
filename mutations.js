import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      username
      email
      savedBooks {
        title
        author
        description
        image
        link
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation SignupUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      id
      username
      email
      savedBooks {
        title
        author
        description
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookTitle: String!) {
    removeBook(userId: "user_id_placeholder", bookTitle: $bookTitle) {
      id
      username
      email
      savedBooks {
        title
        author
        description
        image
        link
      }
    }
  }
`;
