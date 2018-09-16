"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var eventSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dateStart: {
    type: Date,
    required: true,
    default: Date.now
  },
  dateEnd: {
    type: Date,
    required: true
  },
  mark: {
    type: Schema.Types.ObjectId,
    ref: 'Mark'
  },
  build: {
    type: Schema.Types.ObjectId,
    ref: 'Build'
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  },
  collection: 'event'
});

var _default = _mongoose.default.model('Event', eventSchema);

exports.default = _default;
//# sourceMappingURL=EventModel.js.map