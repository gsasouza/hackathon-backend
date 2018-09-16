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
  name: 'User',
  description: 'User data',
  fields: function fields() {
    return {
      id: (0, _graphqlRelay.globalIdField)('User'),
      _id: {
        type: _graphql.GraphQLString,
        resolve: function resolve(user) {
          return user._id;
        }
      },
      name: {
        type: _graphql.GraphQLString,
        resolve: function resolve(user) {
          return user.name;
        }
      },
      isAdmin: {
        type: _graphql.GraphQLBoolean,
        resolve: function resolve(user) {
          return user.isAdmin;
        }
      },
      email: {
        type: _graphql.GraphQLString,
        resolve: function resolve(user) {
          return user.email;
        }
      },
      active: {
        type: _graphql.GraphQLBoolean,
        resolve: function resolve(user) {
          return user.active;
        }
      }
    };
  } //interfaces: () => [NodeInterface],

});

exports.default = _default;
//# sourceMappingURL=UserType.js.map