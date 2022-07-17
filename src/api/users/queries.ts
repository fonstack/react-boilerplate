import { gql } from 'graphql-request';

export const getUsersQuery = gql`
  query getUsers {
    users {
      id
      email
      username
      avatar
    }
  }
`;

export const getUserByIdQuery = gql`
  query getUser($userId: Int!) {
    user(id: $userId) {
      id
      email
      username
      avatar
      phone
      website
    }
  }
`;
