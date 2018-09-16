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
  mark: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Mark'
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  },
  collection: 'build'
});

var _default = _mongoose.default.model('Build', Schema);

exports.default = _default;
//# sourceMappingURL=BuildModel.js.map