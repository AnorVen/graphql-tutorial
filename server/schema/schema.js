const graphql = require('graphql')

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;
const MoveType = new GraphQLObjectType({
    name: 'Move',
    fields: ()=>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        ganre: {type: GraphQLString},

    })
});

const Query = new GraphQLObjectType({
    mane: 'Query',
    move: {
        type: MoveType,
        args: {
            id: {type: GraphQLString}
        },
        resolve(parent, args){

        }
    }
})

module.exports = new GraphQLSchema({
    query: Query
})