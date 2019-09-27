const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

const directorsJson = [
  { name: 'Quentin Tarantino', age: 55 }, // 5d8e426f1c9d4400004a6014
  { name: 'Michael Radford', age: 72 }, // 5d8e42a21c9d4400004a6018
  { name: 'James McTeigue', age: 51 }, // 5d8e43281c9d4400004a601a
  { name: 'Guy Ritchie', age: 50 }, // 5d8e433e1c9d4400004a601b
];
// directorId - it is ID from the directors collection
const moviesJson = [
  { name: 'Pulp Fiction', genre: 'Crime', directorId: '5d8e426f1c9d4400004a6014' },
  { name: '1984', genre: 'Sci-Fi', directorId: '5d8e42a21c9d4400004a6018' },
  { name: 'V for vendetta', genre: 'Sci-Fi-Triller', directorId: '5d8e43281c9d4400004a601a' },
  { name: 'Snatch', genre: 'Crime-Comedy', directorId: '5d8e433e1c9d4400004a601b' },
  { name: 'Reservoir Dogs', genre: 'Crime', directorId: '5d8e426f1c9d4400004a6014' },
  { name: 'The Hateful Eight', genre: 'Crime', directorId: '5d8e426f1c9d4400004a6014' },
  { name: 'Inglourious Basterds', genre: 'Crime', directorId: '5d8e426f1c9d4400004a6014' },
  {
    name: 'Lock, Stock and Two Smoking Barrels',
    genre: 'Crime-Comedy',
    directorId: '5d8e426f1c9d4400004a6014',
  },
];
const movies = [
  { id: '1', name: 'Pulp Fiction', genre: 'Crime', directorId: '1' },
  { id: '2', name: '1984', genre: 'Sci-Fi', directorId: '2' },
  { id: '3', name: 'V for vendetta', genre: 'Sci-Fi-Triller', directorId: '3' },
  { id: '4', name: 'Snatch', genre: 'Crime-Comedy', directorId: '4' },
  { id: '5', name: 'Reservoir Dogs', genre: 'Crime', directorId: '1' },
  { id: '6', name: 'The Hateful Eight', genre: 'Crime', directorId: '1' },
  { id: '7', name: 'Inglourious Basterds', genre: 'Crime', directorId: '1' },
  { id: '8', name: 'Lock, Stock and Two Smoking Barrels', genre: 'Crime-Comedy', directorId: '4' },
];
const directors = [
  { id: '1', name: 'Quentin Tarantino', age: 55 },
  { id: '2', name: 'Michael Radford', age: 72 },
  { id: '3', name: 'James McTeigue', age: 51 },
  { id: '4', name: 'Guy Ritchie', age: 50 },
];

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    ganre: { type: GraphQLString },
    director: {
      type: DirectorsType,
      resolve(parent, args) {
        return directors.find((director) => director.id == parent.id);
      },
    },
  }),
});

const DirectorsType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    movies: {
      type: GraphQLList(MovieType),
      resolve(parent, args) {
        return movies.filter((movie) => movie.directorId == parent.id);
      },
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return movies.find((movie) => movie.id == args.id);
      },
    },
    director: {
      type: DirectorsType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return directors.find((director) => director.id == args.id);
      },
    },
    movies: {
      type: GraphQLList(MovieType),
      resolve(parent, arg) {
        return movies;
      },
    },
    directors: {
      type: GraphQLList(DirectorsType),
      resolve(parent, arg) {
        return directors;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
