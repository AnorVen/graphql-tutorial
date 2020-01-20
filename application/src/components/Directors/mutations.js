import {gql } from 'apollo-boost'

export const addDirecorMutation = gql`
  mutation addDirector($name: String!, $age: Int!)
`;
