"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  marks: [{
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Mark'
  }]
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  },
  collection: 'path'
});

var _default = _mongoose.default.model('Path', Schema);

exports.default = _default;
//# sourceMappingURL=PathModel.js.map