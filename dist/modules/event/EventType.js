"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _graphqlRelay = require("graphql-relay");

var MarkLoader = _interopRequireWildcard(require("../../mark/MarkLoader"));

var BuildLoader = _interopRequireWildcard(require("../../build/BuidLoader"));

var _MarkType = _interopRequireDefault(require("../mark/MarkType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
          return MarkLoader.loadMarks(context, obj.mark);
        }
      },
      build: {
        type: _MarkType.default,
        resolve: function resolve(obj, args, context) {
          return BuildLoader.loadBuilds(context, obj.build);
        }
      }
    };
  } //interfaces: () => [NodeInterface],

});

exports.default = _default;
//# sourceMappingURL=EventType.js.map