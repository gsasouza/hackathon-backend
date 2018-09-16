"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _graphqlRelay = require("graphql-relay");

// @flow
//import { NodeInterface } from '../../interface/NodeInterface';
var _default = new _graphql.GraphQLObjectType({
  name: 'Mark',
  description: 'Mark data',
  fields: function fields() {
    return {
      id: (0, _graphqlRelay.globalIdField)('Mark'),
      _id: {
        type: _graphql.GraphQLString,
        resolve: function resolve(mark) {
          return mark._id;
        }
      },
      latitude: {
        type: _graphql.GraphQLString,
        resolve: function resolve(mark) {
          return mark.latitude;
        }
      },
      longitude: {
        type: _graphql.GraphQLString,
        resolve: function resolve(mark) {
          return mark.longitude;
        }
      },
      type: {
        type: _graphql.GraphQLString,
        resolve: function resolve(user) {
          return user.type;
        }
      }
    };
  } //interfaces: () => [NodeInterface],

});

exports.default = _default;
//# sourceMappingURL=MarkType.js.map