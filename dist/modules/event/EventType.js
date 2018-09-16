"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _graphqlRelay = require("graphql-relay");

var _MarkLoader = _interopRequireDefault(require("../../mark/MarkLoader"));

var _BuidLoader = _interopRequireDefault(require("../../build/BuidLoader"));

var _MarkType = _interopRequireDefault(require("../mark/MarkType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
//import { NodeInterface } from '../../interface/NodeInterface';
var _default = new _graphql.GraphQLObjectType({
  name: 'Event',
  description: 'Event data',
  fields: function fields() {
    return {
      id: (0, _graphqlRelay.globalIdField)('Event'),
      _id: {
        type: _graphql.GraphQLString,
        resolve: function resolve(path) {
          return path._id;
        }
      },
      name: {
        type: _graphql.GraphQLString,
        resolve: function resolve(path) {
          return path.name;
        }
      },
      dateStart: {
        type: _graphql.GraphQLString,
        resolve: function resolve(path) {
          return path.dateStart;
        }
      },
      dateEnd: {
        type: _graphql.GraphQLString,
        resolve: function resolve(path) {
          return path.dateEnd;
        }
      },
      mark: {
        type: _MarkType.default,
        resolve: function resolve(obj, args, context) {
          return _MarkLoader.default.loadMarks(context, obj.mark);
        }
      },
      build: {
        type: _MarkType.default,
        resolve: function resolve(obj, args, context) {
          return _BuidLoader.default.loadBuilds(context, obj.build);
        }
      }
    };
  } //interfaces: () => [NodeInterface],

});

exports.default = _default;
//# sourceMappingURL=EventType.js.map