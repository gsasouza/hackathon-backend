// @flow

import {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLBoolean, GraphQLList} from 'graphql';
import { globalIdField, connectionArgs, fromGlobalId } from 'graphql-relay';

import * as BuildLoader from '../build/BuidLoader';
import BuildType from '../modules/build/BuildType';


import * as PathLoader from '../path/PathLoader';
import PathType from '../modules/path/PathType';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    builds: {
      type: new GraphQLList(BuildType),
      resolve: (obj, args, context) => BuildLoader.loadBuilds(context, args),
    },
    paths: {
      type: new GraphQLList(PathType),
      resolve: (obj, args, context) => PathLoader.loadBuilds(context, args),
    },
    path: {
      type: PathType,
      args: {
        id: GraphQLID,
      },
      resolve: (obj, args, context) => PathLoader.loadBuilds(context, args),
    }
  })
});
