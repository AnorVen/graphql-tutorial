import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { removeMovieMutation } from './mutation';
import { moviesQuery } from '../MoviesTable/queries';
import { directorsQuery } from '../DirectorsTable/queries';


const withGraphqlAdd = graphql(removeMovieMutation, {
  props: ({ mutate }) => ({
    deleteMovie: movie => mutate({
      variables: movie,
      refetchQueries: [{ query: moviesQuery,
        variables: { name: '' }, }],
    }),
  }),
});

export default compose(withGraphqlAdd);
