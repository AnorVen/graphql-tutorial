const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

const movies = [
  { id: 1, name: '1984', ganre: 'fight' },
  { id: 2, name: '20 000 lie', ganre: 'SCARY' },
  { id: '3', name: '3 мушкетера', ganre: 'sci-fi' },
  { id: '4', name: '4 ноги', ganre: 'fight' },
];
const MoveiType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    ganre: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MoveiType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return movies.find((movie) => movie.id == args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
