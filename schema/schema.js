const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
const _ = require('lodash');
const users = [
  { id: '23', firstName: 'Bill1', age: 20 },
  { id: '24', firstName: 'Bill2', age: 20 },
  { id: '25', firstName: 'Bill3', age: 20 },
  { id: '26', firstName: 'Bill4', age: 20 },
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
