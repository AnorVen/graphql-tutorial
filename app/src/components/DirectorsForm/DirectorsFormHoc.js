import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { addDirectorMutation, updateDirectorMutation } from './mutations';
import { graphql } from 'react-apollo';
import { styles } from './styles';
import { directorsQuery } from '../DirectorsTable/queries';

const withGraphql = compose(graphql(updateDirectorMutation, {
    props: ({ mutate }) => ({
      updateDirector: director => mutate({
        variables: director,
        refetchQueries: [{
          query: directorsQuery,
          variables: { name: '' },
        }],
      }),
    }),
  }),
  graphql(addDirectorMutation, {
    props: ({ mutate }) => ({
      addDirector: director => mutate({
        variables: director,
        refetchQueries: [{
          query: directorsQuery,
          variables: { name: '' },
        }],
      }),

    }),
  }));


export default compose(withStyles(styles), withGraphql);
