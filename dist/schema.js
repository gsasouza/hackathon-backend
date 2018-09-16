"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _QueryType = _interopRequireDefault(require("./type/QueryType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
var schema = new _graphql.GraphQLSchema({
  query: _QueryType.default //mutation: MutationType,

});
var _default = schema;
exports.default = _default;
//# sourceMappingURL=schema.js.map