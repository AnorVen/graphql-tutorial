import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { deleteDirectorMutation } from './mutation';
import { directorsQuery } from '../DirectorsTable/queries';


const withGraphqlAdd = graphql(deleteDirectorMutation, {
  props: ({ mutate }) => ({
    deleteDirector: director => mutate({
      variables: director,
      refetchQueries: [{ query: directorsQuery,
        variables: { name: '' }, }],
    }),
  }),
});

export default compose(withGraphqlAdd);
