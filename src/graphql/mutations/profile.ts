import { gql } from '@apollo/client';

export const GET_PROFILE_QUERY = gql`
  query GetProfile($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
    }
  }
`;
