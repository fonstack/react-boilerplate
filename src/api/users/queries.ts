import { gql } from 'graphql-request';

export const getUsersQuery = gql`
  {
    users {
      id
      email
      username
      avatar
    }
  }
`;
