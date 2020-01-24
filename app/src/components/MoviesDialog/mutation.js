import { gql } from 'apollo-boost';

export const removeMovieMutation = gql`
  mutation deleteMovie( $id: ID){
    deleteMovie(id: $id ){
      id
    }
  }
`;
