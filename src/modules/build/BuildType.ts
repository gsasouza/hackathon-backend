// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';
//import { NodeInterface } from '../../interface/NodeInterface';
import * as MarkLoader from '../../mark/MarkLoader';
import MarkType from '../mark/MarkType';

export default new GraphQLObjectType({
  name: 'Build',
  description: 'Build data',
  fields: () => ({
    id: globalIdField('Build'),
    _id: {
      type: GraphQLString,
      resolve: build => build._id,
    },
    name: {
      type: GraphQLString,
      resolve: build => build.name,
    },
    mark: {
      type: MarkType,
      resolve: (obj, args, context) => MarkLoader.load(context, obj.mark),
    }
  }),
  //interfaces: () => [NodeInterface],
});
