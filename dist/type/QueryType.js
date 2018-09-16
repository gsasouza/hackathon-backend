"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var BuildLoader = _interopRequireWildcard(require("../build/BuidLoader"));

var _BuildType = _interopRequireDefault(require("../modules/build/BuildType"));

var PathLoader = _interopRequireWildcard(require("../build/PathLoader"));

var _PathType = _interopRequireDefault(require("../modules/build/PathType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// @flow
var _default = new _graphql.GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: function fields() {
    return {
      builds: {
        type: new _graphql.GraphQLList(_BuildType.default),
        resolve: function resolve(obj, args, context) {
          return BuildLoader.loadBuilds(context, args);
        }
      },
      paths: {
        type: new _graphql.GraphQLList(_PathType.default),
        resolve: function resolve(obj, args, context) {
          return PathLoader.loadBuilds(context, args);
        }
      },
      path: {
        type: _PathType.default,
        args: {
          id: _graphql.GraphQLID
        },
        resolve: function resolve(obj, args, context) {
          return PathLoader.loadBuilds(context, args);
        }
      }
    };
  }
});

exports.default = _default;
//# sourceMappingURL=QueryType.js.map